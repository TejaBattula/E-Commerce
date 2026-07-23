import React from 'react'
import './Popular.css'
import data_product from '../Assets/Frontend_Assets/data'
import Item from '../Item/Item'
const Popular = () => {
    
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr style={{height:"5px",width:"100px",backgroundColor:"black",borderRadius:"20px"}} />
        <div className='popular-items'>
            {
                data_product.map((card)=>{
                    const {id}=card
                    return <Item  key={id} id={card.id} name={card.name} image={card.image} new_price={card.new_price} old_price={card.old_price} />
                })
            }
        </div>
    </div>
  )
}

export default Popular