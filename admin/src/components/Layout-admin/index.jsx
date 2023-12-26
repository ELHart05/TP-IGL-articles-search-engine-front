import Navbar from '../navbar_admin/Navbar';
import Loading from '../../components/Loading'
import { useState, useEffect } from 'react';
import './style.css';

const Layout = ({ isLoading, children }) => {
    const [accessToken, setAccessToken] = useState(false);

    useEffect(() => {
        //add getting token logic
    }, [])

    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <main className='bg-[#f9f9f9] flex items-stretch flex-1'>
                {isLoading ? <Loading /> : children}
            </main>
        </div>
    )
}

export default Layout