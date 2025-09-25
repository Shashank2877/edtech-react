import React from 'react'
import { motion } from 'framer-motion'

export default function StatCard({ icon, value, label, delay = 0 }) {
  return (
    <motion.div 
      className="relative text-center rounded-xl border border-white/10 p-6 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 backdrop-blur-lg overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <motion.div
        className="text-5xl mb-3"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.2, rotate: [0, 5, -5, 0] }}
        transition={{ duration: 0.3 }}
      >
        {icon}
      </motion.div>
      <motion.div 
        className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400"
      >
        {value}
      </motion.div>
      <div className="text-sm text-gray-300 mt-1">{label}</div>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  )
}