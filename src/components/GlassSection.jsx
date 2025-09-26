import React from 'react'
import { motion } from 'framer-motion'

export default function GlassSection({ children, className = "" }) {
  return (
    <motion.div
      className={`relative group rounded-xl border border-[#2A2F52]/50
        bg-[#0F1333]/60 backdrop-blur-sm shadow-lg 
        hover:border-[#2A2F52]
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
        className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#2A2F52]/5 
        to-[#B4A5FF]/5 opacity-0 group-hover:opacity-100 transition-opacity 
        duration-300 pointer-events-none" 
      />
    </motion.div>
  )
}