import { Link } from 'react-router-dom';
import "./navvbar.css";
const Navbar = () => {
    return(
        <div className='allll w-full'>
            <div className='topp py-2'>
                <Link to={'/'} id="bold"> PaperHub</Link>
                <button id="btnnn"> log out </button>
                <div className='line'></div>
            </div>
            <h2 id="boldd"> Hi admin,</h2>
            <div className='titllee'>
                <button id="btn111" className='capitalize'> upload des Articles </button>
                <input type="text" placeholder="Veuillez entrer url de l’article a uploader" id="inputt" />
                <button id="btn2" className='capitalize'> upload </button>
            </div>
        </div>
    );
}

export default Navbar