import { Link } from 'react-router-dom'
import Favorite from '/images/Home/ArticlesList/favorite-on.svg'
import NotFavorite from '/images/Home/ArticlesList/favorite-off.svg'

const Article = ({ head, paragraph, title, favorite, id, activeIndex }) => {
    return (
        <Link to={'article/'+id} style={{transform: `translateX(${-100*activeIndex}%)`}} className="w-full max-w-full min-w-full md:w-1/2 md:max-w-[50%] md:min-w-[50%] lg:w-1/3 lg:max-w-[33.333333%] lg:min-w-[33.333333%] md:p-2 flex flex-col gap-4 transition-all hover:rotate-1 cursor-pointer">
            <div className='bg-white flex flex-col rounded-lg px-8 py-6 hover:rotate-1 transition-all'>
                <div className='flex items-center justify-center flex-col'>
                    <h5 className='text-md sm:text-lg font-bold text-center'>{head}</h5>
                    <hr className='bg-green mt-2 h-1 text-center w-1/2' />
                </div>
                <div className='mt-5'>
                    <p>{paragraph}</p>
                </div>
            </div>
            <div className='flex items-center justify-between px-4'>
                <div className='text-md sm:text-lg text-green font-bold w-fit'>{title}</div>
                <div className='cursor-pointer'>
                    <img src={(favorite) ? Favorite : NotFavorite} alt="Favorite" />
                </div>
            </div>
        </Link>
    )
}

export default Article