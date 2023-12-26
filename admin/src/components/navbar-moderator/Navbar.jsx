import React, { useState, useEffect } from 'react';
import "./navbar.css";
const Navbar = () => {
    return(
        <div className='allll'>
<div className='topp'> 
            <h2 id="bold"> PaperHub</h2> 
             <button id="btnnn" > log out  </button> 
             <div className='line'></div>
        </div>
        <div className='middlle'> 
            <h2 id="bold"> Articles</h2> 
             <input id="searchh" type="text" placeholder="Search articles "/>    
        </div>
        </div>
    );}

export default Navbar