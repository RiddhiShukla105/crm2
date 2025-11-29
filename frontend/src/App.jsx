import React from 'react'
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom'
import Login from './Pages/Login'
import MainPage from './Pages/MainPAge'
import { useState } from 'react'
import { useEffect } from 'react'
import Details from './Pages/Details'


const App = () => {
  const token=localStorage.getItem('token')
const[auth,setAuth]=useState(false)
useEffect(()=>{
  if(token){
    setAuth(true)
  }
},[])
  return (
    <div>
       <Routes>
        <Route path='/' element=<Login/>/>
        {auth &&(
          <Route path='/dashboard' element=<MainPage/>/>
        )}
        <Route path='/detail' element=<Details/>/>
       </Routes>
      
    </div>
  )
}

export default App
