import SearchIcon from '/images/Home/search.svg'
import Chevron from '/images/Home/chevron.svg'
import { useState } from 'react'

const SearchElement = ({ name, setFilters, filterArticles, dataLength }) => {
  const [isHidden, setIsHidden] = useState(name != "Keywords");
  const handleChange = (e) => {
    setFilters((prev) => ({...prev, [name]: (e.target.value === "") ? false : e.target.value}));
    filterArticles();
  }
  const toggleSearch = () => {
    setIsHidden((prev) => !prev);
    setFilters((prev) => ({...prev, [name]: false}));
    filterArticles();
  }
  
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex gap-3 items-center text-white'>
        <span className='text-lg font-bold'>{name}</span>
        <img src={Chevron} onClick={toggleSearch} alt="Chevron Icon" className={`cursor-pointer h-6 w-6 transition-all ${(isHidden) ? 'rotate-180' : 'rotate-0'}`} />
      </div>
      <div className={`flex transition-all gap-2 max-w-[240px] ${(isHidden) ? 'opacity-0 pointer-events-none' : 'pointer-events-auto opacity-100'}`}>
        <div className='flex max-w-full overflow-hidden text-center'>
          <input disabled={dataLength<=0} onChange={handleChange} type="text" placeholder={name} className='text-black disabled:placeholder:text-white disabled:cursor-not-allowed pl-2 py-2 border-2 focus:border-blue-500 transition-all' />
        </div>
      </div>
    </div>
  )
}

const SearchBar = ({ searchRegister, handleSubmit, errors, onSubmit, setFilters, dataLength, filterArticles }) => {
  return (
    <div className='w-full bg-Pred text-black p-10 flex flex-col gap-8'>
      <h2 className='font-bold text-center text-white text-2xl'>Search for the article you want to discover!</h2>
      <div className='flex items-center flex-col'>
        <form onSubmit={handleSubmit(onSubmit)} className='relative flex w-full max-w-2xl'>
          <input {...searchRegister} id="searchBar" type="text" placeholder='Search...' className='w-full bg-white p-2 pl-4 outline-none border-2 focus:border-blue-500 transition-all' />
          <button className='cursor-pointer'>
            <img src={SearchIcon} alt="Search Icon" className='z-10 h-8 w-8 absolute right-2 top-1 ' />
          </button>
        </form>
        <div className='flex items-start mt-2'>
          {errors?.search_query && <p className='text-red-500'>{errors?.search_query?.message}</p>}
        </div>
      </div>
      <div className={`${(dataLength>0) ? 'cursor-default' : 'cursor-not-allowed'}`}>
        <div className={`w-full flex gap-12 justify-center items-start flex-wrap ${(dataLength>0) ? 'opacity-100 pointer-events-auto' : 'opacity-40 pointer-events-none'}`}>
          {
            ["Keywords", "Authors", "Institutions"].map((element, index) => (
              <SearchElement
                key={index}
                name={element}
                setFilters={setFilters}
                dataLength={dataLength}
                filterArticles={filterArticles}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default SearchBar
