import React, { useState } from 'react'
import { motion } from 'framer-motion'
import GlassCard from '../components/GlassCard'
import GlassSection from '../components/GlassSection'
import CourseRegistrationModal from '../components/CourseRegistrationModal'
import CourseDetailsModal from '../components/CourseDetailsModal'
import Footer from '../components/Footer'
import { certificationPrograms } from './data'

// Certificate Card component
const CertificateCard = ({ program, onViewDetails }) => (
  <GlassCard className="p-6 rounded-xl hover:scale-105 transition-transform duration-300">
    <div className="flex items-center gap-3 mb-4">
      <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
    </div>
    <p className="text-gray-700 mb-4">{program.description}</p>
    <div className="flex items-center gap-4 mb-4">
      <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-700 text-sm">
        {program.duration}
      </span>
      <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-700 text-sm">
        ₹{program.price}
      </span>
    </div>
    <div className="mb-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
      <p className="text-sm text-yellow-800 font-semibold text-center">
        Special Offer: Get 6 certificates for just ₹999!
      </p>
    </div>
    <div className="flex justify-center items-center">
      <motion.button
        className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:shadow-lg transition-shadow"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onViewDetails(program)}
      >
        View Details
      </motion.button>
    </div>
  </GlassCard>
)

export default function Certificate() {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  // Handle View Details button click
  const handleViewDetails = (program) => {
    setSelectedProgram(program);
    setShowDetailsModal(true);
  };

  // Handle Enroll Now button click from details modal
  const handleEnrollNow = () => {
    setShowDetailsModal(false);
    setShowRegistrationModal(true);
  };

  // Handle close details modal
  const handleCloseDetailsModal = () => {
    setShowDetailsModal(false);
    setSelectedProgram(null);
  };

  // Handle close registration modal
  const handleCloseRegistrationModal = () => {
    setShowRegistrationModal(false);
    setSelectedProgram(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      {/* Hero Section */}
      <div className="pt-24 pb-12 px-4">
        <GlassSection className="max-w-7xl mx-auto rounded-2xl p-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-blue-600 to-purple-600">
              AI Certification Programs
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Get certified in cutting-edge AI technologies in just one day. 
              Industry-recognized certificates to boost your career.
            </p>

            {/* Pricing Banner */}
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
              <div className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl shadow-lg text-white">
                <p className="text-sm font-semibold mb-1">Single Certificate</p>
                <p className="text-3xl font-bold">₹699</p>
                <p className="text-xs mt-1 opacity-90">All inclusive</p>
              </div>
              <div className="text-2xl font-bold text-gray-400">OR</div>
              <div className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl shadow-lg text-white relative">
                <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  BEST VALUE
                </div>
                <p className="text-sm font-semibold mb-1">Bundle of 6 Certificates</p>
                <p className="text-3xl font-bold">₹999</p>
                <p className="text-xs mt-1 opacity-90">All inclusive - Save ₹3,195!</p>
              </div>
            </div>
          </div>
        </GlassSection>
      </div>

      {/* Certificates Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certificationPrograms.map((program) => (
            <CertificateCard 
              key={program.id} 
              program={program} 
              onViewDetails={handleViewDetails} 
            />
          ))}
        </div>

        {/* Benefits Section */}
        <GlassSection className="p-8 rounded-2xl mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Why Choose Our Certification Programs?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <h3 className="font-bold text-lg mb-2 text-gray-900">Industry Recognized</h3>
              <p className="text-gray-600 text-sm">Certificates valued by top employers</p>
            </div>
            <div className="text-center p-4">
              <h3 className="font-bold text-lg mb-2 text-gray-900">Expert Instructors</h3>
              <p className="text-gray-600 text-sm">Learn from AI industry professionals</p>
            </div>
            <div className="text-center p-4">
              <h3 className="font-bold text-lg mb-2 text-gray-900">Hands-on Projects</h3>
              <p className="text-gray-600 text-sm">Practical experience with real scenarios</p>
            </div>
            <div className="text-center p-4">
              <h3 className="font-bold text-lg mb-2 text-gray-900">Lifetime Access</h3>
              <p className="text-gray-600 text-sm">Keep learning with updated content</p>
            </div>
          </div>
        </GlassSection>

        {/* CTA Section */}
        <GlassSection className="p-8 rounded-2xl text-center bg-gradient-to-r from-green-500/10 to-blue-500/10">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Ready to Advance Your Career?
          </h2>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Join thousands of professionals who have enhanced their skills with our AI certification programs.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            Get Started Today
          </a>
        </GlassSection>
      </div>

      {/* Course Details Modal */}
      <CourseDetailsModal
        course={selectedProgram}
        isOpen={showDetailsModal}
        onClose={handleCloseDetailsModal}
        onEnrollNow={handleEnrollNow}
      />

      {/* Course Registration Modal */}
      {selectedProgram && showRegistrationModal && (
        <CourseRegistrationModal
          course={selectedProgram}
          onClose={handleCloseRegistrationModal}
        />
      )}

      <Footer />
    </div>
  )
}