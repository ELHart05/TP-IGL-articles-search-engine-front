import { useForm } from 'react-hook-form'
import LayoutAdmin from '../../../components/admin/LayoutAdmin'
import Input from '../../../components/common/Input'
import './style.css'
import axios from 'axios'

const AddModerator = () => {

    const { handleSubmit, register, formState: { errors }, watch } = useForm({
        defaultValues: {
            modName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    })

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:8000/paperhub/moderator/add-moderator/', {
                modName: data.modName,
                email: data.email,
                password: data.password,
            });
            if (response.status === 200) {
                console.log('Moderator added successfully');
            } else {
                console.error('Failed to add moderator');
            }
        } catch (error) {
            console.error('Error adding moderator:', error);
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
        <LayoutAdmin isLoading={false}>
            <h1 className='text-3xl font-bold text-Pgreen'>Ajouter modérateur:</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-8 flex flex-col max-w-[550px] gap-5'>
                <Input
                    labelTitle={'Nom modérateur'}
                    placeholder={'Eg: Hamza'}
                    attribute={'modName'}
                    register={textRegister('modName')}
                    errors={errors}
                />
                <Input
                    labelTitle={'Email modérateur'}
                    placeholder={'Eg: Hamza@gmail.com'}
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
                <button className='mt-3 shadow-lg bg-Pgreen hover:bg-[#004D50] transition-all text-white rounded-2xl w-full px-4 pt-2 pb-3 font-bold text-lg max-w-full'>Ajouter modérateur</button>
            </form>
        </LayoutAdmin>
    )
}

export default AddModerator