import Layout from "../../components/Layout"
import AuthInput from "../../components/auth/AuthInput"
import WelcomeUser from '../../components/WelcomeUser'
import { useForm } from "react-hook-form";
// import isValidUser from "../../utils/isValidUser";

const Profile = () => {

    // const { user } = isValidUser();

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            name: 'Amel' ?? user.name,
            email: 'lo_hamouda@esi.dz' ?? user.email,
            password: '' ?? user.password,
            confirmPassword: ''
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
        validate: (value) => {
            return value === watch('password') || 'Passwords do not match';
        }
    })

    const passwordCofirmRegister = register('confirmPassword', {
        validate: (value) => {
            return value === watch('password') || 'Passwords do not match';
        }
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    const handleUpload = (e) => {
        console.log(e)
    }

    return (
        <Layout isLoading={false}>
            <div className='flex flex-col gap-6 p-5 md:p-9 w-full'>
                <h1 className='text-lg sm:text-xl font-bold w-fit'><WelcomeUser /> to Your saved articles</h1>
                <div className="flex w-full items-center justify-center mt-32 pt-40 pb-20 bg-Pgreen rounded-xl text-white p-4">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col relative items-center gap-8 w-full md:w-[80%]">
                        <label htmlFor="uploader" className="absolute -top-72 z-30">
                            <img src="/images/girl.png" className="w-full" alt="" />
                        </label>
                        <input type="file" className="hidden" onChange={handleUpload} id="uploader" />
                        <h3 className="font-bold text-3xl">Amel Hamouda</h3>
                        <div className="bg-white flex flex-col gap-8 w-full py-20 px-8 rounded-2xl">
                            <AuthInput register={nameRegister} attribute='name' errors={errors} />
                            <AuthInput register={emailRegister} attribute='email' errors={errors} />
                            <AuthInput register={passwordRegister} attribute='password' errors={errors} />
                            <AuthInput register={passwordCofirmRegister} attribute='confirmPassword' errors={errors} />
                        </div>
                        <div className="w-full flex items-center justify-end">
                            <button className="text-black bg-white transition-all hover:bg-black hover:text-white font-bold px-4 py-3 rounded-xl text-xl">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Profile