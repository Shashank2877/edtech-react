import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Contact(){
  // Default Contact page to dark if no preference saved yet
  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (!stored) {
      localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
    }
  }, [])

  const handleFormSubmit = (formData) => {
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your backend
  }

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
        <section className="max-w-6xl mx-auto px-4 pt-24 pb-16">
      <div className="mb-8" data-aos="fade-up">
        <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
        <p className="text-gray-700 mt-1">Fill the form and we'll get back to you.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Form */}
        <ContactForm onSubmit={handleFormSubmit} />

        {/* Info */}
        <motion.div
          className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-sm p-6 shadow-lg"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-semibold text-gray-900">Get in touch</h2>
          <p className="text-gray-700 mt-2">Prefer email? Reach us anytime.</p>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
            <h3 className="font-semibold text-blue-600 mb-2">🔍 SEO Services Available</h3>
            <p className="text-sm text-gray-600">
              Boost your website's Google rankings with our expert SEO services. Contact us for a free SEO audit!
            </p>
          </div>
          
          <div className="mt-4 space-y-2 text-sm text-gray-700">
            <div><span className="font-medium">Email:</span> nammaweb1@gmail.com</div>
            <div><span className="font-medium">Phone:</span> +91 92415 27429</div>
            <div><span className="font-medium">Location:</span> Onsite or Hybrid</div>
          </div>
          <div className="mt-6 flex gap-3">
            <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 bg-white hover:bg-gray-50 text-gray-700">T</a>
            <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 bg-white hover:bg-gray-50 text-gray-700">G</a>
            <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 bg-white hover:bg-gray-50 text-gray-700">in</a>
          </div>
        </motion.div>
      </div>
    </section>
      </div>
      <Footer />
    </div>
  )
}