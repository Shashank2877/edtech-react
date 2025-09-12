import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavItem = ({to, children})=>(
  <NavLink to={to} className={({isActive})=> isActive ? 'text-indigo-600 font-semibold' : 'text-gray-700'}>
    {children}
  </NavLink>
)

export default function Navbar(){
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-indigo-600">EdTech</Link>
        <nav className="space-x-6 hidden md:block">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/courses">Courses</NavItem>
          <NavItem to="/blogs">Blogs</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>
      </div>
    </header>
  )
}
