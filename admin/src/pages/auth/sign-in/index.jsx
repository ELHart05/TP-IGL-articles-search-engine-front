import { useForm } from 'react-hook-form'
import AuthInput from '../../../components/auth/sign-in/AuthInput'
import './style.css'

const SignIn = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: ''
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

    const onSubmit = (data) => {
        console.log(data)
        //todo: add auth logic
    }

    return (
        <div className='h-screen flex gap-4 px-8 md:pl-0 md:pr-8 flex-row'>
            <div className='hidden md:flex md:w-1/2 h-full'>
                <img src="/panel/images/auth/sign-in/Papers.svg" alt="Papers" className="h-full w-full" />
            </div>
            <div className='w-full md:w-1/2 flex items-center justify-center flex-col gap-6'>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4 items-center max-w-[650px]">
                    <h1 className='text-3xl font-bold mb-10 text-center'>Welcome to <span className='text-Pred'>PapersHub</span> Admin</h1>
                    <div className='flex flex-col gap-10 w-full'>
                        <AuthInput register={emailRegister} attribute='email' errors={errors} />
                        <AuthInput register={passwordRegister} attribute='password' errors={errors} />
                    </div>
                    <button className='mt-12 shadow-lg bg-Pgreen hover:bg-[#004D50] transition-all text-white rounded-xl w-full px-4 py-4 font-bold text-lg max-w-full'>SignIn</button>
                    <div className='mt-4'>
                        <p className='font-bold text-lg text-center'>Foget password? <span className='text-Pred cursor-pointer hover:underline'>Send link now!</span></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn