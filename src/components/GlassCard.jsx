import React from 'react'
import { motion } from 'framer-motion'

export default function GlassCard({ 
  children, 
  icon, 
  title, 
  className = "", 
  delay = 0,
  showGradientBar = true
}) {
  return (
    <motion.div
      className={`p-6 rounded-xl border border-white/10 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 backdrop-blur-lg group hover:border-white/20 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      {icon && (
        <motion.div 
          className="text-3xl mb-3"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
      )}
      {title && (
        <h3 className="text-xl font-semibold mb-2 text-indigo-400">{title}</h3>
      )}
      {children}
      {showGradientBar && (
        <motion.div
          className="w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 mt-4 group-hover:w-full transition-all duration-300"
        />
      )}
    </motion.div>
  )
}