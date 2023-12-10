import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import API from "../../utils/api-client"
import './style.css';

const HomePage = () => {
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
            <h1>This is my HomePage</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </Layout>
    )
}

export default HomePage