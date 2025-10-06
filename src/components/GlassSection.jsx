import React from 'react'
import { motion } from 'framer-motion'

export default function GlassSection({ children, className = "" }) {
  return (
    <motion.div
      className={`relative group rounded-xl border border-gray-200/60
        bg-white/70 backdrop-blur-sm shadow-lg 
        hover:border-gray-300/80
        transition-all duration-300 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative z-10">
        {children}
      </div>
      <div 
        className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 
        to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity 
        duration-300 pointer-events-none" 
      />
    </motion.div>
  )
}