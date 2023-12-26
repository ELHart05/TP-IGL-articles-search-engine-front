import React, { useState, useEffect } from 'react';
import "./moderator.css";
import check from "./Check All.png";
import search from "./Search.png";
import pen from "./pen.png";
import trash from "./trash.png";
import Layout from "../../components/Layout-moderator/index"
const Moderator = () => {
    return(  
<div className='moderattor'>       
          <Layout/>   
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