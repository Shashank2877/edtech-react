import React from 'react'
export default function About(){
  return (
    <section className="max-w-4xl mx-auto px-4 py-12" data-aos="fade-up">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-gray-700">EdTech is a demo platform built to showcase a responsive React + Tailwind site with animations and routing. Use this starter to extend features.</p>
      <ul className="mt-6 list-disc ml-6 text-gray-700">
        <li>Interactive courses</li>
        <li>Mentor support</li>
        <li>Project-based learning</li>
      </ul>
    </section>
  )
}
