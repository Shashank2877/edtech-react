import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'
import VideoBackground from '../components/VideoBackground'
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
    <div className="min-h-screen relative">
      {/* Video Background */}
      <div className="fixed inset-0 z-0">
        <VideoBackground />
        <div className="absolute inset-0 bg-[#080B1A]/40 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="mb-6" data-aos="fade-up">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-gray-700 dark:text-gray-300 mt-1">Fill the form and we'll get back to you.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Form */}
        <ContactForm onSubmit={handleFormSubmit} />

        {/* Info */}
        <motion.div
          className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-semibold">Get in touch</h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">Prefer email? Reach us anytime.</p>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
            <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">🔍 SEO Services Available</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Boost your website's Google rankings with our expert SEO services. Contact us for a free SEO audit!
            </p>
          </div>
          
          <div className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <div><span className="font-medium">Email:</span> nammaweb1@gmail.com</div>
            <div><span className="font-medium">Phone:</span> +91 92415 27429</div>
            <div><span className="font-medium">Location:</span> Onsite or Hybrid</div>
          </div>
          <div className="mt-6 flex gap-3">
            <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800">T</a>
            <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800">G</a>
            <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800">in</a>
          </div>
        </motion.div>
      </div>
    </section>
      </div>
      <Footer />
    </div>
  )
}