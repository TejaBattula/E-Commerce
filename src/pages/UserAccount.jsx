import React from 'react'
import '../pages/css/UserAccount.css'
const UserAccount = () => {
  return (
    <div className='userAccountPage'>
        <div className="accountTitle">
            <h1>My Account</h1>
            
        </div>
        <div className="accountBody">
            <div className="img"></div>
            <div className="userInfo">
                <div className="userName"></div>
                <div className="userEmail"></div>
                <div className="userPhone"></div>
                <div className="userAddress"></div>
            </div>
        </div>
    </div>
  )
}

export default UserAccount