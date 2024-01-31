import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import './style.css'

const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        Cookies.remove('PHaccessToken');
        Cookies.remove('PHuser');
        navigate('/auth/sign-in');
    }

    return (
        <div className='border-b-2 border-b-Pgreen py-3 flex items-center justify-between'>
            <h3 className='font-second text-lg font-bold'>PapersHub</h3>
            <button onClick={handleLogout} className='shadow-lg bg-Pgreen hover:bg-[#004D50] transition-all text-white rounded-xl px-4 pb-2 pt-1 font-bold text-md'>Logout</button>
        </div>
    )
}

export default Navbar