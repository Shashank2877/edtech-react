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
      className={`rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm ${className}`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">Name *</label>
          <input 
            required 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
            placeholder="Your name" 
          />
        </div>
        <div>
          <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">Email *</label>
          <input 
            required 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
            placeholder="you@example.com" 
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">Subject</label>
        <input 
          name="subject" 
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
          placeholder="What is it about?" 
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">Message *</label>
        <textarea 
          required 
          name="message" 
          rows="5" 
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
          placeholder="How can we help?" 
        />
      </div>
      <div className="mt-6 flex items-center justify-between">
        <button 
          type="submit" 
          className="px-5 py-3 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition"
        >
          Send Message
        </button>
        {status && (
          <motion.span 
            className="text-sm text-green-600 dark:text-green-400"
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
