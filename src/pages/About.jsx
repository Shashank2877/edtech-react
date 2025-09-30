import React, { useState, useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import VideoBackground from '../components/VideoBackground'
import GlassSection from '../components/GlassSection'

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  // Handle mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Trigger animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start('show');
    }
  }, [isInView, controls]);

  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120 } }
  }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const stats = [
    { label: 'Years of Experience', value: '3+', icon: '🎓' },
    { label: 'Projects Completed', value: '50+', icon: '🚀' },
    { label: 'Team Size', value: '10+', icon: '👥' },
    { label: 'Client Satisfaction', value: '100%', icon: '⭐' }
  ]

  const values = [
    { 
      title: 'Practical first', 
      desc: 'We believe in learning by building real projects and shipping outcomes.',
      icon: '🛠️'
    },
    { 
      title: 'Community', 
      desc: 'Supportive learners and mentors who help you stay consistent.',
      icon: '🤝'
    },
    { 
      title: 'Clarity', 
      desc: 'Roadmaps and guidance that reduce noise and keep you focused.',
      icon: '🎯'
    },
    {
      title: 'Innovation',
      desc: 'Embracing cutting-edge technologies and modern learning approaches.',
      icon: '💡'
    }
  ]

  return (
    <div className="min-h-screen relative">
      <VideoBackground />
      {/* Video Background */}
      <div className="fixed inset-0 z-0">
        <VideoBackground />
        <div className="absolute inset-0 bg-[#080B1A]/40 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <section className="max-w-6xl mx-auto px-4 py-12" ref={ref}>
          {/* Hero Section */}
          <GlassSection>
            <div className="p-8 sm:p-12">
              <motion.h1 
                className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#B4A5FF] to-purple-500"
                initial={fadeIn.initial}
                animate={fadeIn.animate}
                transition={fadeIn.transition}
              >
                Transform Your Learning Journey
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-300 max-w-3xl mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                We're revolutionizing education through technology and innovation. Join us in building the future of learning.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.a 
                  href="#mission" 
                  className="px-6 py-3 bg-[#B4A5FF] text-gray-900 rounded-lg hover:bg-indigo-400 transition-all font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Our Mission
                </motion.a>
              </motion.div>
            </div>
          </GlassSection>

          {/* Startup India Certificate */}
          <motion.div 
            className="mt-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <GlassSection>
              <div className="p-3 sm:p-4 hover:scale-[1.02] transition-transform duration-300">
                <img src="/startup-cert.png" alt="Startup India Certificate of Recognition - NAMMA WEB" className="w-full h-auto rounded-md" />
              </div>
            </GlassSection>
          </motion.div>

          {/* Interactive Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
            {stats.map((s, i) => (
              <motion.div 
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassSection>
                  <div className="p-6 text-center">
                    <motion.div
                      className="text-5xl mb-3"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.2, rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 0.3 }}
                    >
                      {s.icon}
                    </motion.div>
                    <motion.div className="text-3xl font-bold text-[#B4A5FF] mb-2">
                      {s.value}
                    </motion.div>
                    <div className="text-sm text-gray-300">{s.label}</div>
                  </div>
                </GlassSection>
              </motion.div>
            ))}
          </div>

          {/* Mission & Values */}
          <div id="mission" className="mt-16 grid md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <GlassSection>
                <div className="p-8">
                  <motion.h2 
                    className="text-3xl font-bold mb-6 text-[#B4A5FF]"
                  >
                    Our Vision & Mission
                  </motion.h2>
                  <motion.div className="space-y-4">
                    <motion.p 
                      className="text-gray-300 leading-relaxed"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="font-semibold text-indigo-400">Vision:</span> To democratize education through technology, making quality learning accessible to everyone, everywhere.
                    </motion.p>
                    <motion.p 
                      className="text-gray-300 leading-relaxed"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <span className="font-semibold text-purple-400">Mission:</span> To create an innovative learning ecosystem that combines cutting-edge technology with effective teaching methodologies.
                    </motion.p>
                  </motion.div>
                </div>
              </GlassSection>
            </motion.div>

            <div className="grid gap-4">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <GlassSection>
                    <div className="p-6">
                      <motion.div 
                        className="text-3xl mb-3"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {v.icon}
                      </motion.div>
                      <h3 className="text-xl font-semibold mb-2 text-[#B4A5FF]">{v.title}</h3>
                      <p className="text-gray-300">{v.desc}</p>
                    </div>
                  </GlassSection>
                </motion.div>
              ))}
            </div>
          </div>

          {/* What We Do */}
          <motion.div 
            className="mt-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-[#B4A5FF]">What We Do</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <GlassSection>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#B4A5FF] mb-4">Web Development</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-300 text-sm flex items-start">
                      <span className="text-indigo-400 mr-2">•</span>
                      Design and develop responsive, user‑friendly, custom websites
                    </li>
                    <li className="text-gray-300 text-sm flex items-start">
                      <span className="text-indigo-400 mr-2">•</span>
                      E‑commerce websites, portfolios, corporate websites, web applications
                    </li>
                  </ul>
                </div>
              </GlassSection>

              <GlassSection>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#B4A5FF] mb-4">Digital Marketing</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-300 text-sm flex items-start">
                      <span className="text-indigo-400 mr-2">•</span>
                      SEO (Search Engine Optimization)
                    </li>
                    <li className="text-gray-300 text-sm flex items-start">
                      <span className="text-indigo-400 mr-2">•</span>
                      Social media marketing and content strategies
                    </li>
                    <li className="text-gray-300 text-sm flex items-start">
                      <span className="text-indigo-400 mr-2">•</span>
                      Ad campaigns via Google Ads, Facebook Ads, and other platforms
                    </li>
                  </ul>
                </div>
              </GlassSection>
            </div>
          </motion.div>

          {/* Contact & Location */}
          <motion.div 
            className="mt-16 grid md:grid-cols-3 gap-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <GlassSection>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#B4A5FF] mb-2">Contact</h3>
                <p className="text-gray-300 text-sm">Email: info@nammaweb.com</p>
                <p className="text-gray-300 text-sm">Phone: 9241527429</p>
              </div>
            </GlassSection>
            
            <GlassSection className="md:col-span-2">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#B4A5FF] mb-2">Location</h3>
                <p className="text-gray-300 text-sm">Nagasandra, Bangalore, Karnataka</p>
                <p className="text-gray-400 text-xs mt-2">Founded by a young entrepreneur</p>
              </div>
            </GlassSection>
          </motion.div>

          {/* Timeline */}
          <motion.div 
            className="mt-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#B4A5FF] mb-6">Journey</h2>
            <ol className="relative border-s border-gray-600">
              {['Founded','Launched first courses','Community milestones'].map((step, i) => (
                <motion.li 
                  key={step} 
                  className="mb-8 ms-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                >
                  <span className="absolute -start-3 mt-1 h-5 w-5 rounded-full border border-indigo-400 bg-[#080B1A]" />
                  <h4 className="font-medium text-[#B4A5FF]">{step}</h4>
                  <p className="text-sm text-gray-300">
                    {i === 0 ? 'Started with a small group of builders.' 
                      : i === 1 ? 'Released project-based paths for web dev.' 
                      : 'Reached thousands of learners across regions.'}
                  </p>
                </motion.li>
              ))}
            </ol>
          </motion.div>

          {/* CTA */}
          <motion.div 
            className="mt-16 text-center pb-12" 
            initial={{opacity: 0, y: 8}} 
            whileInView={{opacity: 1, y: 0}} 
            viewport={{once: true}}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/courses" 
                className="inline-block px-8 py-4 rounded-lg bg-[#B4A5FF] text-gray-900 font-semibold 
                  hover:bg-indigo-400 transition-colors duration-300 shadow-lg"
              >
                Explore Our Courses
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}