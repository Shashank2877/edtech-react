import React, { useState, useEffect, useRef, useMemo } from 'react'
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import GlassCard from '../components/GlassCard'
import GlassSection from '../components/GlassSection'
import VideoBackground from '../components/VideoBackground'
import CourseRegistrationModal from '../components/CourseRegistrationModal'
import { sampleCourses } from './data'


// CourseCard component
const CourseCard = ({ course }) => (
  <GlassCard className="p-6 rounded-xl hover:scale-105 transition-transform duration-300">
    <div className="flex items-center gap-3 mb-4">
      <span className="text-3xl">{course.icon || '📚'}</span>
      <h3 className="text-xl font-bold text-white">{course.title}</h3>
    </div>
    <p className="text-gray-300 mb-4">{course.description}</p>
    <div className="flex items-center gap-4 mb-4">
      <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm">
        {course.level}
      </span>
      <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm">
        {course.duration}
      </span>
    </div>
    <div className="flex justify-center items-center">
      <motion.button
        className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-white"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
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
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [selectedCourseForRegistration, setSelectedCourseForRegistration] = useState(null);

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
    <div className="min-h-screen relative">
      {/* Video Background */}
      <div className="fixed inset-0 z-0">
        <VideoBackground />
        <div className="absolute inset-0 bg-[#080B1A]/40 pointer-events-none" />
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
                className="text-4xl md:text-6xl font-bold mb-4 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Future-Ready Coding Education
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                For Grades 1-12
              </motion.p>
            </motion.div>

            {/* Main Features */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <GlassCard className="p-6 rounded-xl hover:scale-105 transition-transform duration-300">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-white">Web Academy</h3>
                  <p className="text-gray-300 mb-4">Learn, Create, and Certify with our AI-Powered Learning Tools</p>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <p className="text-yellow-300 font-semibold mb-2">Coming soon</p>
                  </div>
                </motion.div>
              </GlassCard>

              <GlassCard className="p-6 rounded-xl hover:scale-105 transition-transform duration-300">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-white">Project-Based Learning</h3>
                  <p className="text-gray-300">
                    Students learn by building real projects, from simple websites to complex applications, ensuring practical skills.
                  </p>
                </motion.div>
              </GlassCard>
            </div>

            {/* AI Assistant Section */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <GlassCard className="p-8 rounded-xl inline-block">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img src="/startup-cert.png" alt="AI Saraswathi" className="w-full h-full object-cover" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">AI-Powered Assistance</h3>
                <p className="text-gray-300">
                  Our intelligent tutoring system provides personalized help and instant feedback to accelerate learning.
                </p>
              </GlassCard>
            </motion.div>
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
              className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600 mb-4"
              animate={{ 
                backgroundPosition: ["0%", "100%"],
                transition: { duration: 8, repeat: Infinity, repeatType: "reverse" }
              }}
            >
              Explore Our Courses
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300"
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
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25'
                    : 'border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white'
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
                  onClick={() => setSelected(course)}
                  role="button"
                  className="cursor-pointer"
                >
                  <CourseCard course={course} />
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
                    setSelectedCourseForRegistration(selected);
                    setShowRegistrationModal(true);
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

      {/* Course Registration Modal */}
      {showRegistrationModal && (
        <CourseRegistrationModal
          course={selectedCourseForRegistration}
          onClose={() => {
            setShowRegistrationModal(false);
            setSelectedCourseForRegistration(null);
          }}
        />
      )}
    </div>
  )
}