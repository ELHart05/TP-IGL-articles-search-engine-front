import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import AuthInput from '../../../components/auth/AuthInput'
import Spinner from 'react-spinner-material'
import API from '../../../utils/api-client'
import { toast } from 'react-toastify';
import Cookies from 'js-cookie'
import isValidUser from '../../../utils/isValidUser'
import './style.css'

const SignIn = () => {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const { isValidAuth } = isValidUser();
    useEffect(() => {
        if (isValidAuth) {
            navigate('/profile')
        }
    }, [])

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            username: '',
            password: ''
        }
    })

    const usernameRegister = register('username', {
        required: {
            value: true,
            message: 'Username is required to proceed'
        },
        minLength: {
            value: 3,
            message: 'Username must be at least 3 charachters'
        }
    })

    const passwordRegister = register('password', {
        required: {
            value: true,
            message: 'Password is required to proceed'
        },
        minLength: {
            value: 3,
            message: 'Passwords are more than 3 characters'
        }
    })

    const onSubmit = async (data) => {
        try {
            setIsLoading(true);
            const res = await API.post('auth/token/', {
                ...data,
            })

            const { access, refresh, ...userData } = res.data;

            Cookies.set('PHuser', JSON.stringify(userData));
            Cookies.set('PHrefreshToken', refresh);
            Cookies.set('PHaccessToken', access);

            toast.success('Welcome back', {
                position: "top-center",
                autoClose: 5000,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            })
            
            navigate('/profile');

        } catch (error) {
            toast.error(error.response.data.detail ?? 'Error', {
                position: "top-center",
                autoClose: 5000,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            })
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className='h-screen flex gap-4 px-8 md:pl-0 md:pr-8 flex-row'>
            <div className='hidden md:flex md:w-1/2 h-full'>
                <img src="/images/auth/Papers.svg" alt="Papers" className="h-full w-full" />
            </div>
            <div className='w-full md:w-1/2 flex items-center justify-center flex-col gap-6'>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4 items-center max-w-[650px]">
                    <h1 className='text-3xl font-bold mb-10 text-center'>Welcome to <span className='text-Pred'>PapersHub</span></h1>
                    <div className='flex flex-col gap-10 w-full'>
                        <AuthInput register={usernameRegister} attribute='username' errors={errors} />
                        <AuthInput register={passwordRegister} attribute='password' errors={errors} />
                    </div>
                    <button className='mt-12 shadow-lg bg-Pgreen hover:bg-[#004D50] transition-all text-white rounded-xl w-full px-4 py-4 font-bold text-lg max-w-full flex items-center justify-center' disabled={isLoading}>{isLoading ? <Spinner style={{height: "28px", width: "28px"}} color='white' /> : 'SignUp'}</button>
                    <div className='mt-4'>
                        <p className='font-bold text-lg text-center'>New to PaperHub? <Link to='/auth/sign-up' className='text-Pred cursor-pointer hover:underline'>SignUp!</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn