import SearchIcon from '/images/Home/search.svg'
import Chevron from '/images/Home/chevron.svg'
import { useState } from 'react'
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import API from '../../utils/api-client';

const SearchElement = ({ name }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHidden, setIsHidden] = useState(name !== "Keywords");
  const elements = ["Arch1", "Arch2", "Arch3", "Arch4"];
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex gap-3 items-center text-white'>
        <span className='text-lg font-bold'>{name}</span>
        <img src={Chevron} onClick={() => setIsHidden((prev) => !prev)} alt="Chevron Icon" className={`cursor-pointer h-6 w-6 transition-all ${(isHidden) ? 'rotate-180' : 'rotate-0'}`} />
      </div>
      <div className={`flex transition-all gap-2 text-white max-w-[120px] ${(isHidden) ? 'opacity-0 pointer-events-none' : 'pointer-events-auto opacity-100'}`}>
        {activeIndex>0 && <div className='cursor-pointer' onClick={()=>activeIndex>0 && setActiveIndex((prev) => --prev)}>{"<<"}</div>}
        <div className='flex max-w-full overflow-hidden text-center '>
          {
            elements.map((element, index) => (
              <div key={index} className='min-w-full max-w-full transition-all' style={{transform: `translateX(${-100*activeIndex}%)`}}>
                {element}
              </div>
            ))
          }
        </div>
        {activeIndex<elements.length-1 && <div className='cursor-pointer' onClick={()=>activeIndex<elements.length-1 && setActiveIndex((prev) => ++prev)}>{">>"}</div>}
      </div>
    </div>
  )
}

const DateElement = () => {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex gap-3 items-center text-white'>
        <label htmlFor='dateSearchBar' className='text-lg font-bold'>Date</label>
        <img src={Chevron} onClick={() => setIsHidden((prev) => !prev)} alt="Chevron Icon" className={`cursor-pointer transition-all h-6 w-6 ${(isHidden) ? 'rotate-180' : 'rotate-0'}`} />
      </div>
      <div className={`relative flex w-full max-w-2xl transition-all ${(isHidden) ? 'opacity-0 pointer-events-none' : 'pointer-events-auto opacity-100'}`}>
        <input id="dateSearchBar" type="date" placeholder='Search...' className='w-full bg-white p-2 pl-4 outline-none focus:border-rose-400' />
      </div>
    </div>
  )
}

const SearchBar = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      search_query: ''
    }
  })
  const searchRegister = register('search_query', {
    required: {
        value: true,
        message: 'Search value is required to proceed'
    }
  })

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async ({ search_query }) => {
    try {
      setIsLoading(true)
      const res = await API.get(`elasticsearch/search/${search_query}/`)

      console.log(res.data)

      toast.success('Search results are here!', {
          position: "top-center",
          autoClose: 5000,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
      })

    } catch (error) {
        toast.error('Something went wrong, try again!', {
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
    <div className='w-full bg-Pred text-black p-10 flex flex-col gap-16'>
      <div className='w-full flex gap-10 justify-center items-start flex-wrap'>
        {
          ["Keywords", "Authors", "Institutions"].map((element, index) => (
            <SearchElement key={index} name={element} />
          ))
        }
        <DateElement />
      </div>
      <div className='flex items-center flex-col'>
        <form onSubmit={handleSubmit(onSubmit)} className='relative flex w-full max-w-2xl'>
          <input {...searchRegister} id="searchBar" type="text" placeholder='Search...' className='w-full bg-white p-2 pl-4 outline-none focus:border-rose-400' />
          <button className='cursor-pointer'>
            <img src={SearchIcon} alt="Search Icon" className='z-10 h-8 w-8 absolute right-2 top-1 ' />
          </button>
        </form>
        <div className='flex items-start mt-2'>
          {errors?.search_query && <p className='text-red-500'>{errors?.search_query?.message}</p>}
        </div>
      </div>
    </div>
  );
}

export default SearchBar
