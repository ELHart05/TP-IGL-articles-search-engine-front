import React, { useState, useEffect } from 'react';
import "./navvbar.css";
const Navbar = () => {
    return(
<div className='allll'>
<div className='topp'> 
            <h2 id="bold"> PaperHub</h2> 
             <button id="btnnn" > log out  </button> 
             <div className='line'></div>
            
        </div>
        <h2 id="boldd"> Hi ,</h2> 
        <div className='titllee'>
        <button id="btn111" >  upload des Articles </button>
        <input type="text" placeholder="Veuillez entrer url de l’article a uploader" id="inputt" />
        <button id="btn2"> upload  </button>
  
        </div> 
  
        </div>
    );}

export default Navbar