import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CourseRegistrationModal({ course, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    highestQualification: '',
    selectedCourse: course?.title || '',
    selectedMode: '',
    selectedPricingTier: '',
  })

  const [selectedPrice, setSelectedPrice] = useState(0)
  const [showTierModal, setShowTierModal] = useState(false)
  const [selectedTierInfo, setSelectedTierInfo] = useState(null)

  // Tier information data
  const tierDetails = {
    Basic: {
      title: 'Basic',
      color: 'from-green-500 to-emerald-600',
      features: [
        'Simple video sessions covering core fundamentals.',
        'Digital notes and quizzes for quick recall.',
        'Live mentor guidance for clearing doubts.',
        'Small tasks to build confidence.'
      ]
    },
    Foundation: {
      title: 'Foundation',
      color: 'from-blue-500 to-cyan-600',
      features: [
        'Gamified learning with badges and progress tracking.',
        'Interactive quizzes and peer discussions.',
        'Real-life case examples shared by mentors.',
        'Course completion certificate.',
        '45 days of internship program.',
        'Internship completion certificate.'
      ]
    },
    Advanced: {
      title: 'Advanced',
      color: 'from-purple-500 to-indigo-600',
      features: [
        'Networking with Industrial Leaders.',
        'In-depth case studies with critical analysis.',
        'Personalized feedback and improvement plans.',
        '2 months of internship program.',
        '6 months placement support.',
        'Internship completion certificate.',
        'Course completion certificate.'
      ]
    },
    Pro: {
      title: 'Pro',
      color: 'from-orange-500 to-red-600',
      features: [
        'Capstone projects integrating multiple skills.',
        'Research-driven learning with advanced tools.',
        'Industry guest lectures and networking sessions.',
        'Career guidance, mock interviews, and placement support.',
        '1:1 mentorship programmes.',
        'Live + Recorded classes access.',
        '1 Year placement support.',
        '3 months unpaid internship.',
        'Certificate of course completion.',
        'Certificate of internship completion.'
      ]
    }
  }

  // Handle tier info modal
  const handleTierInfoClick = (tierName, price) => {
    setSelectedTierInfo({
      ...tierDetails[tierName],
      price: price
    })
    setShowTierModal(true)
  }

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

  const modes = course?.offlineAvailable 
    ? ['Online', 'Offline']
    : ['Online']

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Update price when pricing tier changes
    if (name === 'selectedPricingTier' && course?.pricing) {
      const tierPrices = {
        'Basic': course.pricing.basic,
        'Foundation': course.pricing.foundation,
        'Advanced': course.pricing.advanced,
        'Pro': course.pricing.pro
      }
      setSelectedPrice(tierPrices[value] || 0)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Validate that pricing tier is selected
    if (!formData.selectedPricingTier) {
      alert('Please select a pricing tier')
      return
    }
    
    const registrationData = {
      ...formData,
      selectedPrice: selectedPrice,
      courseName: course?.title,
      offlineAvailable: course?.offlineAvailable
    }
    
    // For now, just show an alert with the form data
    alert(`Registration submitted for ${formData.selectedPricingTier} tier! (This is just UI - no backend integration yet)`)
    console.log('Registration Data:', registrationData)
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
            {course.offlineAvailable && (
              <div className="flex items-center text-green-400 text-sm mb-2">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Offline classes available
              </div>
            )}
            <p className="text-2xl font-bold text-white">
              {selectedPrice > 0 ? `₹${selectedPrice.toLocaleString()}` : 'Select pricing tier'}
            </p>
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
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                readOnly
              />
              <div className="absolute right-3 top-2.5 text-indigo-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Select Pricing Tier */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Select Pricing Tier*
            </label>
            <div className="grid grid-cols-2 gap-2">
              {course?.pricing && Object.entries(course.pricing).map(([tier, price]) => {
                const tierName = tier.charAt(0).toUpperCase() + tier.slice(1)
                const isSelected = formData.selectedPricingTier === tierName
                return (
                  <motion.div
                    key={tier}
                    onClick={() => handleTierInfoClick(tierName, price)}
                    className={`cursor-pointer p-3 rounded-lg border-2 transition-all duration-200 ${
                      isSelected
                        ? 'border-indigo-500 bg-indigo-900/30 text-white'
                        : 'border-gray-600 bg-gray-800 text-gray-300 hover:border-gray-500'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="text-center">
                      <div className="font-semibold text-sm">
                        {tierName}
                      </div>
                      <div className="text-lg font-bold mt-1">
                        ₹{price.toLocaleString()}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
            <p className="text-xs text-gray-400 mt-2">
              <span className="text-red-400">* Non-refundable</span>
            </p>
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
              Total Amount: ₹{selectedPrice > 0 ? selectedPrice.toLocaleString() : '0'}
            </span>
            <p className="text-xs text-green-400 mt-1">
              {course?.offlineAvailable ? 'Offline classes available' : 'Online learning with lifetime access'}
            </p>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={!formData.selectedPricingTier}
            className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl ${
              formData.selectedPricingTier
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                : 'bg-gray-700 text-gray-400 cursor-not-allowed'
            }`}
            whileHover={formData.selectedPricingTier ? { scale: 1.02, y: -2 } : {}}
            whileTap={formData.selectedPricingTier ? { scale: 0.98 } : {}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.3 }}
          >
            <span className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {selectedPrice > 0 
                ? `Proceed to Payment - ₹${selectedPrice.toLocaleString()}`
                : 'Select Pricing Tier First'
              }
            </span>
          </motion.button>
        </motion.form>
      </motion.div>

      {/* Tier Information Modal - Nested Modal */}
      <AnimatePresence>
        {showTierModal && selectedTierInfo && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[60] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowTierModal(false)}
          >
            <motion.div
              className="bg-gray-900 border border-gray-700 rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={() => setShowTierModal(false)}
                className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white text-xl transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ×
              </motion.button>

              {/* Header */}
              <div className="text-center mb-6">
                <motion.h3 
                  className={`text-3xl font-bold bg-gradient-to-r ${selectedTierInfo.color} bg-clip-text text-transparent mb-2`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {selectedTierInfo.title} Plan
                </motion.h3>
                <motion.div 
                  className="text-4xl font-bold text-indigo-400 mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  ₹{selectedTierInfo.price?.toLocaleString()}
                </motion.div>
                <motion.p 
                  className="text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Complete feature breakdown for {selectedTierInfo.title} tier
                </motion.p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {selectedTierInfo.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index + 0.4 }}
                    className="flex items-start gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-gray-700/50"
                  >
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${selectedTierInfo.color} mt-1.5 flex-shrink-0`}></div>
                    <span className="text-gray-300 leading-relaxed">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  onClick={() => {
                    // Select this tier and close modal
                    handleInputChange({
                      target: {
                        name: 'selectedPricingTier',
                        value: selectedTierInfo.title
                      }
                    })
                    setShowTierModal(false)
                  }}
                  className={`flex-1 px-6 py-3 rounded-lg bg-gradient-to-r ${selectedTierInfo.color} text-white font-semibold hover:shadow-lg transition-all duration-300`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Select {selectedTierInfo.title} Plan
                </motion.button>
                <motion.button
                  onClick={() => setShowTierModal(false)}
                  className="flex-1 px-6 py-3 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}