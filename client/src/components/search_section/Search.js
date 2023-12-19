import React, { useState, useEffect } from 'react';
import "./search.css";

const Search = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
  
    const checkboxClassName = isChecked ? 'checked' : '';
  return (
    <div className='background'>
        <div className='search_bar'>
            <div className='grid1'>  
               <input type="text" placeholder="Titre" id="Input" />
               <input type="text" placeholder="Auteur" id="Input" />
               <input type="text" placeholder="Mots clés" id="Input" />
               <button id="btn">Rechercher</button>
            </div>
            <div className='grid2'>  
               <button id="btnn">Auteurs</button>
               <button id="btnn">Mots</button>
               <button id="btnn">Institions</button>
               <button id="btnn">Période</button>
            </div>
            
            
       </div>
    </div>
  );
}

export default Search
