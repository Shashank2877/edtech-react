import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function CourseRegistrationModal({ course, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    highestQualification: '',
    selectedCourse: course?.title || '',
    selectedMode: '',
  })

  // Update the selected course when the course prop changes
  useEffect(() => {
    if (course?.title) {
      setFormData(prev => ({
        ...prev,
        selectedCourse: course.title
      }))
    }
  }, [course])

  const qualifications = [
    'High School',
    'Diploma',
    'BE',
    'B.Tech',
    'BCA',
    'BCOM',
    'BA',
    'BSc',
    'MS',
    'M.Tech',
    'MCA',
    'MBA',
    'MA',
    'MSc',
    'PhD',
    'Other'
  ]

  const modes = [
    'Online',
    'Offline',
    'Hybrid (Online + Offline)',
    'Weekend Classes',
    'Evening Classes',
    'Self-Paced Online'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // For now, just show an alert with the form data
    alert('Registration submitted! (This is just UI - no backend integration yet)')
    console.log('Form Data:', formData)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <motion.div
        className="relative bg-gray-900 border border-gray-700 rounded-xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 50 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Close Button - Top Right */}
        <motion.button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white text-xl transition-all duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ×
        </motion.button>

        {/* Header */}
        <div className="text-center mb-6">
          <motion.div 
            className="flex justify-center mb-3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <img src="/download.png" alt="Company Logo" width="40" height="40" />
          </motion.div>
          <motion.h2 
            className="text-2xl font-semibold text-white mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            Course Registration
          </motion.h2>
        </div>

        {/* Course Info Display */}
        {course && (
          <motion.div 
            className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-lg p-4 mb-6 border border-indigo-700/30"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <h3 className="font-semibold text-indigo-300 mb-1">{course.title}</h3>
            <p className="text-indigo-200 text-sm mb-2">{course.level} • {course.duration}</p>
            <p className="text-2xl font-bold text-white">{course.price}</p>
          </motion.div>
        )}

        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
        >
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Full Name*
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your full name"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Phone Number*
            </label>
            <input
              type="tel"
              name="phoneNumber"
              required
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email Address*
            </label>
            <input
              type="email"
              name="emailAddress"
              required
              value={formData.emailAddress}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your email address"
            />
          </div>

          {/* Highest Qualification */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Highest Qualification*
            </label>
            <select
              name="highestQualification"
              required
              value={formData.highestQualification}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
            >
              <option value="" className="text-gray-400">Select your qualification</option>
              {qualifications.map(qual => (
                <option key={qual} value={qual}>{qual}</option>
              ))}
            </select>
          </div>

          {/* Select Course */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Select a Course*
            </label>
            <div className="relative">
              <input
                type="text"
                name="selectedCourse"
                required
                value={formData.selectedCourse}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-600 rounded-lg text-white font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                readOnly
              />
              <div className="absolute right-3 top-2.5 text-indigo-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Select Mode */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Select Mode*
            </label>
            <select
              name="selectedMode"
              required
              value={formData.selectedMode}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
            >
              <option value="" className="text-gray-400">Select learning mode</option>
              {modes.map(mode => (
                <option key={mode} value={mode}>{mode}</option>
              ))}
            </select>
          </div>

          {/* Total Amount */}
          <motion.div 
            className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-600/50 rounded-lg p-4 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.3 }}
          >
            <span className="text-green-300 font-semibold text-lg">
              Total Amount: ₹{course?.price ? course.price.toLocaleString() : '0'}
            </span>
            <p className="text-xs text-green-400 mt-1">Pay offline and get additional support</p>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.3 }}
          >
            <span className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Proceed to Payment
            </span>
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  )
}