import React, { useState, useEffect } from 'react';
import "./addd.css";
import check from "./Check All.png";
import search from "./Search.png";
import Layout from "../../components/Layout-admin/index"
const Addadmin = () => {
    return(  
        <div className='moood'>
          <Layout/>
        <div className='titllle'>
        <button id="btn11" >   Articles </button>
        <img id="immg2" src={search} /> 
        <button id="info"> Informations   </button>
        <img id="immg2" src={check} />
        </div>
        <div className='containner'>
        <div className='titllle1'>
        <button id="white" >   Gérer moderateurs </button> 
        <button id="white"> Ajouter un moderateur  </button>
        <button id="greenn"> Mes Informations  </button>
       
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
export default Addadmin