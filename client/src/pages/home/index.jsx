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
                setSearchArticles(res?.data ?? []);

                if (res?.response?.data?.includes('index_not_found_exception')) {
                    throw new Error('No articles added, contact admins to upload new ones!')
                }
            
                toast.success('Article loaded successfully!', {
                    position: "top-center",
                    autoClose: 5000,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                })

            } catch (error) {
                toast.error(error?.response?.data?.error ?? error?.message ?? 'Error', {
                    position: "top-center",
                    autoClose: 5000,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                })
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

            const res = await API.get(`elasticsearch/search/${search_query}/?user_id=${user?.id}`)
            
            setDataLength(res?.data?.length ?? 0);
            setArticles(res?.data ?? []);
            setSearchArticles(res?.data ?? []);

            if (res?.response?.data?.error?.includes('index_not_found_exception')) {
                throw new Error('No articles added, contact admins to upload new ones!')
            }
        
            toast.success('Search results are here!', {
                position: "top-center",
                autoClose: 5000,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            })
    
        } catch (error) {
            toast.error(error?.message ?? 'Something went wrong, try again!', {
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
        let A = [];
        let I = [];
        let K = [];
    
        if (!filters.Authors && !filters.Institutions && !filters.Keywords) {
            setSearchArticles([...filteredArticles]);
            return;
        }
    
        const filterIgnoreCase = (item, filter) =>
            item.toLowerCase().includes(filter.toLowerCase());
    
        if (filters.Authors) {
            A = filteredArticles.filter((article) =>
                article?.authors.some((author) => filterIgnoreCase(author, filters.Authors))
            );
        }
    
        if (filters.Institutions) {
            I = filteredArticles.filter((article) =>
                article?.institutions.some((institution) =>
                    filterIgnoreCase(institution, filters.Institutions)
                )
            );
        }
    
        if (filters.Keywords) {
            K = filteredArticles.filter((article) =>
                article?.keywords.some((keyword) => filterIgnoreCase(keyword, filters.Keywords))
            );
        }
    
        setSearchArticles([...new Set([...A, ...I, ...K])]);
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
                                searchArticles.length === 0 || searchArticles.every((article) => !article?.approved)
                                ?
                                <h5 className='text-center font-bold text-4xl sm:text-7xl w-full py-24'>No articles founded</h5>
                                :
                                <div className="w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center lg:grid-cols-3 gap-x-2 gap-y-8">
                                    {searchArticles.map((article, index) => (
                                        (article?.approved) && <Article key={index} {...article} index={index} />
                                    ))}
                                </div>
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