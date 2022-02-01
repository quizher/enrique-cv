import React from 'react';
import "./Cover.css";
import coverVideo from "../../media/code.mp4";

const Cover = () => {
  return <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted/>
      <h1> Luis Enrique Guzmán Ramírez</h1>
      <p>Developer</p>
  </div>;
};

export default Cover;
