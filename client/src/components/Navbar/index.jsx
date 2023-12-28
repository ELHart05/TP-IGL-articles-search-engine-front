import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Favorite from '/images/Navbar/favorite.svg';
import Menu from '/images/Navbar/menu.svg';
import SignOut from '/images/Navbar/signout.svg';
import Profile from '/images/Navbar/profile.svg';
import './style.css';
import axios from 'axios';

const guesstNavItems = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Sign in',
        link: '/auth/sign-in'
    },
    {
        name: 'Sign up',
        link: '/auth/sign-up'
    }
]

const loggedInNavItems = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Search',
        link: '/search'
    },
    {
        name: 'Saved',
        link: '/saved'
    }
]

const Navbar = ({ accessToken }) => {

    const { pathname } = useLocation();
    const [activeLink, setActiveLink] = useState(0);
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [profileInfoOpen, setProfileInfoOpen] = useState(false);

    useEffect(() => {
        if (accessToken) {
            switch (pathname) {
                case '/':
                    setActiveLink(0);
                    break;
                case '/search':
                    setActiveLink(1);
                    break;
                case '/saved':
                    setActiveLink(2);
                    break;
                default:
                    setActiveLink(-1);
                    break;
            }
        } else {
            switch (pathname) {
                case '/':
                    setActiveLink(0);
                    break;
                case '/auth/sign-in':
                    setActiveLink(1);
                    break;
                case '/auth/sign-up':
                    setActiveLink(2);
                    break;
                default:
                    setActiveLink(-1);
                    break;
            }
        }
    }, [pathname])

    const signOut = async () => {
        try {
            await axios.post(
                'http://localhost:8000/auth/logout/',
                {
                    refresh_token: localStorage.getItem('refresh_token'),
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                },
                    withCredentials: true,
                }
            );
            // Clear local storage
            localStorage.clear();
            // Clear Authorization header
            axios.defaults.headers.common['Authorization'] = null;

            // Redirect to the login page
            window.location.href = '/auth/sign-in';

        } catch (error) {
            console.error('Logout not working', error);
        }
    }

    return (
        <header className='relative flex px-9 2sm:px-12 py-6 items-center justify-between border-b-2 border-green'>
            <div className='font-bold relative z-50'>
                <Link to="/" className='logo'>
                    PapersHub
                </Link>
            </div>
            <div className={`z-40 bg-white border-green border-r-2 2sm:border-0 max-w-[270px] min-h-screen 2sm:min-h-0 2sm:w-auto 2sm:min-w-0 w-[80%] 2sm:contents flex flex-col justify-center 2sm:flex-row fixed top-0 2sm:static transition-all ${(navbarOpen) ? '-left-96' : 'left-0'}`}>
                <nav>
                    <ul className='flex flex-col 2sm:flex-row gap-6 font-semibold items-center'>
                        {
                            accessToken
                            ?
                            <>
                                {
                                    loggedInNavItems.map(({ name, link }, index) => (
                                        <li key={index}>
                                            <Link className={`cursor-pointer capitalize transition-all ${(index == activeLink) ? 'text-main' : 'text-dark-gray hover:text-main'}`} to={link}>{name}</Link>
                                        </li>
                                    ))
                                }
                            </>
                            :
                            <>
                                {
                                    guesstNavItems.map(({ name, link }, index) => (
                                        <li key={index}>
                                            <Link className={`cursor-pointer capitalize transition-all ${(index == guesstNavItems.length-1) && 'text-black px-5 py-2 bg-main rounded-xl'} ${(index == activeLink) ? 'text-black' : 'text-dark-gray hover:text-black'}`} to={link}>{name}</Link>
                                        </li>
                                    ))
                                }
                            </>
                        }
                    </ul>
                </nav>
                {
                    !!accessToken &&
                    <div className='2sm:mt-0 mt-6 flex gap-6 2sm:gap-4 items-center flex-col 2sm:flex-row'>
                        <Link to="/favorite" className='transition-all hover:translate-y-1'>
                            <img src={Favorite} alt="Favorite" className='w-6 h-6' />
                        </Link>
                        <button onClick={() => {setProfileInfoOpen((prev) => !prev); navbarOpen && setNavbarOpen(false)}} className='transition-all font-bold rounded-full p-1 bg-black text-white'>
                            OA
                        </button>
                    </div>
                }
                {
                    !!accessToken &&
                    <div className={`flex flex-col font-bold py-4 px-4 sm:px-8 gap-6 w-full 2sm:w-fit border-r-0 2sm:border-r-2 items-center justify-center 2sm:items-start 2sm:rounded-b-lg absolute z-40 transition-all bg-white bottom-[120px] 2sm:bottom-[unset] 2sm:top-[80px] border-2 border-green ${(profileInfoOpen) ? 'left-0 2sm:left-[unset] 2sm:right-11 ' : '-left-96 2sm:left-[unset] 2sm:-right-[1000px]'}`}>
                        <Link to={'/profile'} className='flex flex-wrap justify-center gap-2 items-center cursor-pointer transition-all hover:translate-y-1 text-dark-gray hover:text-black'>
                            <img src={Profile} alt="User" className='w-7 h-7' />
                            Profile
                        </Link>
                        <button onClick={signOut} className='flex flex-wrap justify-center gap-2 items-center cursor-pointer transition-all hover:translate-y-1 text-dark-gray hover:text-black'>
                            <img src={SignOut} alt="User" className='w-7 h-7' />
                            Sign Out
                        </button>
                    </div>
                }
            </div>
            <div onClick={() => setNavbarOpen((prev) => !prev)} className='cursor-pointer h-8 w-8 transition-all hover:rotate-6 flex 2sm:hidden'>
                <img src={Menu} alt="Menu" />
            </div>
        </header>
    )
}

export default Navbar