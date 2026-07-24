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
            
            <div className='userImg'>
                  <img src={userDetails.image} alt="" />
                </div>
            
            <div className="userInfo">
                
                <p> Name : </p>
                <div className="userName">{userDetails.name}</div>
                <p> Email : </p>
                <div className="userEmail">{userDetails.email}</div>
                <p> Mobile :</p>
                <div className="userPhone">{userDetails.mobile}</div>
                <p> Address : </p>
                <div className="userAddress">{userDetails.address}</div>
            </div>
        </div>
    </div>
  )
}

export default UserAccount