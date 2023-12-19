import { Link } from 'react-router-dom';
import Phone from '/images/Footer/phone.svg'
import Mail from '/images/Footer/mail.svg'
import Facebook from '/images/Footer/facebook.svg'
import Twitter from '/images/Footer/twitter.svg'
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

const socialMedia = [
    {
        icon: Phone,
        link: '#',
        name: 'Phone'
    },
    {
        icon: Mail,
        link: '#',
        name: 'Mail'
    },
    {
        icon: Facebook,
        link: '#',
        name: 'Facebook'
    },
    {
        icon: Twitter,
        link: '#',
        name: 'Twitter'
    }
]

const footerSubList = [
    {
        title: 'Terms of Use',
        link: '#'
    },
    {
        title: 'Privacy policy',
        link: '#'
    }
]

const Footer = ({ accessToken }) => {
    return (
        <footer className='z-0 bg-second px-9 py-16 2sm:py-24 text-white flex flex-col gap-8 text-md md:text-lg'>
            <div className='flex flex-col gap-4 sm:gap-0 sm:flex-row items-center justify-between'>
                <div className='text-xl font-bold relative z-50'>
                    <Link to="/" className='logo'>
                        PapersHub
                    </Link>
                </div>
                <div>
                    <ul className='flex items-center gap-4 flex-wrap justify-center'>
                        {
                            ((accessToken) ? loggedInNavItems : guesstNavItems ).map(({ link, name }, index) => (
                                <li key={index}>
                                    <Link className='cursor-pointer capitalize transition-all text-white hover:text-main' to={link}>{name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <hr />
            <div className='flex w-full flex-col sm:flex-row items-center justify-between flex-wrap gap-8'>
                <ul className='flex items-center gap-4 justify-center'>
                    {
                        socialMedia.map(({ link, icon, name }, index) => (
                            <li key={index}>
                                <Link className='flex cursor-pointer transition-all hover:translate-y-1' to={link}>
                                    <img src={icon} alt={name} />
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className='flex'>
                    <ul className='flex gap-4 flex-wrap justify-center'>
                        {
                            footerSubList.map(({ title, link }, index) => (
                                <li key={index}>
                                    <Link className='flex cursor-pointer transition-all hover:translate-y-1' to={link}>{title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='text-center'>&copy; 2023 igl. All Rights Reserved.</div>
            </div>
        </footer>
    )
}

export default Footer