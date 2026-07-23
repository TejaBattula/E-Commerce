import React from 'react'
import new_collections from '../Assets/Frontend_Assets/new_collections'
import Item from '../Item/Item'
import './NewCollections.css'
const NewCollections = () => {
  return (
    <div className='new-collection'>
        <div className='new-collection-head'>
            <h1>New Collection</h1>
            <hr style={{width:"120px",borderRadius:"20px",height:"5px",backgroundColor:"black",margin:"auto"}}/>
        </div>
        <div className='new-collection-items'>
            {
                new_collections.map((item)=>{
                    return <Item  key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })
            }
        </div>
    </div>
  )
}

export default NewCollections