import { Link, useLocation } from 'react-router-dom'
import './style.css'

const AdminNavigation = () => {
    
    const adminPaths = [
        {
            title: 'Gérer les modérateur',
            path: '/admin/gerer-moderator'
        },
        {
            title: 'Ajouter un modérateur',
            path: '/admin/add-moderator'
        },
        {
            title: 'Mes informations',
            path: '/admin/profile'
        }
    ]

    const location = useLocation();

    return (
        <div className='flex items-center justify-center gap-x-8 gap-y-2 flex-wrap mb-7'>
            {
                adminPaths.map(({ title, path }, index) => (
                    <Link to={path} className={`${(location.pathname == path) ? 'shadow-xl hover:shadow-none bg-Pgreen border-transparent text-white' : 'bg-white border-Pgreen text-black'} text-center shadow-lg bg-Pgreen transition-all rounded-xl px-4 pb-2 pt-1 font-bold text-md border-2`} key={index}>{title}</Link>
                ))
            }
        </div>
    )
}

export default AdminNavigation