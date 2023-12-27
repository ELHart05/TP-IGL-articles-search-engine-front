import React, { useState, useEffect } from 'react';
import "./add.css";
import check from "../../../public/images/Check All.png";
import search from "../../../public/images/search.png";
import Navbar from "../../components/navbar_admin/Navbar";

const Add = () => {
    return(  
        <div className='moood'>
        < Navbar/>
      <div className='containner'>
      <div className='titllle1'>
      <button id="white" >   Gérer modérateurs </button> 
      <button id="greenn"> Ajouter un modérateur  </button>
      <button id="whitee"> Mes Informations  </button>
     
      </div>
      <h2 id="green">Les Informations du modérateur:</h2>
      <h3 id="green">Nom du modérateur :</h3>
      <input id="Inputt" type="text" placeholder="Nom"/>
      <h3 id="green">Prenom du modérateur :</h3>
      <input type="text" placeholder="prenom" id="Inputt" />
      <h3 id="green">Mot de passe :</h3>
      <input type="text" placeholder="Mot de passe" id="Inputt" />
      <h3 id="green">Confirmer le mot de passe :</h3>
      <input type="text" placeholder="Mot de passe" id="Inputt" />
              
      <button id="but"> Ajouter modérateur        </button>
      </div>

      </div>
  );
}
export default Add