import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify';
import API from '../../../utils/api-client';
import './style.css'

const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await API.post('auth/logout/', {
                refresh_token: Cookies.get('PHrefreshToken')
            });

            Cookies.remove('PHuser');
            Cookies.remove('PHrefreshToken');
            Cookies.remove('PHaccessToken');

            toast.success('Good bye', {
                position: "top-center",
                autoClose: 5000,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            })

            navigate('/auth/sign-in');

        } catch (error) {
            toast.error('Error', {
                position: "top-center",
                autoClose: 5000,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            })
        }
    }

    return (
        <div className='border-b-2 border-b-Pgreen py-3 flex items-center justify-between'>
            <h3 className='font-second text-lg font-bold'>PapersHub</h3>
            <button onClick={handleLogout} className='shadow-lg bg-Pgreen hover:bg-[#004D50] transition-all text-white rounded-xl px-4 pb-2 pt-1 font-bold text-md'>Logout</button>
        </div>
    )
}

export default Navbar