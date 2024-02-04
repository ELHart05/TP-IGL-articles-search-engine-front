import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import LayoutMod from '../../../components/mod/LayoutMod'
import API from '../../../utils/api-client'
import { toast } from 'react-toastify';
import './style.css'

const ArticleItem = ({ articles, setArticles, index, id, title, approved }) => {

    const deleteArticle = async (id) => {
        try {
            const response = await API.get(`/elasticsearch/delete_article/${id}/`);
            // If the deletion was successful, update the articles state
            if (response.status === 200) {
                const updatedArticles = articles.filter(article => article.id !== id);
                setArticles(updatedArticles);
                toast.success('Article delete successfully!', {
                    position: "top-center",
                    autoClose: 5000,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                })
            }
        } catch (error) {
            toast.error('Something went wrong, try again!', {
                position: "top-center",
                autoClose: 5000,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            })
        }
    };

    return (
        <div className='w-full border-2 border-black rounded-xl px-4 py-3 gap-x-4 gap-y-2 flex items-center justify-between flex-wrap-reverse'>
            <div className='flex items-center gap-2'>
                <div className='cursor-pointer'>
                    <img src={(approved) ? '/panel/images/ellipse/ellipse.svg' : '/panel/images/ellipse/ellipse-empty.svg'} alt="Ellipse" />
                </div>
                <span className='text-xl'>{index}</span>
            </div>
            <div className='text-lg sm:text-xl lg:text-2xl'>
                <span>{
                    title.length <= 80 ? title : `${title.slice(0,80)}...`   
                }
                </span>
            </div>
            <div className='flex gap-2'>
                <Link to={'/moderator/gerer-article/'+id} className='cursor-pointer transition-all hover:-translate-x-1 flex'>
                    <img className='h-6 w-6 sm:h-10 sm:w-10 lg:h-8 lg:w-8' src="/panel/images/mods/Marker.svg" alt="Marker" />
                </Link>
                <div className='cursor-pointer transition-all hover:-translate-x-1 flex' onClick={() => deleteArticle(id)}>
                    <img className='h-6 w-6 sm:h-10 sm:w-10 lg:h-8 lg:w-8' src="/panel/images/mods/Trash.svg" alt="Trash" />
                </div>
            </div>
        </div>
    )
}

const GererArticle = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await API.get("/elasticsearch/get_articles_mod/");
                const data = response.data;
                setArticles(data);
                toast.success('Articles loaded!', {
                    position: "top-center",
                    autoClose: 5000,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                })
            } catch (error) {
                toast.error('Something went wrong, try again!', {
                    position: "top-center",
                    autoClose: 5000,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                })
            } finally {
                setIsLoading(false);
            }
        };
    
        fetchData();
    }, []); 

    return (
        <LayoutMod isLoading={isLoading}>
            <div className='flex items-center justify-center mt-2 gap-4'>
                <div className='w-full gap-4 grid grid-cols-1'>
                    {articles.map(({ id, title, approved }, index) => (
                        <ArticleItem
                            articles={articles}
                            setArticles={setArticles}
                            id={id}
                            title={title}
                            approved={approved}
                            index={index}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </LayoutMod>
    )
}

export default GererArticle