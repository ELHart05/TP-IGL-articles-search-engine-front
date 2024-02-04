import Layout from "../../components/Layout"
import AuthInput from "../../components/auth/AuthInput"
import WelcomeUser from '../../components/WelcomeUser'
import { useForm } from "react-hook-form";
import isValidUser from "../../utils/isValidUser";
import { toast } from 'react-toastify';
import API from "../../utils/api-client";
import { useState } from "react";
import Spinner from "react-spinner-material";
import Cookies from "js-cookie";

const Profile = () => {

    const { user } = isValidUser();
    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            username: user?.username,
            email: user?.email,
            password: '',
            confirmPassword: ''
        }
    })

    const usernameRegister = register('username', {
        required: {
            value: true,
            message: 'Username is required to proceed'
        },
        minLength: {
            value: 3,
            message: 'Username must have at least 3 characters'
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
        validate: (value) => {
            return value === watch('password') || 'Passwords do not match';
        }
    })

    const passwordCofirmRegister = register('confirmPassword', {
        validate: (value) => {
            return value === watch('password') || 'Passwords do not match';
        }
    })

    const onSubmit = async (data) => {
        try {
            setIsLoading(true);

            const { confirmPassword, ...userData} = data;

            await API.put(`paperhub/user/update-user/${user.id}/`, {
                ...userData,
            })

            Cookies.set('PHuser', JSON.stringify({
                ...JSON.parse(Cookies.get('PHuser')),
                username: userData.username,
                email: userData.email
            }))

            toast.success('Account updated successfully', {
                position: "top-center",
                autoClose: 5000,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            })
        } catch (error) {
            toast.error(error?.response?.data?.detail ?? 'Error', {
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
        <Layout isLoading={false}>
            <div className='flex flex-col gap-6 p-5 md:p-9 w-full'>
                <h1 className='text-lg sm:text-xl font-bold w-fit'><WelcomeUser /> to Your Profile</h1>
                <div className="flex w-full items-center justify-center mt-20 py-20 bg-Pgreen rounded-xl text-white p-4">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col relative items-center gap-8 w-full md:w-[80%]">
                        <div className="bg-black text-white font-bold p-4 aspect-square flex items-center justify-center rounded-full text-4xl absolute -top-[120px] z-30">
                            {user?.username.slice(0,2).toUpperCase()}
                        </div>
                        <div className="bg-white flex flex-col gap-8 w-full py-20 px-8 rounded-2xl">
                            <AuthInput register={usernameRegister} attribute='username' errors={errors} />
                            <AuthInput register={emailRegister} attribute='email' errors={errors} />
                            <AuthInput register={passwordRegister} attribute='password' errors={errors} />
                            <AuthInput register={passwordCofirmRegister} attribute='confirmPassword' errors={errors} />
                        </div>
                        <div className="w-full flex items-center justify-end">
                            <button className="text-black bg-white transition-all hover:bg-black hover:text-white font-bold px-4 w-36 flex items-center justify-center py-3 rounded-xl text-xl" disabled={isLoading}>{isLoading ? <Spinner style={{height: "28px", width: "28px"}} color='white' /> : 'Save'}</button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Profile