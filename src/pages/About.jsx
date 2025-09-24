import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120 } }
  }

  const stats = [
    { label: 'Years of Experience', value: '3+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Team Size', value: '10+' },
    { label: 'Client Satisfaction', value: '100%' }
  ]

  const values = [
    { title: 'Practical first', desc: 'We believe in learning by building real projects and shipping outcomes.' },
    { title: 'Community', desc: 'Supportive learners and mentors who help you stay consistent.' },
    { title: 'Clarity', desc: 'Roadmaps and guidance that reduce noise and keep you focused.' }
  ]

  const team = [
    { name: 'Arun', role: 'Founder', avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=256&auto=format&fit=crop' },
    { name: 'Leena', role: 'Instructor', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop' },
    { name: 'Viv', role: 'Engineer', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=256&auto=format&fit=crop' }
  ]

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <motion.div
        className="rounded-2xl p-8 sm:p-12 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-900 border border-gray-200 dark:border-gray-800"
        variants={fadeUp}
        initial="hidden"
        animate="show"
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">About Namma Web</h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl">Journey with Namma Web, where innovation meets expertise, and discover how we transform ideas into impactful digital solutions for your business.</p>
        <p className="mt-3 text-gray-700 dark:text-gray-300 max-w-3xl">We are a dynamic team of young minds passionate about digital innovation and creativity.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#mission" className="px-5 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">Our Mission</a>
        </div>
      </motion.div>

      {/* Startup India Certificate */}
      <div className="mt-10">
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-3 sm:p-4 hover-zoom">
          <img src="/startup-cert.png" alt="Startup India Certificate of Recognition - NAMMA WEB" className="w-full h-auto rounded-md" />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
        {stats.map((s, i) => (
          <motion.div key={s.label} className="text-center rounded-xl border border-gray-200 dark:border-gray-800 p-5 bg-white dark:bg-gray-900 hover-zoom" initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}}>
            <div className="text-2xl font-bold">{s.value}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Mission & Values */}
      <div id="mission" className="mt-16 grid md:grid-cols-2 gap-10 items-start">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Vision & Mission</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed"><span className="font-medium">Vision:</span> Empower businesses to flourish in the digital realm by providing uniquely tailored websites.</p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3"><span className="font-medium">Mission:</span> Ensure every business can establish a strong online presence by offering personalized websites.</p>
        </motion.div>
        <div className="grid gap-4">
          {[
            { title: 'Integrity & Professionalism', desc: 'We value transparency, reliability, and respect in every engagement.' },
            { title: 'Digital-first Operations', desc: 'We operate online to minimize overhead and pass savings to clients.' },
            { title: 'Customer‑centric', desc: 'Personalized, efficient solutions that prioritize outcomes.' },
            { title: 'Trust & Security', desc: 'Data safety and compliance are non‑negotiable.' }
          ].map((v, i)=> (
            <motion.div
              key={v.title}
              className="p-5 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover-zoom"
              initial={{opacity:0, y:12}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{delay:i*0.05}}
              whileHover={{ y: -4 }}
            >
              <h3 className="font-semibold mb-1">{v.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* What We Do */}
      <div className="mt-16">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">What We Do</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <h3 className="font-semibold mb-2">Web Development</h3>
            <ul className="list-disc ml-5 text-gray-600 dark:text-gray-400 space-y-1 text-sm">
              <li>Design and develop responsive, user‑friendly, custom websites</li>
              <li>E‑commerce websites, portfolios, corporate websites, web applications</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <h3 className="font-semibold mb-2">Digital Marketing</h3>
            <ul className="list-disc ml-5 text-gray-600 dark:text-gray-400 space-y-1 text-sm">
              <li>SEO (Search Engine Optimization)</li>
              <li>Social media marketing</li>
              <li>Content marketing</li>
              <li>Ad campaigns via Google Ads, Facebook Ads, and other platforms</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <h3 className="font-semibold mb-2">Advertising Solutions</h3>
            <ul className="list-disc ml-5 text-gray-600 dark:text-gray-400 space-y-1 text-sm">
              <li>Planning & execution of advertising strategies to enhance brand visibility</li>
              <li>Creation of promotional materials (online & offline)</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <h3 className="font-semibold mb-2">Outsourcing Corporate Services</h3>
            <ul className="list-disc ml-5 text-gray-600 dark:text-gray-400 space-y-1 text-sm">
              <li>Website maintenance</li>
              <li>Software development</li>
              <li>Content management</li>
              <li>General IT outsourcing for businesses</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <h3 className="font-semibold mb-2">Data Security</h3>
            <ul className="list-disc ml-5 text-gray-600 dark:text-gray-400 space-y-1 text-sm">
              <li>Secure hosting and encrypted communications</li>
              <li>Vulnerability assessments</li>
              <li>Compliance (e.g., GDPR, ISO 27001)</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <h3 className="font-semibold mb-2">Branding & Design</h3>
            <ul className="list-disc ml-5 text-gray-600 dark:text-gray-400 space-y-1 text-sm">
              <li>Logo design, graphics, multimedia</li>
              <li>Building brand identity for clients</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Why We Do It */}
      <div className="mt-16">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Why We Do It</h2>
        <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1">
          <li>Empowering SMEs with a competitive digital presence</li>
          <li>Offering affordable solutions without compromising quality</li>
          <li>Enhancing clients’ online presence and ensuring data safety</li>
          <li>Driving innovation and simplifying operations</li>
          <li>Customer‑centric approach with personalized, efficient solutions</li>
          <li>Creating employment opportunities in tech and marketing</li>
        </ul>
      </div>

      {/* Contact & Location */}
      <div className="mt-16 grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">Email: info@nammaweb.com</p>
          <p className="text-gray-700 dark:text-gray-300 text-sm">Phone: 9241527429</p>
        </div>
        <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 md:col-span-2">
          <h3 className="font-semibold mb-2">Location</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">Nagasandra, Bangalore, Karnataka</p>
          <p className="text-gray-600 dark:text-gray-400 text-xs mt-2">Founded by a young entrepreneur</p>
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-16">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Journey</h2>
        <ol className="relative border-s border-gray-200 dark:border-gray-800">
          {['Founded','Launched first courses','Community milestones'].map((step, i)=> (
            <li key={step} className="mb-8 ms-6">
              <span className="absolute -start-3 mt-1 h-5 w-5 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900" />
              <h4 className="font-medium">{step}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{i===0?'Started with a small group of builders.': i===1?'Released project-based paths for web dev.':'Reached thousands of learners across regions.'}</p>
            </li>
          ))}
        </ol>
      </div>


      {/* CTA */}
      <motion.div className="mt-16 text-center" initial={{opacity:0, y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
        <a href="/courses" className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition">Explore Our Courses</a>
      </motion.div>
    </section>
  )
}
