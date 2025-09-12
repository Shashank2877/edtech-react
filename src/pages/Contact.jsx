import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact(){
  const [status, setStatus] = useState('')

  // Default Contact page to dark if no preference saved yet
  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (!stored) {
      localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
    }
  }, [])

  const handleSubmit = (e)=>{
    e.preventDefault()
    setStatus('Thanks! We will get back to you soon.')
    e.currentTarget.reset()
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="mb-6" data-aos="fade-up">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-gray-700 dark:text-gray-300 mt-1">Fill the form and we'll get back to you.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">Name</label>
              <input required name="name" className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">Email</label>
              <input required type="email" name="email" className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="you@example.com" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">Subject</label>
            <input name="subject" className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="What is it about?" />
          </div>
          <div className="mt-4">
            <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">Message</label>
            <textarea required name="message" rows="5" className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="How can we help?" />
          </div>
          <div className="mt-6 flex items-center justify-between">
            <button type="submit" className="px-5 py-3 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition">Send</button>
            {status && <span className="text-sm text-green-600 dark:text-green-400">{status}</span>}
          </div>
        </motion.form>

        {/* Info */}
        <motion.div
          className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-semibold">Get in touch</h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">Prefer email? Reach us anytime.</p>
          <div className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <div><span className="font-medium">Email:</span> hello@nammaweb.example</div>
            <div><span className="font-medium">Location:</span> Remote / Worldwide</div>
          </div>
          <div className="mt-6 flex gap-3">
            <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800">T</a>
            <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800">G</a>
            <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800">in</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
