import { Navigate } from 'react-router-dom';
import isValidUser from '../../utils/isValidUser';
import './style.css';

const Error = () => {

    const { isValidAuth } = isValidUser();
    if (!isValidAuth) {
        return <Navigate to={'/auth/sign-in'} />
    }

    return (
        <div className='px-4 min-h-screen flex items-center justify-center'>
            <div className='text-center font-bold'>
                <span className='underline font-second text-Pred text-3xl'>PapersHub</span>
                <p className='text-2xl '>Page not found!</p>
            </div>
        </div>
    )
}

export default Error