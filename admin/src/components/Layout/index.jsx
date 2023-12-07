import Navbar from '../Navbar';
import Footer from '../Footer';
import './style.css';

const Layout = ({ isLoading, children }) => {
    return (
        <>
            <Navbar />
            <div>{isLoading ? "Loading..." : children}</div>
            <Footer />
        </>
    )
}

export default Layout