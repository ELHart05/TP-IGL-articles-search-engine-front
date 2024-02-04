import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import AuthInput from '../../../components/auth/AuthInput'
import API from '../../../utils/api-client'
import Cookies from 'js-cookie'
import Spinner from 'react-spinner-material'
import { toast } from 'react-toastify';
import './style.css'

const SignUp = () => {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            username: '',
            email: '',
            password: ''
        }
    })

    const usernameRegister = register('username', {
        required: {
            value: true,
            message: 'Name is required to proceed'
        },
        minLength: {
            value: 6,
            message: 'Name must have at least 6 characters'
        }
    })
    
    const emailRegister = register('email', {
        required: {
            value: true,
            message: 'Email is required to proceed'
        },
        pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'Please respect email format'
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
            setIsLoading(true)
            const res = await API.post('paperhub/user/signup/', {
                ...data
            })

            const { access_token, refresh_token, user } = res.data;

            const userData = { ...user, is_superuser: false, is_staff: false }

            Cookies.set('PHaccessToken', access_token);
            Cookies.set('PHrefreshToken', refresh_token);
            Cookies.set('PHuser', JSON.stringify(userData));

            navigate('/profile');

            toast.success('Welcome back', {
                position: "top-center",
                autoClose: 5000,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            })

        } catch (error) {
            toast.error('Something went wrong, try again!', {
                position: "top-center",
                autoClose: 5000,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            })
        } finally {
            setIsLoading(false)
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
                        <AuthInput register={usernameRegister} attribute='name' errors={errors} />
                        <AuthInput register={emailRegister} attribute='email' errors={errors} />
                        <AuthInput register={passwordRegister} attribute='password' errors={errors} />
                    </div>
                    <button className='mt-12 shadow-lg bg-Pgreen hover:bg-[#004D50] transition-all text-white rounded-xl w-full px-4 py-4 font-bold text-lg max-w-full flex items-center justify-center' disabled={isLoading}>{isLoading ? <Spinner style={{height: "28px", width: "28px"}} color='white' /> : 'SignUp'}</button>
                    <div className='mt-4'>
                        <p className='font-bold text-lg text-center'>Already have an account? <Link to='/auth/sign-in' className='text-Pred cursor-pointer hover:underline'>SignIn!</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp