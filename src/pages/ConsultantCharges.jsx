import React from 'react'
import { motion } from 'framer-motion'
import GlassCard from '../components/GlassCard'
import GlassSection from '../components/GlassSection'
import Footer from '../components/Footer'

export default function ConsultantCharges() {
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
    const message = `Hi, I would like to book a ${option.type} consultation (₹${option.price}). Please provide me with available slots.`;
    const whatsappUrl = `https://wa.me/919241527429?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

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
    </div>
  )
}