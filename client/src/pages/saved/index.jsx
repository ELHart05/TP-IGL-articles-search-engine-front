import ArticlesList from '../../components/Home/ArticlesList'
import Layout from '../../components/Layout'
import WelcomeUser from '../../components/WelcomeUser'
import Article from '../../components/search/Article'

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

const Saved = () => {
    return (
        <Layout isLoading={false}>
            <div className='flex flex-col gap-6 p-9'>
                <h1 className='text-lg sm:text-xl font-bold w-fit'><WelcomeUser /> to Your saved articles</h1>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-16">
                    {
                        articles.map((article, index) => (
                            <Article key={index} {...article} />
                        ))
                    }
                </div>
                <ArticlesList articles={articles} />
            </div>
        </Layout>
    )
}

export default Saved