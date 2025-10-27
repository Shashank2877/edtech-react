import React, { useState, useEffect, useRef, useMemo } from 'react'
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import GlassCard from '../components/GlassCard'
import GlassSection from '../components/GlassSection'
import CourseRegistrationModal from '../components/CourseRegistrationModal'
import CourseDetailsModal from '../components/CourseDetailsModal'
import Footer from '../components/Footer'
import { sampleCourses } from './data'


// CourseCard component
const CourseCard = ({ course, onViewDetails }) => (
  <GlassCard className="p-6 rounded-xl hover:scale-105 transition-transform duration-300">
    <div className="flex items-center gap-3 mb-4">
      <span className="text-3xl">{course.icon || ''}</span>
      <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
    </div>
    <p className="text-gray-700 mb-4">{course.description}</p>
    <div className="flex items-center gap-4 mb-4">
      <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-700 text-sm">
        {course.level}
      </span>
      <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-700 text-sm">
        {course.duration}
      </span>
    </div>
    <div className="flex justify-center items-center">
      <motion.button
        className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onViewDetails(course)}
      >
        View Details
      </motion.button>
    </div>
  </GlassCard>
)

export default function Courses() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [level, setLevel] = useState('All');
  const [selected, setSelected] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showNotDevelopedModal, setShowNotDevelopedModal] = useState(false);

  // Handle View Details button click - shows course details modal
  const handleViewDetails = (course) => {
    setSelectedCourse(course);
    setShowDetailsModal(true);
  };

  // Handle Enroll Now button click from details modal - shows registration modal
  const handleEnrollNow = () => {
    setShowDetailsModal(false); // Close details modal
    setShowRegistrationModal(true); // Open registration modal
  };

  // Handle close details modal
  const handleCloseDetailsModal = () => {
    setShowDetailsModal(false);
    setSelectedCourse(null);
  };

  // Handle close registration modal
  const handleCloseRegistrationModal = () => {
    setShowRegistrationModal(false);
    setSelectedCourse(null);
  };

  // Handle mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced']
  const levelIcons = {
    All: '🎯',
    Beginner: '🌱',
    Intermediate: '⚡',
    Advanced: '🚀'
  }

  const filtered = useMemo(() => {
    if (level === 'All') return sampleCourses
    return sampleCourses.filter(c => c.level === level)
  }, [level])

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-slate-50 via-white to-indigo-50 overflow-hidden"
         style={{ 
           background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 25%, #f1f5f9 50%, #e0e7ff 75%, #f0f4ff 100%)'
         }}>
      {/* Floating geometric shapes background */}
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
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 transform rotate-45 opacity-25"
          animate={{
            rotate: [45, 225, 405],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ 
            filter: 'drop-shadow(0 6px 12px rgba(34, 197, 94, 0.2))'
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20"
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ 
            filter: 'drop-shadow(0 8px 16px rgba(168, 85, 247, 0.2))'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.div 
          className="relative z-10 pt-24 pb-12 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <GlassSection className="max-w-7xl mx-auto rounded-2xl p-8">
            <motion.div
              className="text-center mb-12"
              style={{
                transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
              }}
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Future-Ready Coding Education
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-700 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                For Grades 1-12
              </motion.p>
            </motion.div>

            {/* Main Features */}
            <div className="space-y-8 mb-12">
              {/* Web Academy Section */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <GlassCard className="p-8 rounded-xl inline-block">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Web Academy</h3>
                  <p className="text-gray-700 mb-4">Learn, Create, and Certify with our AI-Powered Learning Tools</p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="text-yellow-600 font-semibold mb-2">Coming soon</p>
                  </div>
                </GlassCard>
              </motion.div>

              {/* Project-Based Learning Section */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <GlassCard className="p-8 rounded-xl inline-block">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Project-Based Learning</h3>
                  <p className="text-gray-700">
                    Students learn by building real projects, from simple websites to complex applications, ensuring practical skills.
                  </p>
                </GlassCard>
              </motion.div>

              {/* AI Assistant Section */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <GlassCard className="p-8 rounded-xl inline-block">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">AI-Powered Assistance</h3>
                  <p className="text-gray-700">
                    Our intelligent tutoring system provides personalized help and instant feedback to accelerate learning.
                  </p>
                </GlassCard>
              </motion.div>
            </div>
          </GlassSection>
        </motion.div>

        {/* Courses Section */}
        <section ref={ref} className="max-w-7xl mx-auto px-4 pb-16">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4"
              animate={{ 
                backgroundPosition: ["0%", "100%"],
                transition: { duration: 8, repeat: Infinity, repeatType: "reverse" }
              }}
            >
              Explore Our Courses
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Transform your skills with our interactive learning experiences
            </motion.p>
          </motion.div>

          {/* Filters */}
          <motion.div 
            className="mb-12 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {levels.map((l, i) => (
              <motion.button
                key={l}
                onClick={() => setLevel(l)}
                className={`px-6 py-3 rounded-xl backdrop-blur-lg transition-all duration-300 flex items-center gap-2 ${
                  level === l
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : 'border border-gray-300 bg-white/70 hover:bg-white/90 text-gray-700 hover:text-gray-900'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="text-xl">{levelIcons[l]}</span>
                {l}
              </motion.button>
            ))}
          </motion.div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((course, i) => (
                <motion.div
                  key={course.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, delay: i * 0.1 }}
                >
                  <CourseCard 
                    course={course} 
                    onViewDetails={handleViewDetails}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>


        </section>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setSelected(null)} />
            <motion.div
              initial={{ scale: 0.95, y: 10, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 w-full max-w-lg rounded-xl border border-white/10 bg-black/80 backdrop-blur-lg p-6 shadow-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{selected.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-2 text-sm">
                    <span className="px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300">{selected.level}</span>
                    <span className="px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300">{selected.duration}</span>
                    <span className="px-2.5 py-1 rounded-full bg-green-500/20 text-green-300">Certificate</span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelected(null)} 
                  aria-label="Close" 
                  className="h-9 w-9 rounded-md border border-white/10 hover:bg-white/10 text-white flex items-center justify-center"
                >
                  ×
                </button>
              </div>
              <p className="mt-4 text-gray-300 leading-relaxed">{selected.description}</p>
              {selected.image && (
                <img src={selected.image} alt="" className="mt-4 h-40 w-full object-cover rounded-lg" />
              )}
              <div className="mt-6 flex justify-end gap-3">
                <button 
                  onClick={() => setSelected(null)} 
                  className="px-4 py-2 rounded-md border border-white/20 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
                >
                  Close
                </button>
                <motion.button
                  className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setShowNotDevelopedModal(true);
                    setSelected(null);
                  }}
                >
                  Enroll Now
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Course Details Modal */}
      <CourseDetailsModal
        course={selectedCourse}
        isOpen={showDetailsModal}
        onClose={handleCloseDetailsModal}
        onEnrollNow={handleEnrollNow}
      />

      {/* Course Registration Modal */}
      {showRegistrationModal && (
        <CourseRegistrationModal
          course={selectedCourse}
          onClose={handleCloseRegistrationModal}
        />
      )}

      {/* Not Developed Yet Modal */}
      <AnimatePresence>
        {showNotDevelopedModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowNotDevelopedModal(false)}
          >
            <motion.div
              className="bg-gray-900 rounded-xl p-6 w-full max-w-md border border-gray-700"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">Course Enrollment</h3>
                <button
                  onClick={() => setShowNotDevelopedModal(false)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="text-center space-y-4">
                <div className="text-6xl mb-4">🚧</div>
                <p className="text-lg text-gray-300">
                  This feature is not developed yet.
                </p>
                <p className="text-sm text-gray-400">
                  Please check back later for course enrollment functionality.
                </p>
                
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-600 mt-4">
                  <p className="text-sm text-gray-400 mb-2">For inquiries, contact us:</p>
                  <p className="text-lg text-[#B4A5FF] font-mono">
                    Phone: +91 92415 27429
                  </p>
                </div>
                
                <button
                  onClick={() => setShowNotDevelopedModal(false)}
                  className="w-full px-4 py-2 bg-[#B4A5FF] text-gray-900 font-semibold rounded-lg hover:bg-indigo-400 transition-colors"
                >
                  Got it
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  )
}