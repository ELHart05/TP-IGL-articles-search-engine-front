import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import User from '/images/Navbar/user.svg';
import Favorite from '/images/Navbar/favorite.svg';
import Menu from '/images/Navbar/menu.svg';
import './style.css';

const guesstNavItems = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'About us',
        link: '/about-us'
    },
    {
        name: 'Sign in',
        link: '/sign-in'
    },
    {
        name: 'Sign up',
        link: '/sign-up'
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
        name: 'About us',
        link: '/about-us'
    }
]

const Navbar = ({ accessToken }) => {

    const { pathname } = useLocation();
    const [activeLink, setActiveLink] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        switch (pathname) {
            case '/':
                setActiveLink(0);
                break;
            case '/about-us':
                setActiveLink(1);
                break;
            case '/sign-in':
                setActiveLink(2);
                break;
            case '/sign-up':
                setActiveLink(3);
                break;
            default:
                setActiveLink(-1);
                break;
        }
    }, [pathname])

    return (
        <header className='relative flex px-9 2sm:px-12 py-6 items-center justify-between border-b-2 border-green'>
            <div className='font-bold relative z-50'>
                <Link to="/" className='logo'>
                    PapersHub
                </Link>
            </div>
            <div className={`z-40 bg-white border-green border-r-2 2sm:border-0 max-w-[270px] min-h-screen 2sm:min-h-0 2sm:w-auto 2sm:min-w-0 w-[80%] 2sm:contents flex flex-col justify-center 2sm:flex-row fixed top-0 2sm:static transition-all ${(isOpen) ? '-left-96' : 'left-0'}`}>
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
                    <div className='2sm:mt-0 mt-6 flex gap-7 2sm:gap-4 items-center flex-col 2sm:flex-row'>
                        <Link to="/profile" className='transition-all hover:translate-y-1'>
                            <img src={User} alt="User" className='w-7 h-7' />
                        </Link>
                        <Link to="/favorite" className='transition-all hover:translate-y-1'>
                            <img src={Favorite} alt="Favorite" className='w-6 h-6' />
                        </Link>
                    </div>
                }
            </div>
            <div onClick={() => setIsOpen((prev) => !prev)} className='cursor-pointer h-8 w-8 transition-all hover:rotate-6 flex 2sm:hidden'>
                <img src={Menu} alt="Menu" />
            </div>
        </header>
    )
}

export default Navbar