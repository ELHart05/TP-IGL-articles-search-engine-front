import React, { useState, useEffect } from 'react';
import "./add.css";
import check from "./Check All.png";
import search from "./Search.png";
import Navbar from "../navbar-moderator/Navbar";
const Add = () => {
    return(  
        <div className='mood'>
           <Navbar/>
           <div className='titlle'>
        <button id="btnn1" >   Articles </button>
        <img id="immg2" src={search} /> 
        <button id="infoo"> Informations   </button>
        <img id="immg2" src={check} />
        </div> 
        <div className='containner'>
        <h2 id="green">Mes Informations:</h2>
        <h3 id="green">Nom du modérateur :</h3>
        <input id="Inputt" type="text" placeholder="Nom"/>
        <h3 id="green">Prenom du modérateur :</h3>
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
export default Add