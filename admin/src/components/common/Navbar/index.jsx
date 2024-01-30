import './style.css'

const Navbar = () => {

    const handleLogout = () => {
        //TODO: handle logic
        console.log('logged out')
    }

    return (
        <div className='border-b-2 border-b-Pgreen py-3 flex items-center justify-between'>
            <h3 className='font-second text-lg font-bold'>PapersHub</h3>
            <button onClick={handleLogout} className='shadow-lg bg-Pgreen hover:bg-[#004D50] transition-all text-white rounded-xl px-4 pb-2 pt-1 font-bold text-md'>Logout</button>
        </div>
    )
}

export default Navbar