import { Link } from 'react-router-dom'
import Favorite from '/images/Home/ArticlesList/favorite-on.svg'
import NotFavorite from '/images/Home/ArticlesList/favorite-off.svg'

const Article = ({ head, paragraph, title, favorite, id }) => {
    return (
        <div className="w-full md:p-2 flex flex-col gap-4 transition-all hover:rotate-1 cursor-pointer">
            <Link to={'/article/'+id} className='bg-white flex flex-col rounded-lg px-8 py-6 hover:rotate-1 transition-all'>
                <div className='flex items-center justify-center flex-col'>
                    <h5 className='text-md sm:text-lg font-bold text-center'>{head}</h5>
                    <hr className='bg-green mt-2 h-1 text-center w-1/2' />
                </div>
                <div className='mt-5'>
                    <p>{paragraph}</p>
                </div>
            </Link>
            <div className='flex items-center justify-between px-4'>
                <div className='text-md sm:text-lg text-green font-bold w-fit'>{title}</div>
                <div className='cursor-pointer'>
                    <img src={(favorite) ? Favorite : NotFavorite} alt="Favorite" />
                </div>
            </div>
        </div>
    )
}

export default Article