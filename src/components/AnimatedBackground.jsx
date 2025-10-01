import React from 'react'
import { motion } from 'framer-motion'

const AnimatedBackground = () => {
  const particles = Array.from({ length: 6 }, (_, i) => i)
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-20"
          style={{
            background: i % 2 === 0 
              ? 'linear-gradient(135deg, #3B82F6, #1D4ED8)'
              : 'linear-gradient(135deg, #EC4899, #BE185D)',
            width: Math.random() * 300 + 100,
            height: Math.random() * 300 + 100,
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
        />
      ))}
      
      {/* Floating geometric shapes */}
      {Array.from({ length: 4 }, (_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute opacity-10"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: 0,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: 360,
          }}
          transition={{
            duration: Math.random() * 25 + 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
        >
          {i % 2 === 0 ? (
            <div className="w-16 h-16 border-4 border-blue-500 rotate-45" />
          ) : (
            <div className="w-12 h-12 bg-pink-500 rounded-full" />
          )}
        </motion.div>
      ))}
    </div>
  )
}

export default AnimatedBackground