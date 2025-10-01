
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const NavItem = ({ to, children, onClick, isHomePage }) => {
  return (
    <NavLink 
      to={to} 
      onClick={onClick} 
      className={({ isActive }) => {
        if (isHomePage) {
          return `relative px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
            isActive 
              ? 'text-indigo-600 font-semibold bg-indigo-50/80 backdrop-blur-sm shadow-sm' 
              : 'text-gray-700 hover:text-indigo-600 hover:bg-white/50 backdrop-blur-sm'
          }`
        } else {
          return `relative px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
            isActive 
              ? 'text-indigo-400 font-semibold bg-indigo-900/50 backdrop-blur-sm shadow-sm' 
              : 'text-gray-300 hover:text-indigo-400 hover:bg-gray-800/50 backdrop-blur-sm'
          }`
        }
      }}
      aria-current={window.location.pathname === to ? 'page' : undefined}
    >
      {children}
      <motion.div
        className={`absolute bottom-0 left-0 right-0 h-0.5 ${isHomePage ? 'bg-indigo-600' : 'bg-indigo-400'}`}
        initial={false}
        animate={{ scaleX: window.location.pathname === to ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        aria-hidden="true"
      />
    </NavLink>
  )
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const location = useLocation()
  
  // Detect if current page is home
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 50)
      
      // Different scroll behavior for home vs other pages
      if (!isHomePage) {
        // Other pages: hide navbar on scroll down
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setVisible(false)
        } else {
          setVisible(true)
        }
      } else {
        // Home page: always keep navbar visible
        setVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, isHomePage])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const root = document.documentElement
    root.classList.add('dark')
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('header')) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [mobileMenuOpen])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[9999] px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium"
      >
        Skip to main content
      </a>
      
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isHomePage 
            ? (scrolled 
                ? 'backdrop-blur-md bg-white/95 border-b border-gray-200/50 shadow-lg' 
                : 'backdrop-blur-xl bg-white/90 border-b border-gray-200/30 shadow-sm')
            : (scrolled 
                ? 'backdrop-blur-md bg-gray-900/95 border-b border-gray-700/50 shadow-lg' 
                : 'backdrop-blur-xl bg-gray-900/90 border-b border-gray-700/30 shadow-sm')
        }`}
        initial={{ y: 0 }}
        animate={{ 
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        role="banner"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20 overflow-visible">
            <div className="flex items-center gap-4 flex-shrink-0">
              <motion.button
                className={`md:hidden p-2 rounded-lg backdrop-blur-sm transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  isHomePage 
                    ? 'hover:bg-gray-100/50 text-gray-700' 
                    : 'hover:bg-gray-800/50 text-gray-300'
                }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
                aria-expanded={mobileMenuOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={mobileMenuOpen ? "open" : "closed"}
                  className="w-6 h-6 flex flex-col justify-center items-center"
                >
                  <motion.span
                    className="block h-0.5 w-6 bg-current origin-center"
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: 45, y: 2 }
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="block h-0.5 w-6 bg-current origin-center mt-1"
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 }
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="block h-0.5 w-6 bg-current origin-center mt-1"
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: -45, y: -6 }
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.button>

              <Link to="/" className="flex items-center gap-3 group">
                <motion.img 
                  src="/download.png" 
                  alt="NammaWeb Logo" 
                  width="56" 
                  height="56" 
                  className="rounded-lg shadow-sm group-hover:shadow-md transition-shadow"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span 
                  className={`text-2xl lg:text-3xl font-bold transition-all duration-500 ${
                    isHomePage 
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'
                      : 'bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent'
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  NAMMA WEB
                </motion.span>
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 flex-shrink-0 flex-wrap">
              <div className="flex items-center space-x-1 lg:space-x-2">
                <NavItem to="/" isHomePage={isHomePage}>HOME</NavItem>
                <NavItem to="/about" isHomePage={isHomePage}>ABOUT</NavItem>
                <NavItem to="/services" isHomePage={isHomePage}>SERVICES</NavItem>
                <NavItem to="/courses" isHomePage={isHomePage}>COURSES</NavItem>
                <NavItem to="/career" isHomePage={isHomePage}>CAREER</NavItem>
                <NavItem to="/contact" isHomePage={isHomePage}>CONTACT</NavItem>
              </div>
              
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`ml-4 px-6 py-2.5 rounded-xl text-white font-bold text-sm transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                  isHomePage 
                    ? 'bg-purple-500 hover:bg-purple-600 shadow-lg hover:shadow-xl' 
                    : 'bg-indigo-600 hover:bg-indigo-700 shadow-lg hover:shadow-xl'
                }`}
                style={{ 
                  minWidth: '140px',
                  display: 'flex !important',
                  visibility: 'visible !important'
                }}
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                </svg>
                GET A QUOTE
              </a>
            </nav>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className={`px-4 pb-4 pt-2 backdrop-blur-md transition-all duration-500 border-t ${
                isHomePage 
                  ? 'bg-white/98 border-gray-200/50 text-gray-700' 
                  : 'bg-gray-900/98 border-gray-700/50 text-gray-300'
              }`}>
                <div className="-space-y-1">
                  {[
                    { to: '/', label: 'HOME' },
                    { to: '/about', label: 'ABOUT' },
                    { to: '/services', label: 'SERVICES' },
                    { to: '/courses', label: 'COURSES' },
                    { to: '/career', label: 'CAREER' },
                    { to: '/contact', label: 'CONTACT' }
                  ].map((item, index) => (
                    <motion.div
                      key={item.to}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <NavItem 
                        to={item.to} 
                        isHomePage={isHomePage}
                        onClick={() => {
                          if (window.location.pathname === item.to && item.to === '/') {
                            document.getElementById('hero')?.scrollIntoView({ 
                              behavior: 'smooth', 
                              block: 'start' 
                            })
                          }
                          setMobileMenuOpen(false)
                        }}
                      >
                        <span className="block w-full text-left py-0.5 px-3 rounded-lg">
                          {item.label}
                        </span>
                      </NavItem>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                    className={`pt-3 mt-3 transition-all duration-500 border-t ${
                      isHomePage ? 'border-gray-200/50' : 'border-gray-700/50'
                    }`}
                  >
                    <a 
                      href="https://wa.me/1234567890" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-white font-semibold shadow-lg transition-all duration-300 ${
                        isHomePage 
                          ? 'bg-purple-500 hover:bg-purple-600 border border-purple-400/30' 
                          : 'bg-indigo-600 hover:bg-indigo-700 border border-indigo-400/30'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                      </svg>
                      GET A QUOTE
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}