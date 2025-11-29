import jwt from 'jsonwebtoken'
import User from '../Models/userModel.js'

const createUser=async(req,res)=>{
    try{
        // const {name,email,password,role}=req.body;
        // // const user=User.create(req.body);
        const user=new User(req.body)
        await user.save()
        res.status(200).json({success:true,message:"User created successfully!!",user})
        
    }catch(error){
        res.status(500).json({success:false,message:"Error Creating User",error})
    }
}

const userLogin=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email:email})
        if(!user) return res.status(404).json({success:false,message:"User not exits"})
        if(user.password!=password) return res.status(500).json({success:false,message:"Invalid Credenatials"})

            const token=jwt.sign({userid:user._id,role:user.role},process.env.SECRET,{expire:'7d'})

        return res.status(200).json({sucess:true,message:"Login success",user,token})

    }catch(error){
        res.status(500).json({success:false,message:"Error Login User",error})
    }
}

export default {createUser,userLogin}

// {
//     "name":"Admin",
//     "email":"admin@gmail.com",
//     "password":"1234",
//     "role":"admin",
//     "phoneNumber":"677893004",
//     "conpmayName":"Digicoder",
//     "CompanyType":"IT",
//     "state":"UP",
//     "status":"Active",
//     "addedBy":"69257f3b5669af8532e83b4a"
// }
