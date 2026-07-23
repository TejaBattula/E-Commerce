import React, { useContext, useState } from 'react'
import './css/LoginSignup.css'
import { ShopContext } from '../components/context/ShopContext'
import { useNavigate } from 'react-router-dom'
const LoginSignup = () => {
  const [logindisplay,setlogindisplay]=useState(false)
  const {cartItems,setAccount,storeEmail}=useContext(ShopContext)
  const [error,seterror]=useState("")
  const navigate = useNavigate()
  const [user,setUser]=useState({
    name:"",
    email:"",
    password:""
  })
  const handleValue = (e)=>{
    setUser({...user,
      [e.target.name]:e.target.value
    })
  }
  const handlesignup=async (e)=>{
    e.preventDefault()
    
    const response = await fetch("http://localhost:3001/signup",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({user,cartItems})
    })
    const data = await response.json()
    if(data.status == 200){
      navigate('/')
      
      setAccount()
      storeEmail(data.items,user.email)


    }else{
      seterror("signuperror")
    }
    setUser({
      name:"",
      email:"",
      password:""
    })
  }
  const handlelogin=async (e)=>{
    e.preventDefault()
    
    const response = await fetch("http://localhost:3001/login",{
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

    }
    else if(data.message == "Invalid password or email"){
      seterror("loginerror")
    }
    else if(data.message == "User not found"){
      seterror("loginusererror")
      
    }
    setUser({
      name:"",
      email:"",
      password:""
    })

  }
  return (
    <div className='login-sign-up-page'>
      {
        logindisplay?<div className='signup'>
        <h1>Sign Up</h1>
        <form className='form' onSubmit={(e)=>{handlesignup(e)}} >
          <input value={user.name} onChange={(e)=>{handleValue(e)}} name='name' type="text" placeholder='Your Name' />
          {error =="signuperror"?<div style={{fontSize:"12px",color:"red"}}>Email already exists!</div>:""}
          <input value={user.email} onChange={(e)=>{handleValue(e)}} name='email' type="text" placeholder='Email Address' />
          <input value={user.password} onChange={(e)=>{handleValue(e)}} name="password" type="text" placeholder='Password' />
          <button>Continue</button>
        </form>
        <p>Already,have an account?<span onClick={()=>{setlogindisplay(!logindisplay)}}>Login here</span></p>
        <div style={{display:"flex"}}>
        <input type="checkbox"/>
        <p>By continuing,i agree to the terms of use & privary policy</p>
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
      <p>Don't have an account?<span onClick={()=>{setlogindisplay(!logindisplay)}}>Signup here</span></p>
      <div style={{display:"flex"}}>
      <input type="checkbox" required/>
      <p>By continuing,i agree to the terms of use & privary policy</p>
      </div>
      </div> 
      }
    </div>
  )
}

export default LoginSignup