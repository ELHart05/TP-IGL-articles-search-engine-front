import { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Loading from '../../components/Loading'
import './style.css';
import isValidUser from '../../utils/isValidUser';

const Layout = ({ isLoading, children }) => {
    const { accessToken, user } = isValidUser();

    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar accessToken={accessToken} user={user} />
            <main className='bg-[#f9f9f9] flex items-stretch flex-1'>
                {isLoading ? <Loading /> : children}
            </main>
            <Footer accessToken={accessToken} />
        </div>
    )
}

export default Layout