import React, { useContext, useState } from 'react'
import './css/LoginSignup.css'
import { ShopContext } from '../components/context/ShopContext'
import { useNavigate } from 'react-router-dom'
const LoginSignup = () => {
  const [logindisplay,setlogindisplay]=useState(false)
  const {cartItems,setAccount,storeEmail,setAccountDetails}=useContext(ShopContext)
  const [error,seterror]=useState("")
  const [loading,setloading]=useState(false)
  const navigate = useNavigate()
  const [user,setUser]=useState({
    name:"",
    email:"",
    password:"",
    mobile:"",
    address : ""
  })
  const handleValue = (e)=>{
    setUser({...user,
      [e.target.name]:e.target.value
    })
  }
  const handlesignup=async (e)=>{

    e.preventDefault()
    setloading(true)
    const response = await fetch("https://e-commerce-mb34.onrender.com/signup",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({user,cartItems})
    })
    const data = await response.json()

    if(data.status == 200){
      navigate('/')
      
      setAccount()
      storeEmail(data.items,user.email)
      setAccountDetails(user)

    }else{
      seterror("signuperror")
    }
    setloading(false)
    setUser({
      name:"",
      email:"",
      password:"",
      mobile:"",
      address : ""
    })
  }
  const handlelogin=async (e)=>{
    
    e.preventDefault()
    setloading(true)
    
    const response = await fetch("https://e-commerce-mb34.onrender.com/login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)
    })
    const data = await response.json()
    if(data.message == "Vaild user"){
      console.log("login Success!");
      navigate('/')
      setAccount()
      storeEmail(data.items,user.email)
      setAccountDetails(user)

    }
    else if(data.message == "Invalid password or email"){
      seterror("loginerror")
    }
    else if(data.message == "User not found"){
      seterror("loginusererror")
      
    }
    setloading(false)

    setUser({
      name:"",
      email:"",
      password:"",
      mobile:"",
      address : ""
    })

  }
  return (
    <div className='login-sign-up-page'>
      {loading===true?<h4>Loading Please wait...</h4>:""}
      {
        logindisplay?<div className='signup accountpage'>
        <h1>Sign Up</h1>
        <form className='form accountcreateForm' onSubmit={(e)=>{handlesignup(e)}} >
          <div className='userNameEmailInput'>
          <p className='label'>Name : </p>
          <input value={user.name} onChange={(e)=>{handleValue(e)}} name='name' type="text" placeholder='Your Name' />
          <p className='label'>Email : </p>

          <input value={user.email} onChange={(e)=>{handleValue(e)}} name='email' type="text" placeholder='Email Address' />
          {error =="signuperror"?<div style={{fontSize:"12px",color:"red"}}>Email already exists!</div>:""}

          <p className='label'>Password : </p>

          <input value={user.password} onChange={(e)=>{handleValue(e)}} name="password" type="text" placeholder='Password' />
          
          </div>
          <div className='userAddressInput'>
            

            <p className='label'>Mobile : </p>

            <input type="text" value={user.mobile} onChange={(e)=>{handleValue(e)}} name="mobile"  placeholder='mobile number' />
            <p className='label'>Address : </p>

            <textarea rows='10' cols='30' placeholder='Address' name="address" value={user.address} onChange={(e)=>{handleValue(e)}}>

            </textarea>
            <button className='cont-btn'>Continue</button>
          </div>
          
        </form>
        <div className='login-footer'>
        <p>Already,have an account?<span onClick={()=>{setlogindisplay(!logindisplay)}}>Login here</span></p>
        <div style={{display:"flex",gap:"10px"}}>
          <form>
            <input type="checkbox" required/>

          </form>
        <p>By continuing,i agree to the terms of use & privary policy</p>
        </div>
        </div>
        </div>:<div  className='signup'>
      <h1>Login</h1>
      <form className='form' onSubmit={(e)=>{handlelogin(e)}}>
        <input value={user.name} onChange={(e)=>{handleValue(e)}} name='name' type="text" placeholder='Your Name' />
        <input value={user.email} onChange={(e)=>{handleValue(e)}} name='email' type="text" placeholder='Email Address' />
        <input value={user.password} onChange={(e)=>{handleValue(e)}} name="password" type="text" placeholder='Password' />
        {error =="loginerror"?<div style={{fontSize:"12px",color:"red"}}>Invaild email or password!</div>:error=="loginusererror"?<div style={{fontSize:"12px",color:"red"}}>User not found!</div>:""}

        <button>Continue</button>
      </form>
      <div className='login-footer'>
        <p>Don't have an account?<span onClick={()=>{setlogindisplay(!logindisplay)}}>Signup here</span></p>
        <div style={{display:"flex",gap:"10px"}}>
        <input type="checkbox" required/>
        <p>By continuing,i agree to the terms of use & privary policy</p>
        </div>
      </div>
      </div> 
      }
    </div>
  )
}

export default LoginSignup