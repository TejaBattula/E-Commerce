import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/Frontend_Assets/hand_icon.png'
import arrow from '../Assets/Frontend_Assets/arrow.png'
import hero_image from '../Assets/Frontend_Assets/hero_image.png'
import NewCollections from '../NewCollections/NewCollections'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='hero-page'>
        <div className="hero-left">
            <h3 >NEW ARRIVALS ONLY</h3>
            <div>
                <h1>new <img src={hand_icon} alt="" className='hand-icon'/></h1>
                <h1>collections</h1>
                <h1>for everyone</h1>
            </div>
            <button className='hero-colleciton-btn'>Latest collections<img src={arrow}></img></button>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" width="400"/>
        </div>
    </div>
  )
}

export default Hero