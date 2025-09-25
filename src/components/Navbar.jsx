import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavItem = ({to, children, onClick})=>{
  return (
    <NavLink to={to} onClick={onClick} className={({isActive})=> isActive ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : 'text-gray-700 dark:text-gray-300'}>
      {children}
    </NavLink>
  )
}

export default function Navbar(){
  const [theme, setTheme] = useState('dark')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setTheme('dark')
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.classList.add('dark')
  }, [theme])

  return (
    <header className="backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 dark:supports-[backdrop-filter]:bg-gray-900/60 dark:bg-gray-900/80 dark:text-gray-100 shadow-md sticky top-0 z-50 theme-transition">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Mobile menu button - top-left */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <Link to="/" className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-teal-400">
              <path d="M8 20L14 14L20 20L14 26L8 20Z" fill="currentColor" />
              <path d="M14 14L20 8L26 14L20 20L14 14Z" fill="currentColor" />
              <path d="M20 20L26 14L32 20L26 26L20 20Z" fill="currentColor" />
              <path d="M14 26L20 20L26 26L20 32L14 26Z" fill="currentColor" />
            </svg>
            <span className="text-xl font-bold text-blue-500">NAMMA WEB</span>
          </Link>
        </div>
        <nav className="space-x-6 hidden md:block">
          <NavItem to="/">HOME</NavItem>
          <NavItem to="/about">ABOUT</NavItem>
          <NavItem to="/services">SERVICES</NavItem>
          <NavItem to="/career">CAREER</NavItem>
          <NavItem to="/contact">CONTACT</NavItem>
          <a href="https://wa.me/" target="_blank" rel="noreferrer" className="inline-block px-3 py-1.5 rounded-md bg-green-600 text-white font-semibold align-middle">GET A QUOTE</a>
        </nav>
        {/* Dark-only mode; toggle removed */}
      </div>

      {/* Mobile dropdown menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="mx-4 mb-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg backdrop-blur-sm">
          <div className="px-4 py-4 space-y-3">
            <div className="block">
              <NavItem to="/" onClick={(e)=>{
                if (window.location.pathname === '/'){
                  e.preventDefault();
                  document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
                setMobileMenuOpen(false)
              }}>HOME</NavItem>
            </div>
            <div className="block">
              <NavItem to="/about" onClick={() => setMobileMenuOpen(false)}>ABOUT</NavItem>
            </div>
            <div className="block">
              <NavItem to="/services" onClick={() => setMobileMenuOpen(false)}>SERVICES</NavItem>
            </div>
            <div className="block">
              <NavItem to="/career" onClick={() => setMobileMenuOpen(false)}>CAREER</NavItem>
            </div>
            <div className="block">
              <NavItem to="/contact" onClick={() => setMobileMenuOpen(false)}>CONTACT</NavItem>
            </div>
            <div className="block">
              <a href="https://wa.me/" target="_blank" rel="noreferrer" className="inline-block w-full text-center px-4 py-2 rounded-md bg-green-600 text-white font-semibold" onClick={()=> setMobileMenuOpen(false)}>GET A QUOTE</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
