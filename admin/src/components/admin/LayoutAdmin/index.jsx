import Navbar from '../../common/Navbar'
import Loading from '../../common/Loading'
import UploadArticle from '../../common/UploadArticle'
import AdminNavigation from '../AdminNavigation'
import './style.css'

const LayoutMod = ({ isLoading, children }) => {
    return (
        <div className='flex flex-col px-8 min-h-screen pb-8'>
            <div className='flex flex-col gap-3'>
                <Navbar />
                <h3 className='font-bold text-lg font-second'>Hi, Admin</h3>
                <UploadArticle />
            </div>
            <main className='flex flex-col mt-5 bg-white rounded-xl flex-1 px-4 md:px-8 py-8'>
                <AdminNavigation />
                {(isLoading) ? <Loading /> : children}
            </main>
        </div>
    )
}

export default LayoutMod