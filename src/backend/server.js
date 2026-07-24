require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const multer = require("multer")
const cloudinary = require("cloudinary").v2
const {CloudinaryStorage} = require("multer-storage-cloudinary")

cloudinary.config({
    cloud_name : process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})


const app=express()
app.use(cors())
app.use(express.json());
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Connected to database!");
    
})
.catch(()=>{
    
    console.log("Database connection failed!");
    
})

const UserSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    mobile :{
        type : String,
        required : true
    },
    address :{
        type: String,
        required : true
    },
    image:{
        type : String
        
    },
    cartItems: {
      type: Object,
      default: {}
    }
  });

const User = mongoose.model("Users",UserSchema)

const storage = new CloudinaryStorage({
    cloudinary : cloudinary,
    params : {
        folder : "e-commerce_users",
        allowed_formats : ["jpg", "jpeg", "png", "webp"],
    }
})
  
const upload = multer({storage})

app.post('/signup',upload.single("image"),async (req,res)=>{
    
    console.log("hi",req.body);
    console.log(req.body.userImg);
    
    const hashPassword = await bcrypt.hash(req.body.password,10)
    try {

        const signupuser = await User.findOne({email:req.body.email})

        if(signupuser){
            return res.send({message : "email exists"})
        }else{
            const newuser =new User({
                name : req.body.name,
                email : req.body.email,
                password : hashPassword,
                image : req.filter.path,
                mobile :req.body.mobile,
                address : req.body.address,
                cartItems : req.body.cartItems
    
            })
            await newuser.save()
            console.log("Data sent to Database");
            res.send({status:200,message:"success",items:cartItems})

        }

        
        
    } catch (error) {
        console.log("Error occured during sending data : ",error.message);
        
    }
})
app.post('/login',async(req,res)=>{
    const {email,password}=req.body
    try {
        const loginuser =await User.findOne({email : email})
        if(!loginuser){
            return res.json({ message: "User not found"});
        }
        const isMatch = await bcrypt.compare(password,loginuser.password)
        
        if(isMatch){
            console.log("Valid user!");
            
            return res.json({message : "Vaild user",status : 200,items : loginuser})
        }
        else{
            console.log("user not found!");

            return res.json({message : "Invalid password or email",status : 500})
        }

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
})
app.post('/additem',async(req,res)=>{
    try {
        console.log(req.body);
        const newitem = await User.findOne({email:req.body.email})
        if(newitem){
            newitem.cartItems=req.body.cartItems
            await newitem.save()
            console.log(newitem);
            res.status(200).json({message :"Successfully added the cartItems!"})
        }
    } catch (error) {
        res.status(500).json({message :error.message})
    }
    
})
app.post('/removeitem',async(req,res)=>{
    console.log(req.body);
    
    try {
        const removeUser = await User.findOne({email : req.body.email})
        if(removeUser){
            removeUser.cartItems=req.body.cartItems
            await removeUser.save()
            console.log(removeUser);
            res.status(200).json({message :"Successfully removed the cartItems!"})
            console.log("Successfully removed the cartItems!");
            
        }
    } catch (error) {
        res.status(500).json({message :error.message})
    }
})
app.get('/',(req,res)=>{
    res.send("server is connected!")
})
const PORT = process.env.PORT  || 3000
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}!`);
    
})