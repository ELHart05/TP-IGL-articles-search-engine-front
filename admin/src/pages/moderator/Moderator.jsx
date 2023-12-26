import React, { useState, useEffect } from 'react';
import "./moderator.css";
import check from "../../../public/images/check All.png";
import search from "../../../public/images/search.png";
import pen from "../../../public/images/pen.png";
import trash from "../../../public/images/trash.png";
import Navbar from "../../components/navbar-moderator/Navbar";
const Moderator = () => {
    return(  
<div className='moderattor'>       
          < Navbar/> 
          <div className='titlllee'>
        <button id="btnn1" >   Articles </button>
        <img id="immg2" src={search} /> 
        <button id="infoo"> Informations   </button>
        <img id="immg2" src={check} />
        </div>    
        <div className='containner'>
            <div className='ligne'>
                <h4 id="titre">Machine learning </h4>
                <h4 id="titre">By Benkhelifa </h4>
                <img id="immg" src={pen} />  
                <img id="immg" src={trash} /> 
            </div>
            <div className='ligne'>
                <h4 id="titre">Machine learning </h4>
                <h4 id="titre">By Benkhelifa </h4>
                <img id="immg" src={pen} />  
                <img id="immg" src={trash} /> 
            </div>
            <div className='ligne'>
                <h4 id="titre">Machine learning </h4>
                <h4 id="titre">By Benkhelifa </h4>
                <img id="immg" src={pen} />  
                <img id="immg" src={trash} /> 
            </div>
            <div className='ligne'>
                <h4 id="titre">Machine learning </h4>
                <h4 id="titre">By Benkhelifa </h4>
                <img id="immg" src={pen} />  
                <img id="immg" src={trash} /> 
            </div>
            <div className='ligne'>
                <h4 id="titre">Machine learning </h4>
                <h4 id="titre">By Benkhelifa </h4>
                <img id="immg" src={pen} />  
                <img id="immg" src={trash} /> 
            </div>
            <div className='ligne'>
                <h4 id="titre">Machine learning </h4>
                <h4 id="titre">By Benkhelifa </h4>
                <img id="immg" src={pen} />  
                <img id="immg" src={trash} /> 
            </div>

        </div>


</div>


    );
}
export default Moderator ;