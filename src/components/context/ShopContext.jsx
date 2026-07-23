import React, { createContext, useState } from 'react'
import all_products from '../Assets/Frontend_Assets/all_product'
export const ShopContext = createContext(null)

const getDefaultCart = ()=>{
    let cart={}
    for (let index = 0; index <all_products.length+1; index++) {
        cart[index]=0
        
    }
    return cart;
}
const ShopContextProvider = (props)=>{
    const [cartItems,setCartItems]=useState(getDefaultCart())
    const [isacountcreated,setaccountcreated]=useState(false)
    const [email,setemail]=useState("")
    const setAccount = ()=>{
        setaccountcreated(!isacountcreated)
    }
    const addcartItem = (props)=>{
        console.log(props);
        
        setCartItems((prev)=>({...prev,[props]:prev[props]+1}))
        console.log(cartItems);
        
    }
    const removecartItem = (props)=>{
        setCartItems((prev)=>({...prev,[props]:prev[props]-1}))
    }
    const storeEmail = (items,value)=>{
        setemail(value)
        setCartItems(items)
    }
    const contextvalue = {all_products,addcartItem,removecartItem,cartItems,setAccount,isacountcreated,storeEmail,email}

    return(
        <ShopContext.Provider value={contextvalue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider