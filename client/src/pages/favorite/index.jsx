import ArticlesList from '../../components/Home/ArticlesList'
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
                const res = await API.get(`elasticsearch/get_favorites/${user.id}/`);
                setArticles(res.data);
            } catch (error) {
                toast.error(error?.response?.data?.error ?? 'Error', {
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

    // const articles = [
    //     {
    //         head: "Resume1",
    //         paragraph: "The recent Tailwind CSS update presents a comprehensive set of enhancements. Among the notable improvements are revamped utility classes, offering a wider array of options for developers seeking versatile styling solutions. Performance optimizations stand out as a pivotal focus, streamlining the framework's codebase to enable faster loading times and smoother rendering. Additionally, this update introduces new configuration possibilities, allowing for a more tailored approach to project-specific requirements. Addressing reported bugs and stability issues, the update aims to fortify the framework's reliability. Accompanying these changes is a...",
    //         title: "Title",
    //         favorite: false,
    //         id: "1"
    //     },
    //     {
    //         head: "Resume2",
    //         paragraph: "The recent Tailwind CSS update presents a comprehensive set of enhancements. Among the notable improvements are revamped utility classes, offering a wider array of options for developers seeking versatile styling solutions. Performance optimizations stand out as a pivotal focus, streamlining the framework's codebase to enable faster loading times and smoother rendering. Additionally, this update introduces new configuration possibilities, allowing for a more tailored approach to project-specific requirements. Addressing reported bugs and stability issues, the update aims to fortify the framework's reliability. Accompanying these changes is a...",
    //         title: "Title",
    //         favorite: true,
    //         id: "2"
    //     },
    //     {
    //         head: "Resume3",
    //         paragraph: "The recent Tailwind CSS update presents a comprehensive set of enhancements. Among the notable improvements are revamped utility classes, offering a wider array of options for developers seeking versatile styling solutions. Performance optimizations stand out as a pivotal focus, streamlining the framework's codebase to enable faster loading times and smoother rendering. Additionally, this update introduces new configuration possibilities, allowing for a more tailored approach to project-specific requirements. Addressing reported bugs and stability issues, the update aims to fortify the framework's reliability. Accompanying these changes is a...",
    //         title: "Title",
    //         favorite: true,
    //         id: "3"
    //     },
    //     {
    //         head: "Resume1",
    //         paragraph: "The recent Tailwind CSS update presents a comprehensive set of enhancements. Among the notable improvements are revamped utility classes, offering a wider array of options for developers seeking versatile styling solutions. Performance optimizations stand out as a pivotal focus, streamlining the framework's codebase to enable faster loading times and smoother rendering. Additionally, this update introduces new configuration possibilities, allowing for a more tailored approach to project-specific requirements. Addressing reported bugs and stability issues, the update aims to fortify the framework's reliability. Accompanying these changes is a...",
    //         title: "Title",
    //         favorite: true,
    //         id: "1"
    //     },
    //     {
    //         head: "Resume2",
    //         paragraph: "The recent Tailwind CSS update presents a comprehensive set of enhancements. Among the notable improvements are revamped utility classes, offering a wider array of options for developers seeking versatile styling solutions. Performance optimizations stand out as a pivotal focus, streamlining the framework's codebase to enable faster loading times and smoother rendering. Additionally, this update introduces new configuration possibilities, allowing for a more tailored approach to project-specific requirements. Addressing reported bugs and stability issues, the update aims to fortify the framework's reliability. Accompanying these changes is a...",
    //         title: "Title",
    //         favorite: true,
    //         id: "2"
    //     },
    //     {
    //         head: "Resume3",
    //         paragraph: "The recent Tailwind CSS update presents a comprehensive set of enhancements. Among the notable improvements are revamped utility classes, offering a wider array of options for developers seeking versatile styling solutions. Performance optimizations stand out as a pivotal focus, streamlining the framework's codebase to enable faster loading times and smoother rendering. Additionally, this update introduces new configuration possibilities, allowing for a more tailored approach to project-specific requirements. Addressing reported bugs and stability issues, the update aims to fortify the framework's reliability. Accompanying these changes is a...",
    //         title: "Title",
    //         favorite: true,
    //         id: "3"
    //     },
    // ]

    return (
        <Layout isLoading={isLoading}>
            <div className='w-full flex flex-col gap-6 p-9'>
                <h1 className='text-lg sm:text-xl font-bold w-fit'><WelcomeUser /> to Your favorite articles</h1>
                {
                    articles.length>0
                    ?
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center lg:grid-cols-3 gap-y-8 gap-x-16">
                        {articles.map((article, index) => (
                            <Article key={index} {...article} />
                        ))}
                    </div>
                    :
                    <h5 className='text-center font-bold text-7xl w-full py-24'>No articles saved</h5>
                }
                {/* <ArticlesList articles={articles} /> */}
            </div>
        </Layout>
    )
}

export default Favorite