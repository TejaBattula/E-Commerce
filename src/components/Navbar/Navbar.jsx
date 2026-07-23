import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/Frontend_Assets/logo.png'
import cart_icon from '../Assets/Frontend_Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import cross_icons from '../Assets/Admin_Assets/cross_icon.png'
import { ShopContext } from '../context/ShopContext'
const Navbar = () => {

    const [category,setCategory]=useState("shop")
    const [menu,setmenu]=useState(false)
    const {setAccount,isacountcreated}=useContext(ShopContext)
  return (
    <div className='navbar'>
        <i onClick={()=>{setmenu(!menu)}} class="fa-solid fa-bars"></i>
        <div className="shop-logo">
            <img src={logo} alt="" />
            <h2>SHOPPER</h2>
        </div>
        <ul className={menu===true?"categories slidebar":"categories"}>
            <div className='sliderbar-icon'>
                <div className='slidebar-title'>
                    <img src={logo} alt="" />
                    <h2>SHOPPER</h2>
                </div>
                <img className='sliderbar-remove-icon' onClick={()=>{setmenu(!menu)}} src={cross_icons} alt="" />
            </div>
            <li onClick={()=>{setCategory("shop")}} ><Link to='/'><p>shop</p>{category==="shop"?<hr/>:<></>}</Link></li>
            <li onClick={()=>{setCategory("men")}} ><Link to='/mens'><p>men</p>{category==="men"?<hr/>:<></>}</Link></li>
            <li onClick={()=>{setCategory("women")}} ><Link to="/womens"><p>women</p>{category==="women"?<hr/>:<></>}</Link></li>
            <li onClick={()=>{setCategory("kids")}} ><Link to="/kids"><p>kids</p> {category==="kids"?<hr/>:<></>}</Link></li>
        </ul>
        <div className="cart-login">
            <Link to="/login">{isacountcreated===true?<button onClick={()=>{setAccount()}}>Logout</button>:<button>Login</button>}</Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <Link to='/account'><i class="fa-solid fa-circle-user"></i></Link>
        </div>
    </div>
  )
}

export default Navbar