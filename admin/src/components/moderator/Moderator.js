import React, { useState, useEffect } from 'react';
import "./moderator.css";
import check from "./Check All.png";
import search from "./Search.png";
import pen from "./pen.png";
import trash from "./trash.png";
const Moderator = () => {
    return(  
<div className='moderator'>       
        <div className='top'> 
            <h2> PaperHub</h2> 
             <button id="btn" > log out  </button> 
             <div className='line'></div>

        </div>
        <div className='middle'> 
            <h2> Articles</h2> 
             <button id="search" > search  </button>     
        </div>
        <div className='title'>
        <button id="btn1" >   Articles </button>
        <img src={search} /> 
        <button id="info"> Informations   </button>
        <img src={check} />
        </div>
        <div className='container'>
            <div className='ligne'>
                <h4>Machine learning </h4>
                <h4>By Benkhelifa </h4>
                <img id="image" src={pen} />  
                <img id="image" src={trash} /> 
            </div>
            <div className='ligne'>
                <h4>Machine learning </h4>
                <h4>By Benkhelifa </h4>
                <img id="image" src={pen} />  
                <img id="image" src={trash} /> 
            </div>
            <div className='ligne'>
                <h4>Machine learning </h4>
                <h4>By Benkhelifa </h4>
                <img id="image" src={pen} />  
                <img id="image" src={trash} /> 
            </div>
            <div className='ligne'>
                <h4>Machine learning </h4>
                <h4>By Benkhelifa </h4>
                <img id="image" src={pen} />  
                <img id="image" src={trash} /> 
            </div>
            <div className='ligne'>
                <h4>Machine learning </h4>
                <h4>By Benkhelifa </h4>
                <img id="image" src={pen} />  
                <img id="image" src={trash} /> 
            </div>
            <div className='ligne'>
                <h4>Machine learning </h4>
                <h4>By Benkhelifa </h4>
                <img id="image" src={pen} />  
                <img id="image" src={trash} /> 
            </div>

        </div>


</div>


    );
}
export default Moderator ;