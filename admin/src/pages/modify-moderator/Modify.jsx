import check from "/images/CheckAll.png";
import search from "/images/Search.png";
import Navbar from "../../components/navbar_admin/Navbar";
const Modify = () => {
    return(  
        <div className='moood min-h-screen'>
          < Navbar/>
          <div className='titlllee'>
        <button id="btnn1" >   Articles </button>
        <img id="immg2" src={search} /> 
        <button id="infoo"> Informations   </button>
        <img id="immg2" src={check} />
        </div> 
        <div className='containner'>
        <h2 className="font-bold" id="green">Information de moderateur:</h2>
        <h3 id="green">Nom de modérateur :</h3>
        <input id="Inputt" type="text" placeholder="Nom"/>
        <h3 id="green">Prenom de modérateur :</h3>
        <input type="text" placeholder="prenom" id="Inputt" />
        <h3 id="green">Mot de passe :</h3>
        <input type="text" placeholder="Mot de passe" id="Inputt" />
        <h3 id="green">Confirmer le mot de passe :</h3>
        <input type="text" placeholder="Mot de passe" id="Inputt" />
                
        <button id="but"> Appliquer changment        </button>
        </div>

        </div>
    );
}
export default Modify