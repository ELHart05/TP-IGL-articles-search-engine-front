import { useState,useEffect } from 'react'
import { toast } from 'react-toastify';
import LayoutAdmin from '../../../components/admin/LayoutAdmin'
import API from '../../../utils/api-client'
import { Link } from 'react-router-dom';
import './style.css'


const ModItem = ({ moderators,setModerators,index, name, id }) => {

    const deleteMod =  async (id) => {
        try {
            const response = await API.delete(`/paperhub/moderator/delete-moderator/${id}/`);
            // If the deletion was successful, update the articles state
            if (response.status === 200) {
                const updatedModerator = moderators.filter(mod => mod.id !== id);
                setModerators(updatedModerator);
                toast.success('Mod deleted successfully!', {
                    position: "top-center",
                    autoClose: 5000,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                })
            }
        } catch (error) {
            console.error('Error deleting article:', error.message);
            toast.error('Something went wrong, try again!', {
                position: "top-center",
                autoClose: 5000,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            })
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

const GererModerator = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [moderators, setModerators] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await API.get("/paperhub/moderator/get_moderators/");
                const data = response.data;  // Use response.data directly
                setModerators(data);
                toast.success('Mods loaded successfully', {
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
                setIsLoading(false)
            }
        };
    
        fetchData();
    }, []);
    

    return (
        <LayoutAdmin isLoading={isLoading}>
            <div className='flex items-center justify-center mt-2 gap-4'>
                <div className='w-full gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        !moderators.length
                        ?
                        <h3 className='w-full text-center text-4xl font-bold pt-20'>No Mods for the moment</h3>
                        :
                        moderators.map(({ id, user }, index) => (
                            <ModItem
                                moderators={moderators}
                                setModerators={setModerators}
                                id={id}
                                name={user.username}
                                index={index}
                                key={index}
                            />
                        ))
                    }
                </div>
            </div>
        </LayoutAdmin>
    )
}

export default GererModerator