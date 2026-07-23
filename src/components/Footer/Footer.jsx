import React from 'react'
import pintrest_icon from '../Assets/Frontend_Assets/pintester_icon.png'
import whats_app from '../Assets/Frontend_Assets/whatsapp_icon.png'
import  instagram from '../Assets/Frontend_Assets/instagram_icon.png'
import  logo_big from '../Assets/Frontend_Assets/logo_big.png'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-title">
            <img src={logo_big} alt="" />
            <h1>SHOPPER</h1>
        </div>
        <ul className='footer-list'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <ul className='footer-icons'>
            <img src={instagram} alt="" />
            <img src={pintrest_icon} alt="" />
            <img src={whats_app} alt="" />
        </ul>
        <hr />
        <p className='footer-copy-right'>Copyright @ 2023 - All Right Reserved</p>
    </div>
  )
}

export default Footer