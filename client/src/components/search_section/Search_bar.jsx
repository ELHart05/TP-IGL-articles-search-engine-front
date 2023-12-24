import { useState } from 'react';
import "./search.css";

const SearchBar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  
  const checkboxClassName = isChecked ? 'checked' : '';

  return (
    <div className='background'>
        <div className='search_bar'>
          <div className='grid grid-cols-[repeat(4,auto)] gap-[9%] p-[4%]'>  
              <input type="text" placeholder="Titre" id="myInput" className='pl-2' />
              <input type="text" placeholder="Auteur" id="myInput" />
              <input type="text" placeholder="Mots clés" id="myInput" />
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

export default SearchBar
