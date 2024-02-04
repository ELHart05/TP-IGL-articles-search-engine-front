import Layout from '../../components/Layout';
import Hero from '../../components/Home/Hero';
import WhyUs from '../../components/Home/WhyUs';
import Informations from '../../components/Home/Informations';
import SearchBar from '../../components/search/SearchBar';
import WelcomeUser from '../../components/WelcomeUser';
import isValidUser from '../../utils/isValidUser';
import Article from '../../components/search/Article';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import API from '../../utils/api-client';
import Spinner from 'react-spinner-material';
import './style.css';

const Home = () => {

    const { user } = isValidUser();
    const [isLoading, setIsLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    const [searchArticles, setSearchArticles] = useState([]);
    const [dataLength, setDataLength] = useState(0);
    const [filters, setFilters] = useState({
        Keywords: "",
        Authors: false,
        Institutions: false
    });

    useEffect(() => {
        const getAllArticles = async () => {
        if (!user) {
            return;
        }
        try {
            const res = await API.get(`elasticsearch/get_data/?user_id=${user?.id}`);
            setSearchArticles(res.data);
        
            toast.success('Article loaded successfully!', {
                position: "top-center",
                autoClose: 5000,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            })

        } catch (error) {
                toast.error(error?.response?.data?.error ?? 'Error', {
                    position: "top-center",
                    autoClose: 5000,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                })
                navigate('/search')
            } finally {
                setIsLoading(false);
            }
        }
        getAllArticles()
    }, [])

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            search_query: ''
        }
    })
    const searchRegister = register('search_query', {
        required: {
            value: true,
            message: 'Search value is required to proceed'
        }
    })

    const onSubmit = async ({ search_query }) => {
        try {
            setIsLoading(true)

            const res = await API.get(`elasticsearch/search/${search_query}/`)
            
            setDataLength(res?.data?.length ?? 0);
            setArticles(res?.data ?? []);
            setSearchArticles(res?.data ?? []);
        
            toast.success('Search results are here!', {
                position: "top-center",
                autoClose: 5000,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            })
    
        } catch (error) {
            toast.error('Something went wrong, try again!', {
                position: "top-center",
                autoClose: 5000,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            })
        } finally {
            setIsLoading(false)
        }
    }

    const filterArticles = () => {
        let filteredArticles = articles.slice();
    
        if (filters.Authors) {
            filteredArticles = filteredArticles.filter((article) =>
                article?.authors.some((author) => author.includes(filters.Authors))
            );
        } else {
            filteredArticles = articles;
        }
    
        if (filters.Institutions) {
            filteredArticles = filteredArticles.filter((article) =>
            article?.institutions.some((institution) => institution.includes(filters.Institutions))
            );
        } else {
            filteredArticles = articles;
        }
    
        if (filters.Keywords) {
            filteredArticles = filteredArticles.filter((article) =>
            article?.keywords.some((keyword) => keyword.includes(filters.Keywords))
            );
        } else {
            filteredArticles = articles;
        }

        setSearchArticles([...filteredArticles]);
    };

    return (
        <Layout isLoading={false}>
            <div className='pb-10'>
                {!user && <Hero />}
                <div className={`flex flex-col gap-16 ${(user) ? 'mt-10' : 'mt-20'} px-9`}>
                    {user &&
                    <div>
                        <h3 className='text-lg sm:text-xl font-bold w-fit'><WelcomeUser /></h3>
                        <h4 className='text-sm mb-4 sm:text-lg w-fit font-bold'>Search then Filter and explore  your articles</h4>
                        <SearchBar
                            searchRegister={searchRegister}
                            handleSubmit={handleSubmit}
                            errors={errors}
                            onSubmit={onSubmit}
                            setFilters={setFilters}
                            filterArticles={filterArticles}
                            dataLength={dataLength}
                        />
                    </div>}
                    {
                        user &&
                        <>
                            {
                                isLoading
                                ?
                                <div className='w-full flex-1 items-center justify-center flex p-20'>
                                    <Spinner />
                                </div>
                                :
                                !!searchArticles.length
                                ?
                                <div className="w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center lg:grid-cols-3 gap-x-2 gap-y-8">
                                    {searchArticles.map((article, index) => (
                                        <Article key={index} {...article} index={index} />
                                    ))}
                                </div>
                                :
                                <h5 className='text-center font-bold text-4xl sm:text-7xl w-full py-24'>No articles founded</h5>
                            }
                        </>
                    }
                    {!user && <WhyUs />}
                    <Informations />
                </div>
            </div>
        </Layout>
    )
}

export default Home