import { Link } from 'react-router-dom'
import Favorite from '/images/Home/ArticlesList/favorite-on.svg'
import NotFavorite from '/images/Home/ArticlesList/favorite-off.svg'
import isValidUser from '../../../utils/isValidUser'
import { useState } from 'react'
import API from '../../../utils/api-client'
import { toast } from 'react-toastify';
import Spinner from 'react-spinner-material'

const Article = ({ resume, title, id, index, isFavorite, filterFavoriteArticles }) => {

    const { user } = isValidUser();
    const [isLoading, setIsLoading] = useState(false);
    const [favorite, setIsFavorite] = useState(isFavorite ?? false);

    const toggleFavorite = async () => {
        try {
            setIsLoading(true)

            const res = await API.post(`paperhub/user/favorite/${user.id}/${id}/`)

            setIsFavorite((prev) => !prev);

            if ([200, 201].includes(res.status)) {
                filterFavoriteArticles && filterFavoriteArticles(id);
                if (res.data.type == 'remove') {
                    toast.success('Removed from favorite successfully!', {
                        position: "top-center",
                        autoClose: 5000,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "light",
                    })
                } else {
                    toast.success('Added to favorite successfully!', {
                        position: "top-center",
                        autoClose: 5000,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "light",
                    })
                }
            } else {
                toast.error('Error while toggeling the article favorite!', {
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
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="w-full md:p-2 flex flex-col gap-4 transition-all hover:rotate-1 cursor-pointer">
            <Link to={'/article-details/'+id} className='bg-white flex flex-col rounded-lg px-8 py-6 hover:rotate-1 transition-all'>
                <div className='flex items-center justify-center flex-col'>
                    <h5 className='text-md sm:text-lg font-bold text-center'>{"Resume"+(index+1)}</h5>
                    <hr className='bg-green mt-2 h-1 text-center w-1/2' />
                </div>
                <div className='mt-5'>
                    <p>{resume.slice(0, 250)}...</p>
                </div>
            </Link>
            <div className='flex items-center justify-between px-4'>
                <div className='text-md sm:text-lg text-green font-bold w-fit'>{title}</div>
                {
                    !user?.is_superuser && !user?.is_staff
                    &&
                    <div className='cursor-pointer' onClick={toggleFavorite}>
                        {
                            isLoading
                            ?
                            <Spinner style={{height: '24px', width: '24px'}} />
                            :
                            <img src={(favorite) ? Favorite : NotFavorite} alt="Favorite" />
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default Article