import React from 'react'
import './Offers.css'
import exclusive_img from "../Assets/Frontend_Assets/exclusive_image.png"
import { useNavigate } from 'react-router-dom'
const Offers = () => {
  const navigate = useNavigate()
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <h3>ONLY ON BEST SELLERS PRODUCTS</h3>
            <button onClick={()=>{navigate('/womens')}}>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_img} alt="" />
        </div>
    </div>
  )
}

export default Offers