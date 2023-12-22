import { useEffect, useState } from "react";
import API from "../../utils/api-client";
import Layout from "../../components/Layout";
import search_bar from '../../components/search_section/Search_bar';
import Article from '../../components/articles/Article'

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
            <div className='test-div'>
                <search_bar/>
                <Article/>
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            </div> 
        </Layout>
    )
}

export default Search