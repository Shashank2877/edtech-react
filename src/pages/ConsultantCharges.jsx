import React, { useState } from 'react'
import { motion } from 'framer-motion'
import GlassCard from '../components/GlassCard'
import GlassSection from '../components/GlassSection'
import Footer from '../components/Footer'

export default function ConsultantCharges() {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    preferredDateTime: '',
    consultationTopic: ''
  });
  const [paymentStep, setPaymentStep] = useState('form'); // 'form', 'qr-payment', 'success'
  const consultationOptions = [
    {
      id: 1,
      type: 'Online Meeting',
      price: 2000,
      duration: '60 minutes',
      features: [
        'Video conference consultation',
        'Screen sharing and live demos',
        'Digital resource sharing',
        'Follow-up email support',
        'Session recording available',
        'Flexible scheduling'
      ],
      benefits: [
        'Convenient from anywhere',
        'No travel required',
        'Quick turnaround time',
        'Digital documentation'
      ],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      id: 2,
      type: 'Direct Offline Meeting',
      price: 5000,
      duration: '90-120 minutes',
      features: [
        'Face-to-face consultation',
        'In-depth project discussion',
        'On-site assessment (if required)',
        'Detailed documentation',
        'Hands-on demonstrations',
        'Physical material handover'
      ],
      benefits: [
        'Personal interaction',
        'Comprehensive evaluation',
        'On-premise insights',
        'Extended session time'
      ],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      recommended: true
    }
  ];

  const handleBookConsultation = (option) => {
    setSelectedOption(option);
    setShowPaymentModal(true);
    setPaymentStep('form');
  };

  const handleCloseModal = () => {
    setShowPaymentModal(false);
    setSelectedOption(null);
    setFormData({
      fullName: '',
      phoneNumber: '',
      emailAddress: '',
      preferredDateTime: '',
      consultationTopic: ''
    });
    setPaymentStep('form');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePayment = () => {
    setPaymentStep('qr-payment');
  };

  const handlePaymentConfirmation = () => {
    const message = `Payment Confirmation - Consultant Booking

Consultation Type: ${selectedOption.type}
Amount: ₹${selectedOption.price}

Personal Details:
Name: ${formData.fullName}
Phone: ${formData.phoneNumber}
Email: ${formData.emailAddress}
Preferred Date/Time: ${formData.preferredDateTime}
Topic: ${formData.consultationTopic}

I have completed the payment. Please confirm my booking.`;

    const whatsappUrl = `https://wa.me/919241527429?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setPaymentStep('success');
  };

  const isFormValid = formData.fullName && formData.phoneNumber && formData.emailAddress && formData.preferredDateTime && formData.consultationTopic;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="pt-24 pb-12 px-4">
        <GlassSection className="max-w-7xl mx-auto rounded-2xl p-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Consultant Charges
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Get expert AI consultation tailored to your needs. Choose from our flexible 
              consultation options designed to fit your schedule and requirements.
            </p>
          </div>
        </GlassSection>
      </div>

      {/* Consultation Options */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {consultationOptions.map((option) => (
            <GlassCard key={option.id} className={`p-8 rounded-2xl relative overflow-hidden h-full bg-gradient-to-br ${option.bgGradient}`}>
              {option.recommended && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                  RECOMMENDED
                </div>
              )}
              
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {option.type}
                </h2>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    ₹{option.price.toLocaleString()}
                  </span>
                </div>
                <span className="inline-block px-4 py-2 bg-white/50 rounded-full text-gray-700 text-sm font-semibold">
                  {option.duration}
                </span>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">What's Included:</h3>
                <ul className="space-y-2">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Key Benefits:</h3>
                <div className="grid grid-cols-2 gap-2">
                  {option.benefits.map((benefit, idx) => (
                    <div key={idx} className="bg-white/30 rounded-lg px-3 py-2 text-sm text-gray-700">
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              <motion.button
                onClick={() => handleBookConsultation(option)}
                className={`w-full py-4 px-6 rounded-xl text-white font-bold text-lg shadow-lg bg-gradient-to-r ${option.gradient} hover:shadow-xl transition-all`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Consultation
              </motion.button>
            </GlassCard>
          ))}
        </div>

        {/* Additional Info Section */}
        <GlassSection className="p-8 rounded-2xl mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Consultation Process
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Book Your Slot</h3>
              <p className="text-gray-600 text-sm">Choose your preferred consultation type and schedule</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Prepare Materials</h3>
              <p className="text-gray-600 text-sm">Share your project details or specific requirements</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Get Expert Guidance</h3>
              <p className="text-gray-600 text-sm">Receive personalized solutions and actionable insights</p>
            </div>
          </div>
        </GlassSection>

        {/* FAQ Section */}
        <GlassSection className="p-8 rounded-2xl text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Have Questions?
          </h2>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Not sure which consultation option is right for you? Contact us for a free 15-minute 
            discovery call to discuss your needs.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            Contact Us
          </a>
        </GlassSection>
      </div>

      <Footer />

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-white">
                  {paymentStep === 'success' ? 'Booking Confirmed!' : 'Book Consultation'}
                </h2>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Step Indicators */}
              {paymentStep !== 'success' && (
                <div className="flex items-center justify-center mb-8">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    paymentStep === 'form' ? 'bg-blue-500 text-white' : 'bg-gray-600 text-gray-300'
                  }`}>
                    1
                  </div>
                  <div className={`w-16 h-1 ${paymentStep === 'qr-payment' ? 'bg-blue-500' : 'bg-gray-600'}`} />
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    paymentStep === 'qr-payment' ? 'bg-blue-500 text-white' : 'bg-gray-600 text-gray-300'
                  }`}>
                    2
                  </div>
                  <div className="w-16 h-1 bg-gray-600" />
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold bg-gray-600 text-gray-300">
                    3
                  </div>
                </div>
              )}

              {/* Form Step */}
              {paymentStep === 'form' && (
                <div className="space-y-6">
                  {/* Selected Option Display */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{selectedOption.type}</h3>
                        <p className="text-gray-300 text-sm">{selectedOption.duration}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-green-400">₹{selectedOption.price.toLocaleString()}</p>
                        <p className="text-xs text-gray-400">All inclusive</p>
                      </div>
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name<span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number<span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address<span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="emailAddress"
                      value={formData.emailAddress}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Preferred Date & Time<span className="text-red-400">*</span>
                    </label>
                    <input
                      type="datetime-local"
                      name="preferredDateTime"
                      value={formData.preferredDateTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Consultation Topic<span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="consultationTopic"
                      value={formData.consultationTopic}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Brief description of what you'd like to discuss"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4 pt-4">
                    <button
                      onClick={handleCloseModal}
                      className="flex-1 py-3 px-6 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handlePayment}
                      disabled={!isFormValid}
                      className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
                        isFormValid
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'
                          : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      Proceed to Payment • ₹{selectedOption.price.toLocaleString()}
                    </button>
                  </div>
                </div>
              )}

              {/* QR Payment Step */}
              {paymentStep === 'qr-payment' && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">Scan QR Code to Pay</h3>
                    <p className="text-gray-300 mb-6">Complete your payment of ₹{selectedOption.price.toLocaleString()}</p>
                  </div>

                  {/* QR Code */}
                  <div className="bg-white rounded-2xl p-6 mx-auto max-w-sm">
                    <img 
                      src="/QR_code.jpg" 
                      alt="Payment QR Code" 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>

                  {/* Payment Instructions */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                      <span className="text-yellow-400">💡</span>
                      Payment Instructions
                    </h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Open any UPI app (Google Pay, PhonePe, Paytm, etc.)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Scan the QR code above</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Enter amount: ₹{selectedOption.price.toLocaleString()}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Complete the payment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Click "I've Paid" button below</span>
                      </li>
                    </ul>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4 pt-4">
                    <button
                      onClick={() => setPaymentStep('form')}
                      className="flex-1 py-3 px-6 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={handlePaymentConfirmation}
                      className="flex-1 py-3 px-6 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-lg font-semibold transition-all"
                    >
                      I've Paid ✓
                    </button>
                  </div>
                </div>
              )}

              {/* Success Step */}
              {paymentStep === 'success' && (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Booking Request Sent!
                  </h3>
                  <p className="text-gray-300 mb-6 max-w-md mx-auto">
                    Your consultation booking request has been sent via WhatsApp. Our team will confirm your slot shortly.
                  </p>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6 text-left max-w-md mx-auto">
                    <p className="text-sm text-gray-300 mb-2"><span className="font-semibold text-white">Consultation:</span> {selectedOption.type}</p>
                    <p className="text-sm text-gray-300 mb-2"><span className="font-semibold text-white">Amount:</span> ₹{selectedOption.price.toLocaleString()}</p>
                    <p className="text-sm text-gray-300"><span className="font-semibold text-white">Name:</span> {formData.fullName}</p>
                  </div>
                  <button
                    onClick={handleCloseModal}
                    className="py-3 px-8 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg font-semibold transition-all"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}