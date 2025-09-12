import React from 'react'

export default function Contact(){
  return (
    <section className="max-w-2xl mx-auto px-4 py-12" data-aos="fade-up">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-700 mb-4">Fill the form and we'll get back to you.</p>
      <form className="space-y-4">
        <input className="w-full p-3 border rounded" placeholder="Your name" />
        <input className="w-full p-3 border rounded" placeholder="Your email" />
        <textarea className="w-full p-3 border rounded" placeholder="Message"></textarea>
        <button type="button" className="px-4 py-2 bg-indigo-600 text-white rounded">Send</button>
      </form>
    </section>
  )
}
