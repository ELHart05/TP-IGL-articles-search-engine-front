import React, { useState, useEffect } from 'react';
import "./navbar.css";
import check from "./Check All.png";
import search from "./Search.png";
const Navbar = () => {
    return(
        <div className='allll'>
<div className='topp'> 
            <h2> PaperHub</h2> 
             <button id="btnnn" > log out  </button> 
             <div className='line'></div>
        </div>
        <div className='middlle'> 
            <h2> Articles</h2> 
             <input id="search" type="text" placeholder="Search articles "/>    
        </div>
        </div>
    );}

export default Navbar

