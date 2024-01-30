import { useForm } from 'react-hook-form'
import LayoutMod from '../../../components/mod/LayoutMod'
import Input from '../../../components/common/Input'
import './style.css'

const ProfileMod = () => {

    const { handleSubmit, register, formState: { errors }, watch } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            password: '',
            confirmPassword: ''
        }
    })

    const onSubmit = (data) => {
        //TODO/ handle update profile logic
        console.log(data)
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

    return (
        <LayoutMod isLoading={false}>
            <h1 className='text-3xl font-bold text-Pgreen'>Mes informations:</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-8 flex flex-col max-w-[550px] gap-5'>
                <Input
                    labelTitle={'Nom mod'}
                    placeholder={'Eg: Walid'}
                    attribute={'firstName'}
                    register={textRegister('firstName')}
                    errors={errors}
                />
                <Input
                    labelTitle={'Prénom mod'}
                    placeholder={'Eg: BOUBENIA'}
                    attribute={'lastName'}
                    register={textRegister('lastName')}
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
                <button className='mt-3 shadow-lg bg-Pgreen hover:bg-[#004D50] transition-all text-white rounded-2xl w-full px-4 pt-2 pb-3 font-bold text-lg max-w-full'>Appliquer changment</button>
            </form>
        </LayoutMod>
    )
}

export default ProfileMod