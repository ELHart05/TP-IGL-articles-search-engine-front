import React, { useState, useEffect } from 'react';
import check from "../../../public/images/Check All.png";
import search from "../../../public/images/search.png";
import Navbar from "../../components/navbar_admin/Navbar";
const Modify = () => {
    return(  
        <div className='moood'>
          < Navbar/>
        <div className='titllle'>
        <button id="btn11" >   Articles </button>
        <img id="immg2" src={search} /> 
        <button id="info"> Informations   </button>
        <img id="immg2" src={check} />
        </div>
        <div className='containner'>
        <div className='titllle1'>
        <button id="white" >   Gérer moderateurs </button> 
        <button id="greenn"> Ajouter un moderateur  </button>
        <button id="white"> Mes Informations  </button>
       
        </div>
        <h2 id="green">Les Informations de l'admin:</h2>
        <h3 id="green">Nom de l'admin :</h3>
        <input id="Inputt" type="text" placeholder="Nom"/>
        <h3 id="green">Prenom de l'admin :</h3>
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