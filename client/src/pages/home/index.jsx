import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import Hero from '../../components/Home/Hero';
import ArticlesList from '../../components/Home/ArticlesList';
import WhyUs from '../../components/Home/WhyUs';
import Informations from '../../components/Home/Informations';
import './style.css';

const Home = () => {
    const [user, setUser] = useState(false);

    useEffect(() => {
        //add getting user data logic
    }, [])

    return (
        <Layout isLoading={false}>
            <div className='pb-10'>
                {!user ? <Hero /> : "searchcomponent"}
                <div className='flex flex-col gap-16 mt-20 px-9'>
                    {!user && <WhyUs />}
                    <ArticlesList />
                    <Informations user={user} />
                </div>
            </div>
        </Layout>
    )
}

export default Home