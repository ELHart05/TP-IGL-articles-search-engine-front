import { useEffect, useState } from "react";
import API from "../../utils/api-client";
import Layout from "../../components/Layout";
import Article from '../../components/search/Article/index';
import SearchBar from "../../components/search/SearchBar";

const Search = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const articles = [
        {
            head: "Resume1",
            paragraph: "The recent Tailwind CSS update presents a comprehensive set of enhancements. Among the notable improvements are revamped utility classes, offering a wider array of options for developers seeking versatile styling solutions. Performance optimizations stand out as a pivotal focus, streamlining the framework's codebase to enable faster loading times and smoother rendering. Additionally, this update introduces new configuration possibilities, allowing for a more tailored approach to project-specific requirements. Addressing reported bugs and stability issues, the update aims to fortify the framework's reliability. Accompanying these changes is a...",
            title: "Title",
            favorite: false,
            id: "1"
        },
        {
            head: "Resume2",
            paragraph: "The recent Tailwind CSS update presents a comprehensive set of enhancements. Among the notable improvements are revamped utility classes, offering a wider array of options for developers seeking versatile styling solutions. Performance optimizations stand out as a pivotal focus, streamlining the framework's codebase to enable faster loading times and smoother rendering. Additionally, this update introduces new configuration possibilities, allowing for a more tailored approach to project-specific requirements. Addressing reported bugs and stability issues, the update aims to fortify the framework's reliability. Accompanying these changes is a...",
            title: "Title",
            favorite: true,
            id: "2"
        },
        {
            head: "Resume3",
            paragraph: "The recent Tailwind CSS update presents a comprehensive set of enhancements. Among the notable improvements are revamped utility classes, offering a wider array of options for developers seeking versatile styling solutions. Performance optimizations stand out as a pivotal focus, streamlining the framework's codebase to enable faster loading times and smoother rendering. Additionally, this update introduces new configuration possibilities, allowing for a more tailored approach to project-specific requirements. Addressing reported bugs and stability issues, the update aims to fortify the framework's reliability. Accompanying these changes is a...",
            title: "Title",
            favorite: true,
            id: "3"
        },
        {
            head: "Resume1",
            paragraph: "The recent Tailwind CSS update presents a comprehensive set of enhancements. Among the notable improvements are revamped utility classes, offering a wider array of options for developers seeking versatile styling solutions. Performance optimizations stand out as a pivotal focus, streamlining the framework's codebase to enable faster loading times and smoother rendering. Additionally, this update introduces new configuration possibilities, allowing for a more tailored approach to project-specific requirements. Addressing reported bugs and stability issues, the update aims to fortify the framework's reliability. Accompanying these changes is a...",
            title: "Title",
            favorite: true,
            id: "1"
        },
        {
            head: "Resume2",
            paragraph: "The recent Tailwind CSS update presents a comprehensive set of enhancements. Among the notable improvements are revamped utility classes, offering a wider array of options for developers seeking versatile styling solutions. Performance optimizations stand out as a pivotal focus, streamlining the framework's codebase to enable faster loading times and smoother rendering. Additionally, this update introduces new configuration possibilities, allowing for a more tailored approach to project-specific requirements. Addressing reported bugs and stability issues, the update aims to fortify the framework's reliability. Accompanying these changes is a...",
            title: "Title",
            favorite: true,
            id: "2"
        },
        {
            head: "Resume3",
            paragraph: "The recent Tailwind CSS update presents a comprehensive set of enhancements. Among the notable improvements are revamped utility classes, offering a wider array of options for developers seeking versatile styling solutions. Performance optimizations stand out as a pivotal focus, streamlining the framework's codebase to enable faster loading times and smoother rendering. Additionally, this update introduces new configuration possibilities, allowing for a more tailored approach to project-specific requirements. Addressing reported bugs and stability issues, the update aims to fortify the framework's reliability. Accompanying these changes is a...",
            title: "Title",
            favorite: true,
            id: "3"
        },
    ]

    useEffect(() => {
        API.get('/posts')
            .then((response) => {
                setLoading(false);
                setPosts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    return (
        <Layout isLoading={loading}>
            <div className='w-full'>
                <SearchBar />
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 py-16 gap-8">
                    {
                        articles.map((article, index) => (
                            <Article key={index} {...article} />
                        ))
                    }
                </div>
                {/* <ul>
                    {posts.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul> */}
            </div> 
        </Layout>
    )
}

export default Search