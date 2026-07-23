import React, { useContext } from 'react'
import { ShopContext } from '../components/context/ShopContext'
import './css/Cart.css'
import cross_icon from '../components/Assets/Admin_Assets/cross_icon.png'
const Cart = () => {
  const {all_products,cartItems,addcartItem,removecartItem,email}=useContext(ShopContext)
  console.log("cart",cartItems);
  
  const handleRemoveItems = async(id)=>{
    const updatedCartItems = {
      ...cartItems,
      [id]:(cartItems[id]||0)-1
    }
    console.log(updatedCartItems);
    
    removecartItem(id)
    const response = await fetch("http://localhost:3001/removeitem",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({email,cartItems:updatedCartItems})    
    })
    const data = await response.json()
  }
  
  return (
    <div className='cart-page'>
      <div className='cart-titles'>
        <p style={{width : "5%"}}>Produts</p>
        <p style={{width : "40%"}}>Title</p>
        <p style={{width : "12%"}}>Price</p>
        <p style={{width : "12%"}}>Quantity</p>
        <p style={{width : "12%"}}>Total</p>
        <p style={{width : "12%"}}>Remove</p>

      </div>
      <hr />
      <div className='totalItemIncart'>
      {
        

        all_products.map((item,id)=>{
          if(cartItems[id]>0){
            return <div key={id} className='singleCart'>
              <div className='singleCart-top'>
              <div className='pro-img'>
                <img  src={item.image} alt="" />
              </div>
              <div className='product-info'>
                    <p className='pro-name' style={{fontSize:"13px"}}>{item.name}</p>
                    <div className='product-prices'>
                        <p >${item.new_price}</p>
                        <div className='qty-btn' >

                          <button>{cartItems[id]}</button>

                        </div>
                        <p className='total-price' >${cartItems[id]*item.new_price}</p>
                    </div>
                    <div >
                        {
                          window.innerWidth < 689?<button onClick={()=>{
                            handleRemoveItems(id)
                          }} className='rem-btn'>Remove Item</button> :<img   src={cross_icon} alt=''style={{width:"20px",height:"20px"}} onClick={()=>{
                            handleRemoveItems(id)
                          }}/>
                        }

                    </div>          
              </div>
              </div>
              
              
              <hr style={{height:"1px",width:"100%",backgroundColor:"lightgray",opacity:"0.4"}}/>
              </div>
          }
        })
      }
    </div>
    </div>
  )
}

export default Cart