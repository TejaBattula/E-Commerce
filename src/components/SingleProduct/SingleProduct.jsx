import React, { useContext, useState } from 'react'
import '../SingleProduct/SingleProduct.css'
import star_dull_icon from '../Assets/Frontend_Assets/star_dull_icon.png'
import star_icon from '../Assets/Frontend_Assets/star_icon.png'
import { ShopContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'
const SingleProductpage = (props) => {
    const [cartnotification,setcartnotification]=useState(false)
    const {id,image,name,old_price,new_price} = props.product
    const {addcartItem,isacountcreated,cartItems,email} = useContext(ShopContext)
    const naviagte = useNavigate()
    const handleCart=async(id)=>{
        if(isacountcreated){
            const updatedCartItems = {
                ...cartItems,
                [id-1]:(cartItems[id-1]||0)+1
            }
            addcartItem(id-1)
            const interval = setInterval(() => {
                setcartnotification(!cartnotification)
            }, 0);
            
            setTimeout(() => {
                setcartnotification(false)
                clearInterval(interval);
            }, 3000); 
            const response = await fetch("http://localhost:3001/additem",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({email,cartItems:updatedCartItems})    
              })
              const data = await response.json()
        }
        else{
            alert("Please login to continue...")
            naviagte('/login')
            
        }
        
    }
  return (
    <div className="singleProduct-item-page">
        <div className="singleProduct-left">
            <div className="side-images">
                <img src={image} alt="side-image" />
                <img src={image} alt="side-image" />
                <img src={image} alt="side-image" />
                <img src={image} alt="side-image" />
            </div>
            <div className="main-image">
                <img src={image} alt="main-image" />
            </div>
        </div>
        <div className="singleProduct-right">
            <div className={cartnotification?'cart-add-noti active':"cart-add-noti"}>Item is added to cart!</div>
            <h3 className="product-title">{name}</h3>
            <div className="rating">
                <img src={star_icon} alt="rating" />
                <img src={star_icon} alt="rating" />
                <img src={star_icon} alt="rating" />
                <img src={star_icon} alt="rating" />
                <img src={star_dull_icon} alt="rating" />
                <p>(122)</p>

            </div>
            <div className="prices">
                <p style={{textDecoration : "line-through",opacity : "0.7"}}>${old_price}</p>
                <p style={{"color": "rgb(233, 49, 58)"}}>${new_price}</p>
            </div>
            <p className="item-info">
                A lightweight,usually limited,pulover shirt,colose-fitting and with a round neckline
                and short sleeves ,worn as an underweight or outergarment.
            </p>
            <div className="sizes">
                <h6 style={{fontWeight : "600",marginBottom : "20px"}}>Select Size</h6>
                <div className='d-flex sizes-div'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>

                </div>
            </div>
            <button className="add-to-cart" onClick={()=>{handleCart(id)}}>ADD TO CART</button>
            <div className="other-info">
                <p><span >Category :</span> women,T-shirt Crop top</p>
                <p><span >Tags :</span>modern,latest</p>
            </div>
        </div>
    </div>
  )
}

export default SingleProductpage