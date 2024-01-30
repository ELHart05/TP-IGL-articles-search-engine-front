import { Link } from 'react-router-dom'
// import { useState } from 'react'
import LayoutAdmin from '../../../components/admin/LayoutAdmin'
import './style.css'

const ModItem = ({ index, name, id }) => {

    const deleteMod = (id) => {
        //TODO: delete mod
        console.log(id)
    }

    return (
        <div className='border-2 border-black rounded-xl px-4 py-3 gap-x-4 gap-y-2 flex items-center justify-between flex-wrap-reverse'>
            <div className='flex items-center gap-2'>
                <div className='cursor-pointer'>
                    <img src="/panel/images/ellipse/ellipse.svg" alt="Ellipse" />
                </div>
                <span className='text-xl'>{index}</span>
            </div>
            <div className='text-lg sm:text-xl lg:text-2xl'>
                <span>{name}</span>
            </div>
            <div className='flex gap-2'>
                <Link to={'/admin/gerer-moderator/'+id} className='cursor-pointer transition-all hover:-translate-x-1 flex'>
                    <img className='h-6 w-6 sm:h-10 sm:w-10 lg:h-8 lg:w-8' src="/panel/images/mods/Marker.svg" alt="Marker" />
                </Link>
                <div className='cursor-pointer transition-all hover:-translate-x-1 flex' onClick={() => deleteMod(id)}>
                    <img className='h-6 w-6 sm:h-10 sm:w-10 lg:h-8 lg:w-8' src="/panel/images/mods/Trash.svg" alt="Trash" />
                </div>
            </div>
        </div>
    )
}

export const modsList = [
    {
        id: 1694,
        firstName: 'Okba',
        lastName: 'ALLAOUA1'
    },
    {
        id: 1695,
        firstName: 'Okba',
        lastName: 'ALLAOUA2'
    },
    {
        id: 1696,
        firstName: 'Okba',
        lastName: 'ALLAOUA3'
    },
    {
        id: 1697,
        firstName: 'Okba',
        lastName: 'ALLAOUA4'
    },
    {
        id: 1698,
        firstName: 'Okba',
        lastName: 'ALLAOUA5'
    },
    {
        id: 1699,
        firstName: 'Okba',
        lastName: 'ALLAOUA6'
    },
    {
        id: 1700,
        firstName: 'Okba',
        lastName: 'ALLAOUA7'
    },
    {
        id: 1701,
        firstName: 'Okba',
        lastName: 'ALLAOUA8'
    },
    {
        id: 1702,
        firstName: 'Okba',
        lastName: 'ALLAOUA9'
    },
    {
        id: 1703,
        firstName: 'Okba',
        lastName: 'ALLAOUA10'
    },
]

const GererModerator = () => {

    // const [isLoading, setIsLoading] = useState(true);
    // setInterval(() => {
    //     setIsLoading(false)
    // }, 5000)
    //this is just an example of loading

    return (
        <LayoutAdmin isLoading={false ?? isLoading}>
            <div className='flex items-center justify-center mt-2 gap-4'>
                <div className='cursor-pointer h-10 w-10'>
                    <img src="/panel/images/pagination/Arrow.svg" alt="Arrow" />
                </div>
                <div className='w-full gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {modsList.map(({ id, firstName, lastName }, index) => (
                        <ModItem
                            id={id}
                            name={firstName+' '+lastName}
                            index={index}
                            key={index}
                        />
                    ))}
                </div>
                <div className='cursor-pointer h-10 w-10 rotate-180'>
                    <img src="/panel/images/pagination/Arrow.svg" alt="Arrow" />
                </div>
            </div>
        </LayoutAdmin>
    )
}

export default GererModerator