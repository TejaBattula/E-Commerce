import React, { useContext } from 'react'
import SingleProductpage from '../components/SingleProduct/SingleProduct'
import { ShopContext } from '../components/context/ShopContext'
import { Outlet, useParams } from 'react-router-dom'
import Breadcrum from '../components/Breadcrum/Breadcrum'
const Product = (props) => {
  const {all_products}=useContext(ShopContext)
  const {productId} = useParams()
  
  const item = all_products.find((card)=>{
    return Number(productId) === card.id
  })
  
  return (
    <div>
      <Breadcrum product={item}/>
      <SingleProductpage product={item}/>
    </div>
  )
}

export default Product