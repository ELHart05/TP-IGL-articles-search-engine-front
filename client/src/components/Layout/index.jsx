import Navbar from '../Navbar';
import Footer from '../Footer';
import Loading from '../../components/Loading'
import { useEffect, useState } from 'react';
import './style.css';

const Layout = ({ isLoading, children }) => {
    const [accessToken, setAccessToken] = useState(false);

    useEffect(() => {
        //add getting token logic
    }, [])

    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar accessToken={accessToken} />
            <main className='bg-[#f9f9f9] flex items-stretch flex-1'>
                {isLoading ? <Loading /> : children}
            </main>
            <Footer accessToken={accessToken} />
        </div>
    )
}

export default Layout