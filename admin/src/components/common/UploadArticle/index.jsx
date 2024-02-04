import { useForm } from 'react-hook-form'
import './style.css'
import API from "../../../utils/api-client" 
import { useState } from 'react'
import { toast } from 'react-toastify';
import Spinner from 'react-spinner-material'

const UploadInput = ({ register }) => {
    return (
        <div>
            <div className="flex relative flex-1 border-2 border-black rounded-xl w-full min-w-[150px] sm:min-w-[350px]">
                <label htmlFor="uploader">
                    <img src="/panel/images/CheckAll.svg" className='cursor-pointer absolute left-1 h-8 w-8 mt-1' alt="Check" />
                </label>
                <input {...register} id='uploader' type="text" className='w-full placeholder:text-center pr-2 pl-10 py-2 rounded-xl' placeholder='Veuillez entrer url de l’article a uploader' />
            </div>
        </div>
    )
}

const UploadArticle = () => {

    const { register, handleSubmit } = useForm({
        defaultValues: {
            uploadValue: ''
        }
    })

    const uploadRegister = register('uploadValue', {
        required: {
            value: true,
            message: 'Field is required to proceed'
        }
    })

    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async ({ uploadValue }) => {
        try {
            setIsLoading(true)
            console.log(uploadValue)
            const response = await API.get(`/elasticsearch/drive/${uploadValue}/`);
            if (response.status === 200) {
                toast.success('Article uploaded successfully', {
                    position: "top-center",
                    autoClose: 5000,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                })
            } else {
                toast.error('Failed to upload article', {
                    position: "top-center",
                    autoClose: 5000,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                })
            }
        } catch (error) {
            toast.error('Error uploading article', {
                position: "top-center",
                autoClose: 5000,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='bg-white flex items-center justify-between gap-4 px-4 md:px-8 py-3 rounded-xl flex-wrap'>
            <label htmlFor="uploader" className='text-center shadow-lg cursor-pointer bg-Pgreen text-white rounded-xl px-4 pb-2 pt-1 font-bold text-md'>Uploader des articles</label>
            <UploadInput register={uploadRegister} />
            <button className='flex items-center justify-center text-center shadow-lg bg-Pgreen hover:bg-[#004D50] transition-all text-white rounded-xl px-8 pb-2 pt-1 font-bold text-md' disabled={isLoading}>{isLoading ? <Spinner style={{height: "28px", width: "28px"}} color='white' /> : 'Upload'}</button>
        </form>
    )
}

export default UploadArticle