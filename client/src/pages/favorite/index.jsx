import ArticlesList, { articles } from '../../components/Home/ArticlesList'
import Layout from '../../components/Layout'
import Article from '../../components/search_section/Article'

const Favorite = () => {
    return (
        <Layout isLoading={false}>
            <div className='flex flex-col gap-6 p-9'>
                <h1 className='text-lg sm:text-xl font-bold w-fit'>Welcome <span className='text-red'>Amel</span> to Your favorite articles</h1>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-16">
                    {
                        articles.map((article, index) => (
                            <Article key={index} {...article} />
                        ))
                    }
                </div>
                <ArticlesList />
            </div>
        </Layout>
    )
}

export default Favorite