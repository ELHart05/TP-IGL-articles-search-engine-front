import { useForm } from 'react-hook-form'
import './style.css'

const SearchInput = ({ register }) => {
    return (
        <div>
            <div className="flex relative flex-1 border-2 border-black rounded-xl w-full min-w-[150px] sm:min-w-[350px]">
                <label htmlFor="searcher">
                    <img src="/panel/images/Search.svg" className='cursor-pointer absolute left-0 h-10 w-10' alt="Search" />
                </label>
                <input {...register} id='searcher' type="text" className='w-full placeholder:text-center pr-2 pl-10 py-2 rounded-xl' placeholder='Veuillez entrer l’article a rechercher' />
            </div>
        </div>
    )
}

const SearchArticle = () => {
    
    const { register, handleSubmit } = useForm({
        defaultValues: {
            searchValue: ''
        }
    })

    const searchRegister = register('searchValue', {
        required: {
            value: true,
            message: 'Field is required to proceed'
        }
    })

    const onSubmit = ({ searchValue }) => {
        //TODO/ implement search logic
        console.log(searchValue)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='bg-white flex items-center justify-between gap-4 px-4 md:px-8 py-3 rounded-xl flex-wrap'>
            <label htmlFor="searcher" className='text-center shadow-lg cursor-pointer bg-Pgreen text-white rounded-xl px-4 pb-2 pt-1 font-bold text-md'>Rechercher un articles</label>
            <SearchInput register={searchRegister} />
            <button className='text-center shadow-lg bg-Pgreen hover:bg-[#004D50] transition-all text-white rounded-xl px-4 pb-2 pt-1 font-bold text-md'>Recherch</button>
        </form>
    )
}

export default SearchArticle