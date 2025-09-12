import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import CourseCard from '../components/CourseCard'
import { sampleCourses, sampleTestimonials } from './data'

export default function Home(){
  const [openIndex, setOpenIndex] = useState(null)

  const heroContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120 } }
  }

  const features = [
    { title: 'Project-based Learning', desc: 'Build real apps and portfolios with hands-on projects.' },
    { title: 'Mentor Support', desc: 'Get guidance from industry experts on your journey.' },
    { title: 'Career Paths', desc: 'Curated roadmaps from beginner to job-ready.' },
    { title: 'Flexible & Self-paced', desc: 'Learn anytime with bite-sized lessons and quizzes.' }
  ]

  const faqs = [
    { q: 'How do I start a course?', a: 'Browse our catalog, open a course page, and click Enroll to begin instantly.' },
    { q: 'Do courses include certificates?', a: 'Yes, you receive a shareable certificate upon completion of each course.' },
    { q: 'Can I learn on mobile?', a: 'Absolutely. The platform is responsive and works great on phones and tablets.' }
  ]

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <motion.div
        id="hero"
        className="relative grid md:grid-cols-2 gap-10 items-center"
        variants={heroContainer}
        initial="hidden"
        animate="show"
      >
        {/* Subtle decorative pattern in the hero */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <svg className="absolute right-0 top-0 h-48 w-48 opacity-30 text-indigo-200 dark:text-indigo-900" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="200" height="200" fill="url(#dots)" />
          </svg>
        </div>

        <div>
          <motion.h1
            className="text-4xl sm:text-5xl font-bold mb-4 leading-tight"
            variants={fadeUp}
            data-aos="fade-right"
          >
            Build skills with practical courses
          </motion.h1>
          <motion.p className="text-gray-700 dark:text-gray-300 mb-6" variants={fadeUp} data-aos="fade-right">
            Interactive learning paths, projects, and mentor support to help you land your next role.
          </motion.p>
          <motion.div className="flex flex-wrap gap-4" variants={fadeUp} data-aos="fade-up">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link to="/courses" className="px-5 py-3 bg-indigo-600 text-white rounded-md shadow-md hover:shadow-lg hover:bg-indigo-700 transition">
                View Courses
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link to="/contact" className="px-5 py-3 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                Join Now
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch" variants={fadeUp}>
          {sampleCourses.slice(0,3).map(c=> (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: 'spring', stiffness: 140 }}
            >
              <CourseCard course={c} />
            </motion.div>
          ))}
        </motion.div>

        {/* Floating decorative icons */}
        <motion.div
          aria-hidden
          className="hidden md:block absolute -z-10 left-1/2 -top-6"
          initial={{ y: 0 }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-indigo-400/60 dark:text-indigo-300/40">
            <path d="M12 2l2.2 5.6L20 10l-5.6 2.2L12 18l-2.2-5.8L4 10l5.8-2.4L12 2z" />
          </svg>
        </motion.div>
        <motion.div
          aria-hidden
          className="hidden md:block absolute -z-10 right-4 bottom-0"
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-pink-400/60 dark:text-pink-300/40">
            <circle cx="12" cy="12" r="9" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Features */}
      <div id="features" className="mt-16">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6" data-aos="fade-up">Why learn with us</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="p-5 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
            >
              <div className="w-10 h-10 mb-3 rounded bg-indigo-100 text-indigo-700 dark:bg-indigo-200/20 dark:text-indigo-300 flex items-center justify-center">
                {/* simple spark icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2l2.2 5.6L20 10l-5.6 2.2L12 18l-2.2-5.8L4 10l5.8-2.4L12 2z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div id="testimonials" className="mt-16">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6" data-aos="fade-up">What learners say</h2>
        <TestimonialsCarousel items={sampleTestimonials} />
      </div>

      {/* FAQ */}
      <div id="faq" className="mt-16 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4" data-aos="fade-up">Frequently asked questions</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6" data-aos="fade-up">Quick answers about courses, certification, and learning experience.</p>
          <div className="divide-y divide-gray-200 dark:divide-gray-800 rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            {faqs.map((item, idx) => {
              const isOpen = openIndex === idx
              return (
                <div key={item.q}>
                  <button
                    className="w-full flex items-center justify-between text-left px-4 py-4 hover:bg-gray-50 dark:hover:bg-gray-800"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium">{item.q}</span>
                    <motion.span
                      initial={false}
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                      className="ml-3 text-gray-500"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </motion.span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    className="overflow-hidden px-4"
                  >
                    <div className="pb-4 text-gray-600 dark:text-gray-400 text-sm">{item.a}</div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Card */}
        <motion.div
          className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-900"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-2">Start learning today</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Pick a path and complete your first lesson in minutes.</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/courses" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">Explore Courses</Link>
            <Link to="/about" className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition">How it works</Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function TestimonialsCarousel({ items }){
  const [index, setIndex] = React.useState(0)
  const [direction, setDirection] = React.useState(0)

  React.useEffect(() => {
    const id = setInterval(() => {
      setDirection(1)
      setIndex((prev) => (prev + 1) % items.length)
    }, 4000)
    return () => clearInterval(id)
  }, [items.length])

  const next = () => { setDirection(1); setIndex((i)=> (i + 1) % items.length) }
  const prev = () => { setDirection(-1); setIndex((i)=> (i - 1 + items.length) % items.length) }

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -40 : 40, opacity: 0 })
  }

  const t = items[index]

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <motion.div
          key={t.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
        >
          <div className="flex items-start gap-4">
            {t.avatar && (
              <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
            )}
            <div>
              <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed">“{t.quote}”</blockquote>
              <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                <span className="font-medium text-gray-900 dark:text-gray-100">{t.name}</span> • {t.role}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <button onClick={prev} className="px-3 py-2 rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 theme-transition">Prev</button>
        <div className="flex gap-2">
          {items.map((_, i) => (
            <span key={i} className={"h-2 w-2 rounded-full " + (i === index ? 'bg-indigo-600' : 'bg-gray-300 dark:bg-gray-700')}></span>
          ))}
        </div>
        <button onClick={next} className="px-3 py-2 rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 theme-transition">Next</button>
      </div>
    </div>
  )
}
