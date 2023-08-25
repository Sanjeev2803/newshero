import React from 'react';
import Gif from '../images/main.gif'; // Adjust the path based on your project structure

const GifComponent =()=> {
  
    return (
      <div className="container d-flex justify-content-center" style={{borderRadius:"50%",height:"50px"}}>
        <img src={Gif} alt=".gif" />
      </div>
    );
  }
export default GifComponent
