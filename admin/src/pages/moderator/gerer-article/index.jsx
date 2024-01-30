import { Link } from 'react-router-dom'
// import { useState } from 'react'
import LayoutMod from '../../../components/mod/LayoutMod'
import './style.css'

const ArticleItem = ({ index, id, title, profs, approved }) => {

    const deleteArticle = (id) => {
        //TODO: add delete article logic
        console.log(id)
    }

    return (
        <div className='w-full border-2 border-black rounded-xl px-4 py-3 gap-x-4 gap-y-2 flex items-center justify-between flex-wrap-reverse'>
            <div className='flex items-center gap-2'>
                <div className='cursor-pointer'>
                    <img src={(approved) ? '/panel/images/ellipse/ellipse.svg' : '/panel/images/ellipse/ellipse-empty.svg'} alt="Ellipse" />
                </div>
                <span className='text-xl'>{index}</span>
            </div>
            <div className='text-lg sm:text-xl lg:text-2xl'>
                <span>{title}</span>
            </div>
            <div className='text-lg sm:text-xl lg:text-2xl'>
                <span>{profs.map((prof, index) => (
                    <span key={index}>{'Pr.'+prof+' '}</span>
                ))}</span>
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

export const articlesList = [
    {
        id: 1694,
        title: 'Machine learning algorithms',
        profs: ['Arab', 'Allaoua', 'Batata'],
        approved: false
    },
    {
        id: 1695,
        title: 'Machine learning algorithms',
        profs: ['Arab', 'Allaoua', 'Batata'],
        approved: true
    },
    {
        id: 1696,
        title: 'Machine learning algorithms',
        profs: ['Arab', 'Allaoua', 'Batata'],
        approved: false
    },
    {
        id: 1697,
        title: 'Machine learning algorithms',
        profs: ['Arab', 'Allaoua', 'Batata'],
        approved: false

    },
    {
        id: 1698,
        title: 'Machine learning algorithms',
        profs: ['Arab', 'Allaoua', 'Batata'],
        approved: false
    },
    {
        id: 1699,
        title: 'Machine learning algorithms',
        profs: ['Arab', 'Allaoua', 'Batata'],
        approved: false

    },
    {
        id: 1700,
        title: 'Machine learning algorithms',
        profs: ['Arab', 'Allaoua', 'Batata'],
        approved: true
    }
]

const GererArticle = () => {

    // const [isLoading, setIsLoading] = useState(true);
    // setInterval(() => {
    //     setIsLoading(false)
    // }, 5000)
    //this is just an example of loading

    return (
        <LayoutMod isLoading={false ?? isLoading}>
            <div className='flex items-center justify-center mt-2 gap-4'>
                <div className='cursor-pointer h-10 w-10'>
                    <img src="/panel/images/pagination/Arrow.svg" alt="Arrow" />
                </div>
                <div className='w-full gap-4 grid grid-cols-1'>
                    {articlesList.map(({ id, title, profs, approved }, index) => (
                        <ArticleItem
                            id={id}
                            title={title}
                            profs={profs}
                            approved={approved}
                            index={index}
                            key={index}
                        />
                    ))}
                </div>
                <div className='cursor-pointer h-10 w-10 rotate-180'>
                    <img src="/panel/images/pagination/Arrow.svg" alt="Arrow" />
                </div>
            </div>
        </LayoutMod>
    )
}

export default GererArticle