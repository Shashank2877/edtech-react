import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Career from './pages/Career'

export default function App(){
  const location = useLocation()
  return (
    <div className="min-h-screen flex flex-col bg-transparent text-gray-900 dark:text-gray-100 theme-transition relative">
      {/* Global Background Video Layer */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <video
          className="h-full w-full object-cover"
          src="/5453622-uhd_3840_2160_24fps.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Subtle dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/50" />
      </div>
      <Navbar />
      <main className="flex-1">
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
              <Route path="/career" element={<Career/>} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
