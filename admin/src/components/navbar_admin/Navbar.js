import React, { useState, useEffect } from 'react';
import "./navvbar.css";
const Navbar = () => {
    return(
<div className='allll'>
<div className='topp'> 
            <h2> PaperHub</h2> 
             <button id="btnnn" > log out  </button> 
             <div className='line'></div>
            
        </div>
        <h2 id="hi"> Hi admin,</h2> 
        <div className='titlle'>
        <button id="btn1" >  upload des Articles </button>
        <input type="text" placeholder="Veuillez entrer url de l’article a uploader" id="inputt" />
        <button id="btn2"> upload  </button>
  
        </div> 
  
        </div>
    );}

export default Navbar