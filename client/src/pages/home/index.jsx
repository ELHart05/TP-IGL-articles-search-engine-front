import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import Hero from '../../components/Home/Hero';
import ArticlesList from '../../components/Home/ArticlesList';
import WhyUs from '../../components/Home/WhyUs';
import Informations from '../../components/Home/Informations';
import './style.css';
import SearchBar from '../../components/search_section/Search_bar';

const Home = () => {
    const [user, setUser] = useState(false);

    useEffect(() => {
        //add getting user data logic...
    }, [])

    return (
        <Layout isLoading={false}>
            <div className='pb-10'>
                {!user && <Hero />}
                <div className={`flex flex-col gap-16 ${(user) ? 'mt-10' : 'mt-20'} px-9`}>
                    {user && 
                    <div>
                        <h3 className='text-lg sm:text-xl font-bold w-fit'>Welcome <span className='text-red'>Amel</span></h3>
                        <h4 className='text-sm mb-4 sm:text-lg w-fit'>Filter and search then  explore  your articles</h4>
                        <SearchBar />
                    </div>}
                    {!user && <WhyUs />}
                    <ArticlesList />
                    <Informations />
                </div>
            </div>
        </Layout>
    )
}

export default Home