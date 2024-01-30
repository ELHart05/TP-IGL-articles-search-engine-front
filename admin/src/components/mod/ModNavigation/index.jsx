import { Link, useLocation } from 'react-router-dom'
import './style.css'

const ModNavigation = () => {
    
    const modPaths = [
        {
            title: 'Gerer Articles',
            path: '/moderator/gerer-article'
        },
        {
            title: 'Mes informations',
            path: '/moderator/profile'
        }
    ]

    const location = useLocation();

    return (
        <div className='flex items-center justify-center gap-x-8 gap-y-2 flex-wrap mb-7'>
            {
                modPaths.map(({ title, path }, index) => (
                    <Link to={path} className={`${(location.pathname == path) ? 'shadow-xl hover:shadow-none bg-Pgreen border-transparent text-white' : 'bg-white border-Pgreen text-black'} text-center shadow-lg bg-Pgreen transition-all rounded-xl px-4 pb-2 pt-1 font-bold text-md border-2`} key={index}>{title}</Link>
                ))
            }
        </div>
    )
}

export default ModNavigation