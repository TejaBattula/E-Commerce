import React, { useContext } from 'react'
import arrow_down from '../components/Assets/Frontend_Assets/arrow.png'
import { ShopContext } from '../components/context/ShopContext'
import Item from '../components/Item/Item'
import './css/ShopCategory.css'
import Product from './Product'
import { useNavigate } from 'react-router-dom'
const ShopCategory = (props) => {
  const {all_products}=useContext(ShopContext)
  const navigate = useNavigate()  
  return (
    <div className='shopcategory'>
      <img className='banner' src={props.banner} alt="" />
      <div className="show-no-of-items">
        <p><span style={{fontWeight:"800"}}>Showing 1-12</span>out of 36 products</p>
        <button className="sort-order">Sort by <img src={arrow_down} alt="" /></button>
      </div>
      
      <div className="products">
        {
          all_products.map((card)=>{
            if (props.category===card.category) {
              return <Item key={card.id} id={card.id} name={card.name} image={card.image} new_price={card.new_price} old_price={card.old_price}  onClick={()=>{navigate(`/products/${card.id}`)}}  />
              
            }
          })
        }
      </div>
    </div>
  )
}

export default ShopCategory