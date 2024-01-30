import './style.css'

const Input = ({ labelTitle, placeholder, attribute, register, errors }) => {
    
    const uuid = crypto.randomUUID();

    return (
        <div className='flex gap-4 flex-col'>
            <label htmlFor={'input'+uuid} className='text-2xl font-bold text-Pgreen w-fit'>{labelTitle}:</label>
            <input {...register} type={(['confirmPassword', 'password'].includes(attribute)) ? 'password' : "text"} id={'input'+uuid} className='rounded-xl border-2 border-Pgreen px-4 pt-2 pb-3 shadow-lg transition-all hover:shadow-none outline-none' placeholder={placeholder} />
            {errors[attribute] && <p className="text-red-500 font-bold">{errors[attribute].message}</p>}
        </div>
    )
}

export default Input