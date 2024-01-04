import check from "/images/CheckAll.png";
import search from "/images/Search.png";
import pen from "/images/pen.png";
import trash from "/images/trash.png";
import Navbar from "../../components/navbar-moderator/Navbar";
import "./moderator.css";

const GererArticle = () => {
    return(  
<div className='moderattor min-h-screen'>       
          < Navbar/> 
          <div className='titlllee'>
        <button id="bt1" >   Articles </button>
        <button id="info"> Informations   </button>
        <img id="immg2" src={check} />
        <img id="immg2" src={search} />
       
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
export default GererArticle ;