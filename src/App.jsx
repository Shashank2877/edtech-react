import React, { useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Courses from './pages/Courses'
import Career from './pages/Career'
import Navbar from './components/Navbar'
import DynamicGeometricBackground from './components/DynamicGeometricBackground'

export default function App(){
  const location = useLocation()
  const navigate = useNavigate()

  // Handle IIS redirect fallback
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectPath = urlParams.get('redirect');
    
    if (redirectPath) {
      // Remove the redirect parameter and navigate to the intended path
      const newUrl = window.location.pathname + window.location.hash;
      window.history.replaceState({}, '', newUrl);
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100 relative overflow-hidden">
      <DynamicGeometricBackground />
      
      <Navbar />
      
      <main id="main-content" className="flex-1 relative z-10" role="main">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/services" element={<Services/>} />
              <Route path="/courses" element={<Courses/>} />
              <Route path="/career" element={<Career/>} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}
