import React, { useState, useEffect } from 'react';
import "./moderator.css";
import check from "./Check All.png";
import search from "./Search.png";
import pen from "./pen.png";
import trash from "./trash.png";
const Moderator = () => {
    return(  
<div className='moderattor'>       
        <div className='topp'> 
            <h2> PaperHub</h2> 
             <button id="btnnn" > log out  </button> 
             <div className='line'></div>

        </div>
        <div className='middlle'> 
            <h2> Articles</h2> 
             <button id="search" > search  </button>     
        </div>
        <div className='titlle'>
        <button id="btn1" >   Articles </button>
        <img id="immg2" src={search} /> 
        <button id="info"> Informations   </button>
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