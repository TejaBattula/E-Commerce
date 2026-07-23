import React, { useContext, useState } from 'react'
import '../pages/css/UserAccount.css'
import { ShopContext } from '../components/context/ShopContext'
const UserAccount = () => {
  const {userDetails}=useContext(ShopContext)
  return (
    <div className='userAccountPage'>
        <div className="accountTitle">
            <h1>My Account</h1>
            
        </div>
        <div className="accountBody">
            <div className="img"></div>
            <div className="userInfo">
                <div className="userName">{userDetails.name}</div>
                <div className="userEmail">{userDetails.email}</div>
                <div className="userPhone">{userDetails.mobile}</div>
                <div className="userAddress">{userDetails.address}</div>
            </div>
        </div>
    </div>
  )
}

export default UserAccount