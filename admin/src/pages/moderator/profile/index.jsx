import { useForm } from 'react-hook-form'
import LayoutMod from '../../../components/mod/LayoutMod'
import Input from '../../../components/common/Input'
import API from '../../../utils/api-client'
import isValidUser from '../../../utils/isValidUser'
import Spinner from 'react-spinner-material'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import './style.css'

const ProfileMod = () => {

    const { user } = isValidUser();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (user?.is_superuser) {
            navigate('/admin/profile');
        }
    }, [])

    const { handleSubmit, register, formState: { errors }, watch } = useForm({
        defaultValues: {
            modName: user?.username,
            email: user?.email,
            password: '',
            confirmPassword: ''
        }
    })

    const onSubmit = async (data) => {
        try {
            setIsLoading(true);

            const { confirmPassword, ...userData} = data;

            const response = await API.put(`paperhub/user/update-user/${user?.id}/`, {
                user: {
                    ...userData
                },
            });

            if (response.status === 200) {
                Cookies.set('PHuser', JSON.stringify({
                    ...JSON.parse(Cookies.get('PHuser')),
                    username: userData.modName,
                    email: userData.email
                }))
                toast.success('Profile updated successfully', {
                    position: "top-center",
                    autoClose: 5000,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                })
            } else {
                toast.error('Error while updating the Profile', {
                    position: "top-center",
                    autoClose: 5000,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                })
            }
        } catch (error) {
            toast.error('Error, try again!', {
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
        <LayoutMod isLoading={false}>
            <h1 className='text-3xl font-bold text-Pgreen'>Mes informations:</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-8 flex flex-col max-w-[550px] gap-5'>
                <Input
                    labelTitle={'Nom mod'}
                    placeholder={'Eg: Walid'}
                    attribute={'modName'}
                    register={textRegister('modName')}
                    errors={errors}
                />
                <Input
                    labelTitle={'Email mod'}
                    placeholder={'Eg: BOUBENIA'}
                    attribute={'email'}
                    register={textRegister('email')}
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
        </LayoutMod>
    )
}

export default ProfileMod