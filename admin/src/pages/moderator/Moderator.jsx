import check from "/images/CheckAll.png";
import search from "/images/Search.png";
import pen from "/images/pen.png";
import trash from "/images/trash.png";
import Navbar from "../../components/navbar-moderator/Navbar";
import "./moderator.css";

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