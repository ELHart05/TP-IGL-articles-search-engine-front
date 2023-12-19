import React, { useState, useEffect } from 'react';
import "./article.css";
import heart from './Vector.png'

const Artilce = () => {
    return(  
       
        <div className='grid'>
           
             <div className='article'>
             <h2> Title  </h2> 
             <h3>Resumé  </h3> 
             <p> The recent Tailwind CSS update presents a 
             comprehensive set of enhancements. Among the notable
              improvements are revamped utility classes, offering a 
              wider array of options for developers seeking versatile 
              styling solutions. Performance optimizations stand out 
              as a pivoes</p> 
              <img src={heart}/>   
           
            </div> 
            <div className='article'>
            <h2> Title  </h2> 
             <h3>Resumé  </h3> 
             <p> The recent Tailwind CSS update presents a 
             comprehensive set of enhancements. Among the notable
              improvements are revamped utility classes, offering a 
              wider array of options for developers seeking versatile 
              styling solutions. Performance optimizations stand out 
              as a pivoes</p> 
              <img src={heart}/> 
            
            </div> 
            <div className='article'>
            <h2> Title  </h2> 
             <h3>Resumé  </h3> 
             <p> The recent Tailwind CSS update presents a 
             comprehensive set of enhancements. Among the notable
              improvements are revamped utility classes, offering a 
              wider array of options for developers seeking versatile 
              styling solutions. Performance optimizations stand out 
              as a pivoes</p> 
              <img src={heart}/>  
              
            </div> 
            <div className='article'>
             <h2> Title  </h2> 
             <h3>Resumé  </h3>  
             <p> The recent Tailwind CSS update presents a 
             comprehensive set of enhancements. Among the notable
              improvements are revamped utility classes, offering a 
              wider array of options for developers seeking versatile 
              styling solutions. Performance optimizations stand out 
              as a pivoes</p>  
             <img src={heart}/>   
              
             
            </div> 
          

        </div>
    );
}
export default Artilce