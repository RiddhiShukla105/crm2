import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../CSS/Login.css'

const Login = () => {
    const Api_Url=import.meta.env.VITE_API_URL

    const[email,setEmail]=useState()
    const[password,setPassword]=useState();

    const navigate=useNavigate()

    const handleLogin=async(e)=>{
        try{
            const res=await axios.post(`${Api_Url}/api/user/login`,{email,password})
            if(res.status==200||res.status==201){
                const token=res.data.token;
                localStorage.setItem("token",token)
                navigate('/dashboard')
            }
        }catch(error){
            console.log(error)
        }
    }
    
  return (
    <div className='login_container'>
      <h1 className='login_heading'>Login here</h1>
      <div className='login_form'>
        <div className='login_input'>
         <input type="email" name="email" placeholder='Enter your email' id="" value={email} onChange={(e)=>setEmail(e.target.value)} />
      </div>
        <div className='login_input'>
           <input type="password" name="password" placeholder='Enter your password' id="" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
     
      <input type="button" value="Login" onClick={handleLogin} className='bg-green-400 text-2xl font-bold  rounded login_btn' />
      </div>
    </div>
  )
}

export default Login
