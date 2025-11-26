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
    certificateQuantity: '1', // For certification programs
  })

  const [selectedPrice, setSelectedPrice] = useState(0)
  const [showTierModal, setShowTierModal] = useState(false)
  const [selectedTierInfo, setSelectedTierInfo] = useState(null)
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)
  const [paymentStep, setPaymentStep] = useState('form') // 'form', 'qr-payment', 'success'

  // Check if this is a certification program
  const isCertificationProgram = course?.bulkPrice !== undefined

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
      
      // Set initial price for certification programs
      if (course.bulkPrice !== undefined) {
        setSelectedPrice(course.price) // Default to single certificate price
      }
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

    // Update price for certification programs based on quantity
    if (name === 'certificateQuantity' && isCertificationProgram) {
      if (value === '6') {
        setSelectedPrice(course.bulkPrice.price)
      } else {
        setSelectedPrice(course.price)
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Validate that pricing tier or certificate quantity is selected
    if (!isCertificationProgram && !formData.selectedPricingTier) {
      alert('Please select a pricing tier')
      return
    }
    if (isCertificationProgram && !formData.certificateQuantity) {
      alert('Please select a certificate package')
      return
    }
    
    // Directly process enrollment via WhatsApp
    handlePayment()
  }

  const handlePayment = async () => {
    setIsProcessingPayment(true)
    
    try {
      // Show QR code payment screen
      setPaymentStep('qr-payment')
    } catch (error) {
      console.error('Payment error:', error)
      alert(`Payment failed: ${error.message}. Please try again.`)
    } finally {
      setIsProcessingPayment(false)
    }
  }

  const handlePaymentConfirmation = () => {
    // After user confirms payment, redirect to Google Form for screenshot upload
    const googleFormUrl = import.meta.env.VITE_GOOGLE_FORM_URL || 'https://docs.google.com/forms/d/e/1FAIpQLSfxAGtAE7WBt1xM61TAEdP5Zete7kJEL3iy2IBDVWwSI9Vuzw/viewform'
    
    // Pre-fill user details in the form URL if needed (optional)
    const formUrlWithParams = new URL(googleFormUrl)
    // You can add pre-fill parameters if your Google Form supports it
    // Example: formUrlWithParams.searchParams.append('entry.123456', formData.fullName)
    
    // Open Google Form in new tab for screenshot upload
    window.open(formUrlWithParams.toString(), '_blank')
    
    // Also prepare WhatsApp message for additional confirmation
    const courseDetails = isCertificationProgram
      ? `Certificate Program: ${course?.title}
Tier: ${formData.certificateQuantity === '6' ? 'Pro' : 'Advanced'}
Price: ₹${selectedPrice}
Name: ${formData.fullName}
Phone: ${formData.phoneNumber}
Email: ${formData.emailAddress}
Mode: ${formData.selectedMode}`
      : `Course: ${course?.title}
Tier: ${formData.selectedPricingTier}
Price: ₹${selectedPrice}
Name: ${formData.fullName}
Phone: ${formData.phoneNumber}
Email: ${formData.emailAddress}
Mode: ${formData.selectedMode}`
    
    const whatsappMessage = encodeURIComponent(`Hi! I have completed the payment for:

${courseDetails}

I have also uploaded my payment screenshot via Google Form.`)
    
    const whatsappURL = `https://wa.me/+919241527429?text=${whatsappMessage}`
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank')
    
    // Show success message
    setPaymentStep('success')
  }

  const handleGoBack = () => {
    setPaymentStep('form')

  }

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4">
      <motion.div
        className="relative bg-gray-900 border border-gray-700 rounded-xl p-4 sm:p-6 lg:p-8 max-w-lg w-full max-h-[95vh] overflow-y-auto shadow-2xl"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 50 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Close Button - Top Right */}
        <motion.button
          onClick={onClose}
          className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white text-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          style={{ minHeight: '44px', minWidth: '44px', touchAction: 'manipulation' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Close registration modal"
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
            {paymentStep === 'form' && 'Course Registration'}
            {paymentStep === 'qr-payment' && 'Payment'}
            {paymentStep === 'success' && 'Enrollment Confirmed!'}
          </motion.h2>
        </div>

        {/* Step Indicator */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-4">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold ${
              paymentStep === 'form' ? 'bg-indigo-600 text-white' : 'bg-green-600 text-white'
            }`}>
              1
            </div>
            <div className={`h-1 w-8 ${
              paymentStep === 'form' ? 'bg-gray-600' : 'bg-green-600'
            }`}></div>
            <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold ${
              paymentStep === 'form' ? 'bg-gray-600 text-gray-400' : 
              paymentStep === 'qr-payment' ? 'bg-indigo-600 text-white' : 'bg-green-600 text-white'
            }`}>
              2
            </div>
            <div className={`h-1 w-8 ${
              paymentStep === 'success' ? 'bg-green-600' : 'bg-gray-600'
            }`}></div>
            <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold ${
              paymentStep === 'success' ? 'bg-green-600 text-white' : 'bg-gray-600 text-gray-400'
            }`}>
              3
            </div>
          </div>
        </div>

        {/* Registration Form Step */}
        {paymentStep === 'form' && (
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Course Info */}
            <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-600/50 rounded-lg p-4 mb-4">
              <h3 className="text-lg font-semibold text-indigo-300 mb-2">{course?.title}</h3>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="bg-indigo-600/30 text-indigo-300 px-2 py-1 rounded">
                  {course?.level}
                </span>
                <span className="bg-purple-600/30 text-purple-300 px-2 py-1 rounded">
                  {course?.duration}
                </span>
                <span className="bg-green-600/30 text-green-300 px-2 py-1 rounded">
                  ⭐ {course?.rating}
                </span>
              </div>
            </div>

            {/* Form Fields */}
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
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your full name"
              />
            </div>

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
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your phone number"
              />
            </div>

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
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your email address"
              />
            </div>

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

            {/* Pricing Tier Selection OR Certificate Quantity */}
            {isCertificationProgram ? (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Select Certificate Package*
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <motion.div
                    className={`relative border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                      formData.certificateQuantity === '1'
                        ? 'border-green-500 bg-gradient-to-br from-green-900/50 to-emerald-900/50'
                        : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
                    }`}
                    onClick={() => {
                      setFormData(prev => ({ ...prev, certificateQuantity: '1' }))
                      setSelectedPrice(course.price)
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="text-center">
                      <div className="inline-block px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded-full mb-2">
                        Advanced
                      </div>
                      <h4 className="font-semibold text-white mb-1">Single Certificate</h4>
                      <div className="text-2xl font-bold text-green-400 mb-2">
                        ₹{course.price}
                      </div>
                      <p className="text-xs text-gray-400">All inclusive</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className={`relative border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                      formData.certificateQuantity === '6'
                        ? 'border-yellow-500 bg-gradient-to-br from-yellow-900/50 to-orange-900/50'
                        : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
                    }`}
                    onClick={() => {
                      setFormData(prev => ({ ...prev, certificateQuantity: '6' }))
                      setSelectedPrice(course.bulkPrice.price)
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="text-center">
                      <div className="inline-block px-2 py-1 bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs font-semibold rounded-full mb-2">
                        Pro
                      </div>
                      <h4 className="font-semibold text-white mb-1">Single Certificate</h4>
                      <div className="text-2xl font-bold text-yellow-400 mb-2">
                        ₹{course.bulkPrice.price}
                      </div>
                      <p className="text-xs text-gray-400">All Inclusive</p>
                    </div>
                  </motion.div>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  <span className="text-green-400">✓</span> Industry-recognized certification
                </p>
              </div>
            ) : (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Select Pricing Tier*
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.entries(course?.pricing || {}).map(([tierName, price]) => {
                    const tierKey = tierName.charAt(0).toUpperCase() + tierName.slice(1)
                    const tierInfo = tierDetails[tierKey]
                    if (!tierInfo) return null

                    return (
                      <motion.div
                        key={tierName}
                        className={`relative border-2 rounded-lg p-3 cursor-pointer transition-all duration-200 ${
                          formData.selectedPricingTier === tierKey
                            ? 'border-indigo-500 bg-gradient-to-br from-indigo-900/50 to-purple-900/50'
                            : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
                        }`}
                        onClick={() => {
                          setFormData(prev => ({ ...prev, selectedPricingTier: tierKey }))
                          setSelectedPrice(price)
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="text-center">
                          <h4 className="font-semibold text-white mb-1">{tierKey}</h4>
                          <div className="text-2xl font-bold text-indigo-400 mb-2">
                            ₹{price.toLocaleString()}
                          </div>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation()
                              setSelectedTierInfo(tierInfo)
                              setShowTierModal(true)
                            }}
                            className="text-xs text-indigo-300 hover:text-indigo-200 underline"
                          >
                            View Details
                          </button>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  <span className="text-red-400">* Non-refundable</span>
                </p>
              </div>
            )}

            {/* Pricing Tier Selection */}
            <div style={{ display: 'none' }}>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Select Pricing Tier*
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.entries(course?.pricing || {}).map(([tierName, price]) => {
                  const tierKey = tierName.charAt(0).toUpperCase() + tierName.slice(1)
                  const tierInfo = tierDetails[tierKey]
                  if (!tierInfo) return null

                  return (
                    <motion.div
                      key={tierName}
                      className={`relative border-2 rounded-lg p-3 cursor-pointer transition-all duration-200 ${
                        formData.selectedPricingTier === tierKey
                          ? 'border-indigo-500 bg-gradient-to-br from-indigo-900/50 to-purple-900/50'
                          : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
                      }`}
                      onClick={() => {
                        setFormData(prev => ({ ...prev, selectedPricingTier: tierKey }))
                        setSelectedPrice(price)
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="text-center">
                        <h4 className="font-semibold text-white mb-1">{tierKey}</h4>
                        <div className="text-2xl font-bold text-indigo-400 mb-2">
                          ₹{price.toLocaleString()}
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedTierInfo(tierInfo)
                            setShowTierModal(true)
                          }}
                          className="text-xs text-indigo-300 hover:text-indigo-200 underline"
                        >
                          View Details
                        </button>
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
              className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-600/50 rounded-lg p-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.3 }}
            >
              <div className="space-y-2 text-sm text-green-300">
                <div className="flex justify-between">
                  <span>{isCertificationProgram ? 'Certificate Fee:' : 'Course Fee:'}</span>
                  <span>₹{selectedPrice > 0 ? selectedPrice.toLocaleString() : '0'}</span>
                </div>
                <div className="border-t border-green-600/50 pt-2">
                  <div className="flex justify-between font-semibold text-lg text-green-300">
                    <span>Total Amount:</span>
                    <span>₹{selectedPrice > 0 ? selectedPrice.toLocaleString() : '0'}</span>
                  </div>
                  <p className="text-xs text-green-400 mt-1 text-center">All inclusive</p>
                </div>
              </div>
              <p className="text-xs text-green-400 mt-2 text-center">
                {isCertificationProgram 
                  ? 'One-day intensive certification program' 
                  : (course?.offlineAvailable ? 'Offline classes available' : 'Online learning with lifetime access')
                }
              </p>
            </motion.div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <motion.button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-200 font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Close
                </span>
              </motion.button>

              <motion.button
                type="submit"
                disabled={
                  !formData.fullName || 
                  !formData.phoneNumber || 
                  !formData.emailAddress || 
                  !formData.highestQualification || 
                  !formData.selectedMode || 
                  (isCertificationProgram ? selectedPrice === 0 : !formData.selectedPricingTier)
                }
                className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl ${
                  (formData.fullName && formData.phoneNumber && formData.emailAddress && formData.highestQualification && formData.selectedMode && (isCertificationProgram ? selectedPrice > 0 : formData.selectedPricingTier))
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                    : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                }`}
                whileHover={(formData.fullName && formData.phoneNumber && formData.emailAddress && formData.highestQualification && formData.selectedMode && (isCertificationProgram ? selectedPrice > 0 : formData.selectedPricingTier)) ? { scale: 1.02 } : {}}
                whileTap={(formData.fullName && formData.phoneNumber && formData.emailAddress && formData.highestQualification && formData.selectedMode && (isCertificationProgram ? selectedPrice > 0 : formData.selectedPricingTier)) ? { scale: 0.98 } : {}}
              >
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  {selectedPrice > 0 
                    ? `Proceed to Payment - ₹${selectedPrice.toLocaleString()}`
                    : isCertificationProgram ? 'Select Package' : 'Select Pricing Tier First'
                  }
                </span>
              </motion.button>
            </div>
          </motion.form>
        )}

        {/* QR Code Payment Step */}
        {paymentStep === 'qr-payment' && (
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Complete Payment</h3>
              <p className="text-gray-300 mb-2">Scan the QR code to pay ₹{selectedPrice}</p>
              <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-600/50 rounded-lg p-4 mb-4">
                <p className="text-sm text-indigo-300 font-semibold mb-2">Payment Details:</p>
                <div className="text-left text-sm text-gray-300 space-y-1">
                  <p><strong>Amount:</strong> ₹{selectedPrice}</p>
                  <p><strong>Course:</strong> {course?.title}</p>
                  {isCertificationProgram && (
                    <p><strong>Tier:</strong> {formData.certificateQuantity === '6' ? 'Pro' : 'Advanced'} Certificate</p>
                  )}
                  {!isCertificationProgram && (
                    <p><strong>Tier:</strong> {formData.selectedPricingTier}</p>
                  )}
                </div>
              </div>
            </div>

            {/* QR Code Display */}
            <div className="bg-white rounded-xl p-6 flex flex-col items-center">
              <img 
                src="/QR_code.jpg" 
                alt="Payment QR Code" 
                className="w-64 h-64 object-contain mb-4"
              />
              <p className="text-gray-700 text-sm text-center mb-2">
                Scan with any UPI app (Google Pay, PhonePe, Paytm, etc.)
              </p>
            </div>

            {/* Payment Instructions */}
            <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-600/50 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-300 mb-2">📱 How to Pay:</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>1. Open any UPI app on your phone</li>
                <li>2. Scan the QR code shown above</li>
                <li>3. Enter amount: ₹{selectedPrice}</li>
                <li>4. Complete the payment</li>
                <li>5. Click "I've Paid" button below</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <motion.button
                type="button"
                onClick={handleGoBack}
                className="flex-1 px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Go Back
              </motion.button>
              <motion.button
                type="button"
                onClick={handlePaymentConfirmation}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                I've Paid ✓
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Success Step */}
        {paymentStep === 'success' && (
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Payment Confirmation Sent!</h3>
              <p className="text-gray-300 mb-4">
                Please upload your payment screenshot via the Google Form that just opened. Our team will confirm your enrollment shortly.
              </p>
              <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-600/50 rounded-lg p-4 text-left">
                <h4 className="font-semibold text-green-300 mb-2">What's Next?</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>✓ Upload payment screenshot in Google Form</li>
                  <li>• Continue the conversation on WhatsApp</li>
                  <li>• Our team will verify your payment</li>
                  <li>• Join our student community</li>
                  <li>• Download course materials</li>
                  <li>• Schedule your first mentoring session</li>
                </ul>
              </div>
            </div>

            <motion.button
              type="button"
              onClick={onClose}
              className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Learning Now
            </motion.button>
          </motion.div>
        )}
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