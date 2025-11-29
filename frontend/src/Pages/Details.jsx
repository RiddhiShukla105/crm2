import React from 'react'
import '../CSS/Details.css'
import { useState } from 'react'
import axios from 'axios'

const Details = () => {
    const [data,setData]=useState()
    axios.get("")
    .then((res)=>setData(res.data)
    .catch((error)=>{
        console.log(error)
    })
)
  return (
    <div className='details_container'>
    <div className='details_profile'>Profile of RAM</div>
    <div className='details_card'>
        <div className='details_heading'>Details</div>
        <div className='details'>this is details</div>
        <div className='details_heading'>Details</div>
        <div className='details'>this is details</div>
        
    </div>
    </div>
  )
}

export default Details
