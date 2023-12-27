import "./addd.css";
import check from "/images/CheckAll.png";
import search from "/images/Search.png";
import Navbar from "../../components/navbar_admin/Navbar";
import { Link } from "react-router-dom";
const Addadmin = () => {
    return(  
        <div className='moood min-h-screen flex flex-col items-center'>
          < Navbar/>
  
        <div className='w-[90%] md:w-[70%] bg-white p-4'>
        <div className="flex gap-8 flex-wrap justify-center w-full">
                    <Link to="/gerer-moderator" className="flex items-center justify-center border border-black text-black rounded-xl p-2"> Gérer modérateurs
                    </Link>
                    <Link to="/add-moderator" className="flex items-center justify-center border border-black text-black rounded-xl p-2"> Ajouter un
                    modérateur </Link>
                    <Link to="/admin-info" className="flex items-center justify-center text-white bg-green-800 rounded-xl p-2"> Mes Informations
                    </Link>
                </div>
                <div className="flex flex-col">
                  <h2 className="font-bold" id="green">Mes information:</h2>
                  <h3 id="green">Nom de l'admin :</h3>
                  <input id="Inputt" type="text" className="w-full" placeholder="Nom"/>
                  <h3 id="green">Prenom de l'admin :</h3>
                  <input type="text" placeholder="prenom" id="Inputt" />
                  <h3 id="green">Mot de passe :</h3>
                  <input type="text" placeholder="Mot de passe" id="Inputt" />
                  <h3 id="green">Confirmer le mot de passe :</h3>
                  <input type="text" placeholder="Mot de passe" id="Inputt" />
                          
                  <button id="but"> Appliquer changment        </button>
                </div>
        </div>
        </div>
    );
}
export default Addadmin