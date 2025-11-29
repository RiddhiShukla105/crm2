import React from 'react'
import '../CSS/Dashboard.css'
import { NavLink, useNavigate } from 'react-router-dom'
function Dashboard({children}) {
    const navigate=useNavigate()
  const routes=[
    {
      title:"Home",
      path:'/'
    },
    {
      title:"About",
      path:'/about'
    },
    {
      title:"Products",
      path:'/products'
    }
  ]
  const handleLogout=()=>{
    localStorage.removeItem("token")
    navigate('/login')
  }
  return (
    <div className='dashboard-outer'>
        <div className='sidebar'>
          <div className="logo">Dashboard</div>

          {routes.map((item)=>{
            return(
            <NavLink key={item.path} className="sidebar-item" to={item.path}>{item.title}</NavLink>
         ) })}
        </div>
      <div className="main-content">
        <div className="header">
            <button className='bg-red-600 px-3 py-2 text-white pointer' onClick={handleLogout}>Logout</button>
        </div>
        <div className="content">
          {children}
        </div>
      </div>
  
    </div>
  )
}

export default Dashboard