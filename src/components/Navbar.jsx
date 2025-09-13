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
  const [theme, setTheme] = useState('light')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = stored || (prefersDark ? 'dark' : 'light')
    setTheme(initial)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('theme', theme)
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
          <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">EdTech</Link>
        </div>
        <nav className="space-x-6 hidden md:block">
          <NavItem to="/" onClick={(e)=>{
            if (window.location.pathname === '/'){
              e.preventDefault();
              document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          }}>Home</NavItem>
          <NavItem to="/" onClick={(e)=>{
            if (window.location.pathname === '/'){
              e.preventDefault();
              document.getElementById('features')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          }}>Features</NavItem>
          <NavItem to="/" onClick={(e)=>{
            if (window.location.pathname === '/'){
              e.preventDefault();
              document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          }}>Testimonials</NavItem>
          <NavItem to="/blogs">Blogs</NavItem>
          <NavItem to="/courses">Courses</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>
        <button
          aria-label="Toggle dark mode"
          className="ml-4 relative inline-flex items-center h-9 w-16 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 theme-transition"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {/* Track icons */}
          <span className="absolute left-1 text-yellow-400">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.79 1.8-1.79zM1 13h3v-2H1v2zm10 10h2v-3h-2v3zM4.84 19.24l1.79 1.8 1.79-1.8-1.79-1.79-1.79 1.79zM20 11v2h3v-2h-3zm-2.76-6.16l1.8-1.79-1.42-1.42-1.79 1.8 1.41 1.41zM11 1h2v3h-2V1zm7.36 18.36l1.79 1.79 1.42-1.42-1.8-1.79-1.41 1.42z" />
            </svg>
          </span>
          <span className="absolute right-1 text-indigo-300">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.64 13a9 9 0 11-10.63-10.6 7 7 0 1010.63 10.6z" />
            </svg>
          </span>
          {/* Thumb */}
          <span
            className={`absolute inline-block h-7 w-7 rounded-full bg-white dark:bg-gray-700 shadow transform transition-all duration-200 ${theme === 'dark' ? 'translate-x-8' : 'translate-x-1'}`}
          />
        </button>
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
              }}>Home</NavItem>
            </div>
            <div className="block">
              <NavItem to="/about" onClick={() => setMobileMenuOpen(false)}>About</NavItem>
            </div>
            <div className="block">
              <NavItem to="/courses" onClick={() => setMobileMenuOpen(false)}>Courses</NavItem>
            </div>
            <div className="block">
              <NavItem to="/blogs" onClick={() => setMobileMenuOpen(false)}>Blogs</NavItem>
            </div>
            <div className="block">
              <NavItem to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</NavItem>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
