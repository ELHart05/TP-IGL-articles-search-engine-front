import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import LayoutAdmin from '../../../components/admin/LayoutAdmin'
import Input from '../../../components/common/Input'
import { useNavigate, useParams } from 'react-router-dom'
import API from '../../../utils/api-client'
import { toast } from 'react-toastify';
import Spinner from 'react-spinner-material'
import './style.css'

const ModView = ({ mod }) => {

    const [isLoading, setIsLoading] = useState(false);
    const { handleSubmit, register, formState: { errors } } = useForm({
        defaultValues: {
            username: mod?.user?.username,
            email: mod?.user?.email,
        }
    })
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            setIsLoading(true);

            await API.put(`/paperhub/moderator/update-moderator/${mod?.id}/`, {
                ...data,
            })

            toast.success('Mod account updated successfully', {
                position: "top-center",
                autoClose: 5000,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            })
        } catch (error) {
            console.log(error)
            toast.error('Error!', {
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

    return (
        <>
            <h1 className='text-3xl font-bold text-Pgreen'>MAJ modérateur:</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-8 flex flex-col max-w-[550px] gap-5'>
                <Input
                    labelTitle={'Username modérateur'}
                    placeholder={'Eg: Okba'}
                    attribute={'username'}
                    register={textRegister('username')}
                    errors={errors}
                />
                <Input
                    labelTitle={'Email modérateur'}
                    placeholder={'Eg: lo_allaoua@esi.dz'}
                    attribute={'email'}
                    register={textRegister('email')}
                    errors={errors}
                />
                <button className='flex items-center justify-center mt-3 shadow-lg bg-Pgreen hover:bg-[#004D50] transition-all text-white rounded-2xl w-full px-4 pt-2 pb-3 font-bold text-lg max-w-full' disabled={isLoading}>{isLoading ? <Spinner style={{height: "28px", width: "28px"}} color='white' /> : 'Ajouter modérateur'}</button>
            </form>
        </>
    )
}

const UpdateModerator = () => {
    
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [mod, setMod] = useState(null);

    useEffect(() => {
        const currentMod = async () => {            
            try {
                setIsLoading(true);
    
                const res = await API.get(`paperhub/moderator/get_moderators/`)

                setMod(res.data.find((mod) => (
                    mod.id == id
                )))
    
                toast.success('Mod found!', {
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

        currentMod()
    }, [])

    return (
        <LayoutAdmin isLoading={isLoading}>
            <ModView mod={mod} />
        </LayoutAdmin>
    )
}

export default UpdateModerator