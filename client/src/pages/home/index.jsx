import Layout from '../../components/Layout';
import Hero from '../../components/Home/Hero';
import ArticlesList from '../../components/Home/ArticlesList';
import WhyUs from '../../components/Home/WhyUs';
import Informations from '../../components/Home/Informations';
import SearchBar from '../../components/search/SearchBar';
import WelcomeUser from '../../components/WelcomeUser';
import isValidUser from '../../utils/isValidUser';
import './style.css';

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

const Home = () => {

    const { user } = isValidUser();

    return (
        <Layout isLoading={false}>
            <div className='pb-10'>
                {!user && <Hero />}
                <div className={`flex flex-col gap-16 ${(user) ? 'mt-10' : 'mt-20'} px-9`}>
                    {user && 
                    <div>
                        <h3 className='text-lg sm:text-xl font-bold w-fit'><WelcomeUser /></h3>
                        <h4 className='text-sm mb-4 sm:text-lg w-fit'>Filter and search then  explore  your articles</h4>
                        <SearchBar />
                    </div>}
                    {!user && <WhyUs />}
                    <ArticlesList articles={articles} />
                    <Informations />
                </div>
            </div>
        </Layout>
    )
}

export default Home