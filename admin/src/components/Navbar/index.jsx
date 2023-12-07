import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
    return (
        <div className='flex gap-2 bg-green-500'>
            Navbar:
            <Link className='text-red-500' to={'/'}>Home</Link>
            <Link className='text-red-500' to={'/about'}>About</Link>
        </div>
    )
}

export default Navbar