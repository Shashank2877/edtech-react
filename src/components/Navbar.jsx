
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const NavItem = ({ to, children, onClick, isHomePage, isMobile = false }) => {
  return (
    <NavLink 
      to={to} 
      onClick={onClick}
      aria-current={window.location.pathname === to ? 'page' : undefined}
      className={({ isActive }) => {
        if (isMobile) {
          // Mobile-specific styling with light theme
          return `block w-full text-left transition-all duration-300 focus:outline-none ${
            isActive 
              ? 'text-blue-600 font-semibold' 
              : 'text-gray-700 hover:text-blue-600'
          }`
        }
        
        // Desktop styling with consistent light theme
        return `relative px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white ${
          isActive 
            ? 'text-blue-600 font-semibold bg-blue-50/80 backdrop-blur-sm shadow-sm' 
            : 'text-gray-700 hover:text-blue-600 hover:bg-white/50 backdrop-blur-sm'
        }`
      }}
    >
      {children}
      {/* Only show the underline animation on desktop, not mobile */}
      {!isMobile && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
          initial={false}
          animate={{ scaleX: window.location.pathname === to ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          aria-hidden="true"
        />
      )}
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

  // Check if any modal is open by looking for modal backdrop elements
  useEffect(() => {
    const checkForModals = () => {
      // Look for modal backdrop - check for fixed positioning with backdrop
      const modals = document.querySelectorAll('.fixed.inset-0')
      let hasModal = false
      
      modals.forEach(element => {
        // Check if it has backdrop blur or z-50 (modal indicators)
        if (element.classList.contains('backdrop-blur-sm') || 
            element.classList.contains('z-50') ||
            element.style.backgroundColor?.includes('rgba(0, 0, 0')) {
          hasModal = true
        }
      })
      
      if (hasModal) {
        setVisible(false)
      } else if (!hasModal && isHomePage) {
        // On home page, always show navbar when no modal
        setVisible(true)
      }
    }

    // Check immediately and set up observer
    checkForModals()
    
    // Use MutationObserver to detect when modals are added/removed
    const observer = new MutationObserver(checkForModals)
    observer.observe(document.body, { 
      childList: true, 
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'style']
    })

    return () => observer.disconnect()
  }, [isHomePage])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Check if modal is open - if so, don't change visibility based on scroll
      const modals = document.querySelectorAll('.fixed.inset-0')
      let hasModal = false
      
      modals.forEach(element => {
        if (element.classList.contains('backdrop-blur-sm') || 
            element.classList.contains('z-50') ||
            element.style.backgroundColor?.includes('rgba(0, 0, 0')) {
          hasModal = true
        }
      })
      
      if (hasModal) {
        setVisible(false)
        return
      }

      // Only apply scroll-based hiding on non-home pages
      if (!isHomePage) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setVisible(false)
        } else {
          setVisible(true)
        }
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
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
          scrolled 
            ? 'backdrop-blur-md bg-white/95 border-b border-gray-200/50 shadow-lg' 
            : 'backdrop-blur-xl bg-white/90 border-b border-gray-200/30 shadow-sm'
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
                className="md:hidden p-3 rounded-xl backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:scale-105 active:scale-95 hover:bg-gray-100/50 text-gray-700 focus:bg-gray-100/70"
                style={{ 
                  minHeight: '48px', 
                  minWidth: '48px',
                  touchAction: 'manipulation'
                }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
                aria-expanded={mobileMenuOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={mobileMenuOpen ? "open" : "closed"}
                  className="w-7 h-7 flex flex-col justify-center items-center"
                >
                  <motion.span
                    className="block h-0.5 w-7 bg-current origin-center rounded-full"
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: 45, y: 3 }
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  <motion.span
                    className="block h-0.5 w-7 bg-current origin-center mt-1.5 rounded-full"
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 }
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  <motion.span
                    className="block h-0.5 w-7 bg-current origin-center mt-1.5 rounded-full"
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: -45, y: -6 }
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
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
                  className="text-2xl lg:text-3xl font-bold transition-all duration-500 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
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
                <NavItem to="/certificate" isHomePage={isHomePage}>CERTIFICATE</NavItem>
                <NavItem to="/school" isHomePage={isHomePage}>SCHOOL</NavItem>
                <NavItem to="/consultant" isHomePage={isHomePage}>CONSULTANT</NavItem>
                <NavItem to="/career" isHomePage={isHomePage}>CAREER</NavItem>
                <NavItem to="/contact" isHomePage={isHomePage}>CONTACT</NavItem>
              </div>
              
              <a 
                href="https://wa.me/+919241527429" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="ml-2 lg:ml-4 px-4 lg:px-6 py-3 lg:py-2.5 rounded-xl text-white font-bold text-sm transition-all duration-300 flex items-center gap-2 whitespace-nowrap hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-purple-500 hover:bg-purple-600 shadow-lg hover:shadow-xl focus:ring-purple-400"
                style={{ 
                  minWidth: '140px',
                  minHeight: '48px',
                  display: 'flex !important',
                  visibility: 'visible !important',
                  touchAction: 'manipulation'
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
              <div className="px-4 pb-4 pt-3 backdrop-blur-md transition-all duration-500 border-t bg-white/98 border-gray-200/50 text-gray-700">
                <div className="space-y-2">
                  {[
                    { to: '/', label: 'HOME' },
                    { to: '/about', label: 'ABOUT' },
                    { to: '/services', label: 'SERVICES' },
                    { to: '/courses', label: 'COURSES' },
                    { to: '/certificate', label: 'CERTIFICATE' },
                    { to: '/school', label: 'SCHOOL' },
                    { to: '/consultant', label: 'CONSULTANT' },
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
                        isMobile={true}
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
                        <span className="py-3 px-4 font-medium text-base" style={{ minHeight: '44px', touchAction: 'manipulation' }}>
                          {item.label}
                        </span>
                      </NavItem>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                    className="pt-1 mt-1 transition-all duration-500 border-t border-gray-200/50"
                  >
                    <a 
                      href="https://wa.me/+919241527429" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl text-white font-semibold shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-98 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-purple-500 hover:bg-purple-600 border border-purple-400/30 focus:ring-purple-400"
                      style={{ 
                        minHeight: '56px',
                        touchAction: 'manipulation'
                      }}
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