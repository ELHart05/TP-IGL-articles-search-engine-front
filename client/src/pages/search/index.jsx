import { useEffect, useState } from "react";
import API from "../../utils/api-client";
import Layout from "../../components/Layout";
import Article from '../../components/search_section/Article/index';
import { articles } from "../../components/Home/ArticlesList";
import SearchBar from "../../components/search_section/Search_bar";

const Search = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

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