import Layout from '../../components/Layout'
import WelcomeUser from '../../components/WelcomeUser'
import Article from '../../components/search/Article'
import { toast } from 'react-toastify';
import API from "../../utils/api-client";
import { useState, useEffect } from "react";
import isValidUser from '../../utils/isValidUser'


const Favorite = () => {

    const { user } = isValidUser();
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getFavoriteArticles = async () => {
            try {
                const res = await API.get(`elasticsearch/get_favorites/${user?.id}/`);
                setArticles(res?.data?.favorite_articles);
            } catch (error) {
                toast.error(error?.response?.data?.error ?? 'Error while fetching favorite articles', {
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

        getFavoriteArticles();
    }, [])

    return (
        <Layout isLoading={isLoading}>
            <div className='w-full flex flex-col gap-6 p-9'>
                <h1 className='text-lg sm:text-xl font-bold w-fit'><WelcomeUser /> to Your favorite articles</h1>
                {
                    !!articles.length
                    ?
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center lg:grid-cols-3 gap-y-8 gap-x-16">
                        {articles.map((article, index) => (
                            <Article key={index} {...article} />
                        ))}
                    </div>
                    :
                    <h5 className='text-center font-bold text-7xl w-full py-24'>No articles saved</h5>
                }
            </div>
        </Layout>
    )
}

export default Favorite