import { Link, Navigate } from 'react-router-dom';
import isValidUser from '../../utils/isValidUser';
import './style.css';

const Unauthorized = () => {

    const { user, isValidAuth } = isValidUser();
    if (!isValidAuth) {
        return <Navigate to={'/auth/sign-in'} />
    }

    return (
        <div className='px-4 min-h-screen flex items-center justify-center'>
            <div className='text-center font-bold'>
                <span className='underline font-second text-Pred text-3xl'>PapersHub</span>
                <p className='text-2xl'>Unauthorized</p>
                <Link className='hover:underline' to={(user?.is_superuser) ? '/admin/profile' : '/moderator/profile'}>Go back</Link>
            </div>
        </div>
    )
}

export default Unauthorized