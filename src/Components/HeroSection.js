import React from 'react';
import './HeroSectionStyles.css';
const HeroSection = (props) => {
  return (
    <div className='image-container'>
        <img alt='Hero Img' src={props.image}/>
        <div className='content-container'>
        <h2>{props.heading} </h2>
        <p>{props.description}</p>
        <button className={props.btnClsName}>{props.button}</button>
        </div>
        </div>
    )
}

export default HeroSection