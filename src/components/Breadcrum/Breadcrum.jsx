import React, { useContext } from 'react'
import breadcrum_arrow from '../Assets/Frontend_Assets/breadcrum_arrow.png'
import { Link } from 'react-router-dom'
import './Breadcrm.css'
const Breadcrum = (props) => {
    const category = props.product.category
    
    
  return (
    <div style={{fontSize : "10px",textAlign:"left",padding:"20px",width :"auto",margin : "auto"}} className='bread-crum'>
        <Link to='/'>Home</Link>
        <img style={{width : "10px",height : "10px"}} src={breadcrum_arrow} alt="" />
        <Link to='/'>Shop</Link>
        <img style={{width : "10px",height : "10px"}} src={breadcrum_arrow} alt="" />
        <Link to={`/${category}s`}>{category}</Link>
        <img style={{width : "10px",height : "10px"}} src={breadcrum_arrow} alt="" />
        <p>{props.product.name?props.product.name:""}</p>
    </div>
  )
}

export default Breadcrum