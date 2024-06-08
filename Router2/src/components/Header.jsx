import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Header() {
  return (
    <>
    <div className='w-100 h-30 flex items-center justify-between'>
        <div className='w-2/6 h-auto p-2 text-center flex'>
            <div>KICK</div>
        </div>
        <div className='w-3/6 h-auto p-2 text-center flex justify-around'>
            <NavLink to='/home' className={({isActive})=>{
              `text-lg ${isActive ? "text-orange-800":"text-gray-500"}`
            }}>Home</NavLink>
            <NavLink to='/Courses' className={({isActive})=>{
              `text-lg ${isActive ? "text-orange-800":"text-gray-500"}`
            }}>Courses</NavLink>
            <NavLink  to='/About'className={({isActive})=>{
              `text-lg ${isActive ? "text-orange-800":"text-gray-500"}`
            }}>About</NavLink>
            <NavLink to='/Contact' className={({isActive})=>{
              `text-lg ${isActive ? "text-orange-800":"text-gray-500"}`
            }}>Contact</NavLink>
        </div>
        <div className='w-1/6 h-auto  p-2 flex justify-end'>
            <Link to='/Log'> <button className='w-20 h-auto boder rounded-md bg-blue-600 p-1 text-center'>Log in</button> </ Link>
        </div>
    </div>

    
    
    </>
  )
}

export default Header
