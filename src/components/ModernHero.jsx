import React from 'react'
import { motion } from 'framer-motion'

const ModernHero = ({ 
  title = "Start, switch, or advance your career",
  subtitle = "Grow with 10,000+ courses from top organizations.",
  primaryButtonText = "Join For Free",
  secondaryButtonText = "Try EdTech for Business",
  onPrimaryClick,
  onSecondaryClick
}) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-indigo-50 overflow-hidden"
         style={{ 
           background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 25%, #f1f5f9 50%, #e0e7ff 75%, #f0f4ff 100%)'
         }}>
      {/* Enhanced floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ 
            filter: 'drop-shadow(0 10px 20px rgba(99, 102, 241, 0.2))',
            transformStyle: 'preserve-3d'
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full opacity-30"
          animate={{
            y: [0, 20, 0],
            x: [0, 10, 0],
            rotateY: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ 
            filter: 'drop-shadow(0 8px 16px rgba(244, 114, 182, 0.2))',
            transformStyle: 'preserve-3d'
          }}
        />
        <motion.div
          className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 transform rotate-45 opacity-25 rounded-lg"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.2, 1],
            rotateX: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ 
            filter: 'drop-shadow(0 12px 24px rgba(34, 197, 94, 0.2))',
            transformStyle: 'preserve-3d'
          }}
        />
        
        {/* Additional 3D geometric shapes */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-20 h-20 opacity-15"
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 180, 360],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-purple-600"
               style={{ 
                 clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                 filter: 'drop-shadow(0 8px 16px rgba(99, 102, 241, 0.15))'
               }}>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 right-10 w-18 h-18 opacity-20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            rotateZ: [0, 180, 360],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-teal-500"
               style={{ 
                 clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                 filter: 'drop-shadow(0 6px 12px rgba(6, 182, 212, 0.15))'
               }}>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 flex items-center justify-between max-w-7xl">
        {/* Left content */}
        <div className="flex-1 max-w-2xl">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              onClick={onPrimaryClick}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {primaryButtonText}
            </motion.button>
            
            <motion.button
              onClick={onSecondaryClick}
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-lg text-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {secondaryButtonText}
            </motion.button>
          </motion.div>
        </div>

        {/* Right content - 3D Geometric Shapes */}
        <motion.div
          className="flex-1 hidden lg:flex justify-center items-center relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="relative w-96 h-96">
            {/* Central geometric shape */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                rotateY: [0, 360],
                rotateX: [0, 15, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ 
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              <div className="w-48 h-48 bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 transform rotate-45 rounded-3xl shadow-2xl opacity-90"
                   style={{ 
                     boxShadow: '0 25px 50px -12px rgba(139, 92, 246, 0.4)',
                     filter: 'drop-shadow(0 0 30px rgba(139, 92, 246, 0.3))'
                   }}>
              </div>
            </motion.div>

            {/* Floating triangles */}
            <motion.div
              className="absolute top-10 right-10 w-16 h-16"
              animate={{
                rotate: [0, 120, 240, 360],
                y: [0, -15, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500 transform rotate-45"
                   style={{ 
                     clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                     filter: 'drop-shadow(0 10px 20px rgba(6, 182, 212, 0.3))'
                   }}>
              </div>
            </motion.div>

            {/* Floating hexagon */}
            <motion.div
              className="absolute bottom-16 left-8 w-20 h-20"
              animate={{
                rotateZ: [0, 180, 360],
                rotateY: [0, 90, 180, 270, 360],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-teal-500 opacity-80"
                   style={{ 
                     clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                     filter: 'drop-shadow(0 15px 25px rgba(16, 185, 129, 0.3))'
                   }}>
              </div>
            </motion.div>

            {/* Floating circle with inner geometry */}
            <motion.div
              className="absolute top-20 left-16 w-12 h-12"
              animate={{
                rotate: [0, 360],
                y: [0, -20, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-full h-full bg-gradient-to-r from-rose-400 to-pink-500 rounded-full relative overflow-hidden"
                   style={{ 
                     filter: 'drop-shadow(0 8px 16px rgba(244, 114, 182, 0.3))'
                   }}>
                <div className="absolute inset-2 border-2 border-white rounded-full opacity-70"></div>
                <div className="absolute inset-4 bg-white rounded-full opacity-60"></div>
              </div>
            </motion.div>

            {/* Floating diamond */}
            <motion.div
              className="absolute bottom-8 right-20 w-14 h-14"
              animate={{
                rotateX: [0, 180, 360],
                rotateZ: [0, 90, 180, 270, 360],
                y: [0, 15, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="w-full h-full bg-gradient-to-br from-violet-400 to-purple-600 transform rotate-45 rounded-lg"
                   style={{ 
                     filter: 'drop-shadow(0 12px 20px rgba(139, 92, 246, 0.4))'
                   }}>
              </div>
            </motion.div>

            {/* Orbital rings */}
            <motion.div
              className="absolute inset-0 border-2 border-indigo-300 rounded-full opacity-30"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute inset-8 border border-purple-300 rounded-full opacity-20"
              animate={{
                rotate: [360, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* Floating particles */}
            <motion.div
              className="absolute top-1/3 right-1/4 w-3 h-3 bg-yellow-400 rounded-full"
              animate={{
                y: [0, -30, 0],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-cyan-400 rounded-full"
              animate={{
                x: [0, 20, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ModernHero