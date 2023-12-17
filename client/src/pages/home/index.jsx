import Layout from '../../components/Layout';
import Hero from '../../components/Home/Hero';
import ArticlesList from '../../components/Home/ArticlesList';
import WhyUs from '../../components/Home/WhyUs';
import Informations from '../../components/Home/Informations';
import './style.css';

const Home = () => {
    return (
        <Layout isLoading={false}>
            <div className='pb-10'>
                <Hero />
                <div className='flex flex-col gap-16 mt-20 px-9'>
                    <WhyUs />
                    <ArticlesList />
                    <Informations />
                </div>
            </div>
        </Layout>
    )
}

export default Home