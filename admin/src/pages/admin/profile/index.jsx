import { useForm } from 'react-hook-form'
import LayoutAdmin from '../../../components/admin/LayoutAdmin'
import Input from '../../../components/common/Input'
import isValidUser from '../../../utils/isValidUser'
import { useState } from 'react'
import API from '../../../utils/api-client'
import Cookies from 'js-cookie'
import Spinner from "react-spinner-material";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import './style.css'

const ProfileAdmin = () => {

    const { user } = isValidUser();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const { handleSubmit, register, formState: { errors }, watch } = useForm({
        defaultValues: {
            username: user?.username,
            email: user?.email,
            password: '',
            confirmPassword: ''
        }
    })

    const onSubmit = async (data) => {
        try {
            setIsLoading(true);

            const { confirmPassword, ...userData} = data;

            await API.put(`paperhub/user/update-user/${user?.id}/`, {
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

            navigate('/admin/gerer-moderator');
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

    const textRegister = (attribute) => register(attribute, {
        required: {
            value: true,
            message: 'Field is required to proceed'
        },
        minLength: {
            value: 3,
            message: 'Field must contain at least three characters'
        },
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

    return (
        <LayoutAdmin isLoading={false}>
            <h1 className='text-3xl font-bold text-Pgreen'>Mes informations:</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-8 flex flex-col max-w-[550px] gap-5'>
                <Input
                    labelTitle={'Username admin'}
                    placeholder={'Eg: Okba'}
                    attribute={'username'}
                    register={textRegister('username')}
                    errors={errors}
                />
                <Input
                    labelTitle={'Email admin'}
                    placeholder={'Eg: lo_allaoua@esi.dz'}
                    attribute={'email'}
                    register={emailRegister}
                    errors={errors}
                />
                <Input
                    labelTitle={'Mot de passe'}
                    placeholder={'Enter your password'}
                    attribute={'password'}
                    register={passwordRegister}
                    errors={errors}
                />
                <Input
                    labelTitle={'Confirmer mot de passe'}
                    placeholder={'Confirm your password'}
                    attribute={'confirmPassword'}
                    register={passwordCofirmRegister}
                    errors={errors}
                />
                <button className='flex items-center justify-center mt-3 shadow-lg bg-Pgreen hover:bg-[#004D50] transition-all text-white rounded-2xl w-full px-4 pt-2 pb-3 font-bold text-lg max-w-full' disabled={isLoading}>{isLoading ? <Spinner style={{height: "28px", width: "28px"}} color='white' /> : 'Appliquer changment'}</button>
            </form>
        </LayoutAdmin>
    )
}

export default ProfileAdmin