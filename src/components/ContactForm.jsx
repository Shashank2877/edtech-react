import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm({ onSubmit, className = "" }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Show success message
    setStatus('Thanks! We will get back to you soon.')
    
    // Call custom onSubmit if provided
    if (onSubmit) {
      onSubmit(formData)
    }
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    // Clear status after 3 seconds
    setTimeout(() => setStatus(''), 3000)
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className={`rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-sm p-4 sm:p-6 shadow-lg ${className}`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label className="block text-sm mb-2 text-gray-700 font-medium">Name *</label>
          <input 
            required 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 text-base rounded-xl border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200" 
            placeholder="Your name" 
            style={{ minHeight: '48px', fontSize: '16px' }}
            autoComplete="name"
          />
        </div>
        <div>
          <label className="block text-sm mb-2 text-gray-700 font-medium">Email *</label>
          <input 
            required 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 text-base rounded-xl border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200" 
            placeholder="you@example.com" 
            style={{ minHeight: '48px', fontSize: '16px' }}
            autoComplete="email"
            inputMode="email"
          />
        </div>
      </div>
      <div className="mt-6">
        <label className="block text-sm mb-2 text-gray-700 font-medium">Subject</label>
        <input 
          name="subject" 
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-4 text-base rounded-xl border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200" 
          placeholder="What is it about?" 
          style={{ minHeight: '48px', fontSize: '16px' }}
        />
      </div>
      <div className="mt-6">
        <label className="block text-sm mb-2 text-gray-700 font-medium">Message *</label>
        <textarea 
          required 
          name="message" 
          rows="6" 
          value={formData.message}
          onChange={handleChange}
          className="w-full p-4 text-base rounded-xl border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-y" 
          placeholder="How can we help?" 
          style={{ fontSize: '16px', minHeight: '120px' }}
        />
      </div>
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button 
          type="submit" 
          className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 font-semibold text-base hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          style={{ minHeight: '52px', touchAction: 'manipulation' }}
        >
          Send Message
        </button>
        {status && (
          <motion.span 
            className="text-sm text-green-600"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            {status}
          </motion.span>
        )}
      </div>
    </motion.form>
  )
}
