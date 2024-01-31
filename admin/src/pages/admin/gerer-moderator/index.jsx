import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
import LayoutAdmin from '../../../components/admin/LayoutAdmin'
import './style.css'
import API from '../../../utils/api-client'

const ModItem = ({ moderators,setModerators,index, name, id }) => {

    const deleteMod =  async (id) => {
        try {
            const response = await API.delete(`/paperhub/moderator/delete-moderator/${id}/`);
            console.log(response.data.message);
      
            // If the deletion was successful, update the articles state
            if (response.status === 200) {
              const updatedModerator = moderators.filter(mod => mod.id !== id);
              setModerators(updatedModerator);
            }
          } catch (error) {
            console.error('Error deleting article:', error.message);
          }
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

                <div className='cursor-pointer transition-all hover:-translate-x-1 flex' onClick={() => deleteMod(id)}>
                    <img className='h-6 w-6 sm:h-10 sm:w-10 lg:h-8 lg:w-8' src="/panel/images/mods/Trash.svg" alt="Trash" />
                </div>
            </div>
        </div>
    )
}


export let modsList = [
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
    const [isLoading, setIsLoading] = useState(true);
    const [moderators, setModerators] = useState([]);
    // setInterval(() => {
    //     setIsLoading(false)
    // }, 5000)
    //this is just an example of loading
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await API.get("/paperhub/moderator/get_moderators/");
                const data = response.data;  // Use response.data directly
                setModerators(data);
                modsList = data;
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            }
        };
    
        fetchData();
    }, []);
    

    return (
        <LayoutAdmin isLoading={false ?? isLoading}>
            <div className='flex items-center justify-center mt-2 gap-4'>
                <div className='cursor-pointer h-10 w-10'>
                    <img src="/panel/images/pagination/Arrow.svg" alt="Arrow" />
                </div>
                <div className='w-full gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {moderators.map(({ id, user }, index) => (
                        <ModItem
                            moderators={moderators}
                            setModerators={setModerators}
                            id={id}
                            name={user.username}
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