import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import ModernHero from '../components/ModernHero'
import BrandPartners from '../components/BrandPartners'
import Footer from '../components/Footer'

export default function Home() {
  const navigate = useNavigate()
  const [showRegistrationModal, setShowRegistrationModal] = React.useState(false)
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: ''
  })

  // Stats data
  const stats = [
    { number: "1000+", label: "Students Trained" },
    { number: "50+", label: "Industry Partners" },
    { number: "95%", label: "Job Placement Rate" },
    { number: "24/7", label: "Support Available" }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Registration submitted:', formData)
    // Here you would typically send the data to your backend
    alert('Registration successful! We will contact you soon.')
    setShowRegistrationModal(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      education: '',
      experience: ''
    })
  }

  return (
    <div className="relative">
      {/* Modern Hero Section */}
      <ModernHero 
        title="NammaWeb - Start, switch, or advance your tech career"
        subtitle="Grow with 1,000+ courses from NammaWeb's industry experts."
        primaryButtonText="Explore"
        secondaryButtonText="Contact"
        onPrimaryClick={() => navigate('/about')}
        onSecondaryClick={() => navigate('/contact')}
      />

      {/* Brand Partners Section */}
      <BrandPartners />

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why choose NammaWeb?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience world-class education with NammaWeb's hands-on projects, expert mentorship, and industry-recognized certificates.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Project-Based Learning",
                description: "Learn by building real-world projects that matter to employers."
              },
              {
                icon: "👨‍🏫", 
                title: "Expert Instructors",
                description: "Learn from industry professionals with years of practical experience."
              },
              {
                icon: "🏆",
                title: "Industry Certificates",
                description: "Earn certificates that are recognized by top companies worldwide."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to transform your career with NammaWeb?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of learners who have advanced their careers with NammaWeb's expert-led courses.
            </p>
            <motion.button
              onClick={() => setShowRegistrationModal(true)}
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg text-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Registration Modal */}
      {showRegistrationModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div 
            className="bg-white rounded-xl p-8 max-w-md w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Join NammaWeb</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setShowRegistrationModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Join Now
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
      <Footer />
    </div>
  )
}