import { useState } from 'react'
import { useForm } from 'react-hook-form'
import LayoutAdmin from '../../../components/admin/LayoutAdmin'
import Input from '../../../components/common/Input'
import './style.css'
import { useParams } from 'react-router-dom'
import { modsList } from '../gerer-moderator'

const ModView = ({ mod }) => {

    const { handleSubmit, register, formState: { errors } } = useForm({
        defaultValues: {
            firstName: mod.firstName,
            lastName: mod.lastName,
            password: '',
            confirmPassword: ''
        }
    })

    const onSubmit = (data) => {
        //TODO: handle update mod logic
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

    return (
        <>
            <h1 className='text-3xl font-bold text-Pgreen'>MAJ modérateur:</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-8 flex flex-col max-w-[550px] gap-5'>
                <Input
                    labelTitle={'Nom modérateur'}
                    placeholder={'Eg: Hamza'}
                    attribute={'firstName'}
                    register={textRegister('firstName')}
                    errors={errors}
                />
                <Input
                    labelTitle={'Prénom modérateur'}
                    placeholder={'Eg: ARAB'}
                    attribute={'lastName'}
                    register={textRegister('lastName')}
                    errors={errors}
                />
                <button className='mt-3 shadow-lg bg-Pgreen hover:bg-[#004D50] transition-all text-white rounded-2xl w-full px-4 pt-2 pb-3 font-bold text-lg max-w-full'>Ajouter modérateur</button>
            </form>
        </>
    )
}

const UpdateModerator = () => {
    
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    setInterval(() => {
        setIsLoading(false)
    }, 5000)

    const mod = modsList.find((mod) => (
        mod.id == id
    ));
    //this is just an example of loading

    return (
        <LayoutAdmin isLoading={isLoading}>
            <ModView mod={mod} />
        </LayoutAdmin>
    )
}

export default UpdateModerator