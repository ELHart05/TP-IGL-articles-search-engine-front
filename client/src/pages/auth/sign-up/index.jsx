import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import AuthInput from '../../../components/auth/AuthInput'
import API from '../../../utils/api-client'
import './style.css'
import Cookies from 'js-cookie'
import { useToast } from '@chakra-ui/toast'

const SignUp = () => {

    const navigate = useNavigate();
    const toast = useToast();

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })

    const nameRegister = register('name', {
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
            value: 4,
            message: 'Passwords are more than 4 characters'
        }
    })

    const onSubmit = async (data) => {
        console.log(data)
        //todo: add auth logic
        try {
            const res = await API.post('token', {
                ...data
            })

            const { access, refresh } = res.data;

            Cookies.set('PHaccessToken', access);
            Cookies.set('PHrefreshToken', refresh);

            navigate('/profile');

            toast({
                title: 'Login success',
                description: 'Welcome back',
                duration: 5000,
                isClosable: true,
                colorScheme: 'success',
                position: 'bottom'
            })

        } catch (error) {
            toast({
                title: 'Error',
                description: 'Something went error',
                duration: 5000,
                isClosable: true,
                colorScheme: 'error',
                position: 'bottom'
            })
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
                        <AuthInput register={nameRegister} attribute='name' errors={errors} />
                        <AuthInput register={emailRegister} attribute='email' errors={errors} />
                        <AuthInput register={passwordRegister} attribute='password' errors={errors} />
                    </div>
                    <button className='mt-12 shadow-lg bg-Pgreen hover:bg-[#004D50] transition-all text-white rounded-xl w-full px-4 py-4 font-bold text-lg max-w-full'>SignUp</button>
                    <div className='mt-4'>
                        <p className='font-bold text-lg text-center'>Already have an account? <Link to='/auth/sign-in' className='text-Pred cursor-pointer hover:underline'>SignIn!</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp