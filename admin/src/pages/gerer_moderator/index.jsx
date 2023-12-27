import Navbar from "../../components/navbar_admin/Navbar";
import { Link } from "react-router-dom";
import Trash from '/images/trash.png'
import Pen from '/images/pen.png'
import Ellipse from '/images/ellipse.svg'
import "./add.css";

const ModElement = ({ name }) => {
    return (
        <div className="rounded-md flex items-center justify-between p-4 flex-wrap" style={{outline: "2px solid black",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)"}}>
            <div className="flex gap-4 items-center">
                <div>
                    <img className="h-4 w-4" src={Ellipse} alt="Ellipse" />
                </div>
                <div className="text-md">1</div>
            </div>
            <div>{name}</div>
            <div className="flex gap-2 items-center">
                <div>
                    <img className="h-6 w-6" src={Pen} alt="Pen" />
                </div>
                <div>
                    <img className="h-6 w-6" src={Trash} alt="Trash" />
                </div>
            </div>
        </div>
    )
}

const GererModerator = () => {
    return(
        <div className='moood min-h-screen flex flex-col items-center'>
            < Navbar />
            <div className='w-[90%] md:w-[70%] bg-white p-4'>
                <div className="flex gap-8 flex-wrap justify-center w-full">
                    <Link to="/gerer-moderator" className="flex items-center justify-center rounded-xl p-2 text-white bg-green-800"> Gérer modérateurs
                    </Link>
                    <Link to="/add-moderator" className="flex items-center justify-center border border-black text-black rounded-xl p-2"> Ajouter un
                    modérateur </Link>
                    <Link to="/admin-info" className="flex items-center justify-center border border-black text-black rounded-xl p-2"> Mes Informations
                    </Link>
                </div>
                <div className="flex gap-4 items-center w-full">
                    <div className="text-4xl cursor-pointer">{"<"}</div>
                    <div className="w-full">
                        <div className="mt-10 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                            {
                                [...new Array(6)].map((f, idx) => (
                                    <ModElement name="Okba ALLAOUA" key={idx} />
                                ))
                            }
                        </div>
                        <div className="mt-6 flex-wrap flex gap-4 w-full justify-center">
                            {
                                [...new Array(4)].map((e, i) => (
                                    <div className="w-5 h-5 rounded-full border cursor-pointer border-black"></div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="text-4xl cursor-pointer">{">"}</div>
                </div>
            </div>

        </div>
    );
}
export default GererModerator