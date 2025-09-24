import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import anime from 'animejs/lib/anime.es.js'

export default function Home(){
  const [openIndex, setOpenIndex] = useState(null)
  const [introVisible, setIntroVisible] = useState(true)
  const touchStartYRef = useRef(null)

  useEffect(() => {
    if (!introVisible) return
    // Animate N from left
    anime({
      targets: '#anime-letter-n',
      translateX: ['-52vw', 0],
      opacity: [0.9, 1],
      duration: 900,
      easing: 'easeOutQuad'
    })
    // Animate W from right
    anime({
      targets: '#anime-letter-w',
      translateX: ['52vw', 0],
      opacity: [0.9, 1],
      duration: 900,
      easing: 'easeOutQuad'
    })
    // Fade + scale NAMMA WEB in slightly after letters
    anime({
      targets: '#anime-namma-web',
      opacity: [0, 1],
      scale: [0.95, 1],
      delay: 250,
      duration: 500,
      easing: 'easeOutCubic'
    })
  }, [introVisible])

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
      {/* Intro NW full-screen animation */}
      <AnimatePresence>
        {introVisible && (
          <motion.div
            key="nw-intro"
            className="fixed inset-0 z-40 flex items-center justify-center"
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', stiffness: 140, damping: 18, bounce: 0.25, duration: 0.9 }}
            onWheel={() => {
              setIntroVisible(false)
              setTimeout(() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
            }}
            onTouchStart={(e) => {
              touchStartYRef.current = e.touches[0].clientY
            }}
            onTouchMove={(e) => {
              if (touchStartYRef.current == null) return
              const dy = e.touches[0].clientY - touchStartYRef.current
              // Only upward swipe (negative dy) triggers dismissal
              if (dy < -24) {
                setIntroVisible(false)
                setTimeout(() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
                touchStartYRef.current = null
              }
            }}
          >
            {/* Split background */}
            <div className="absolute inset-0 overflow-hidden">
              {/* animated gradient background layer */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#022c22,transparent_40%),radial-gradient(circle_at_80%_30%,#1f2937,transparent_40%),radial-gradient(circle_at_50%_80%,#0e7490,transparent_40%)] animate-[bgShift_12s_ease-in-out_infinite] opacity-40" />
              <div className="absolute inset-y-0 left-0 w-1/2 bg-black/95" />
              <div className="absolute inset-y-0 right-0 w-1/2 bg-white/95" />
            </div>

            {/* ABOUT vertical badge */}
            <div className="absolute left-[4.5rem] top-1/2 -translate-y-1/2 z-40 select-none">
              <div className="bg-[#6b1e1e] text-white px-3 py-2 rounded-sm font-semibold tracking-wide rotate-90 shadow">
                ABOUT
              </div>
            </div>

            {/* Clickable foreground container */}
            <button
              onClick={() => {
                setIntroVisible(false)
                document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="relative select-none outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 rounded"
              aria-label="Explore Namma Web"
            >
              <div className="relative">
                {/* N from left */}
                <span id="anime-letter-n" className="inline-block align-top drop-shadow-[0_10px_25px_rgba(0,0,0,0.25)]" style={{ color: '#007A78' }}>
                  <span className="text-[34vw] sm:text-[26vw] leading-none font-extrabold">N</span>
                </span>

                {/* W from right */}
                <span id="anime-letter-w" className="inline-block align-top drop-shadow-[0_10px_25px_rgba(0,0,0,0.25)]" style={{ color: '#007A78' }}>
                  <span className="text-[34vw] sm:text-[26vw] leading-none font-extrabold">W</span>
                </span>

                {/* Center NAMMA WEB text */}
                <div id="anime-namma-web" className="absolute inset-0 z-30 flex items-center px-[6vw] pointer-events-none opacity-0 scale-95">
                  <div className="w-1/2 pr-[2vw] overflow-hidden flex justify-end">
                    <span className="text-white tracking-[0.6em] text-[6vw] sm:text-[3.2vw] font-bold drop-shadow-[0_2px_8px_rgba(255,255,255,0.35)]">NAMMA</span>
                  </div>
                  <div className="w-1/2 pl-[2vw] overflow-hidden flex justify-start">
                    <span className="text-black tracking-[0.6em] text-[6vw] sm:text-[3.2vw] font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">WEB</span>
                  </div>
                </div>
              </div>
            </button>

            {/* Explore button centered bottom */}
            <div className="absolute bottom-10 sm:bottom-14">
              <button
                onClick={() => {
                  setIntroVisible(false)
                  document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className="px-5 py-2 rounded-md bg-[#6b1e1e] text-white text-sm shadow-md hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#6b1e1e]"
              >EXPLORE MORE</button>
            </div>

            {/* Scroll indicator (bouncing) */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none" aria-hidden>
              <div className="flex flex-col items-center gap-1 animate-bounce">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
                <div className="h-6 w-3 rounded-full border border-purple-400/70 flex items-start justify-center p-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-300/90" />
                </div>
              </div>
            </div>

            {/* Field labels with hairlines */}
            <div className="pointer-events-auto hidden sm:block">
              <div className="absolute top-10 sm:top-16 left-[20vw] sm:left-[26vw] flex items-center gap-3">
                <span className="h-[1px] w-24 bg-white/70" />
                <a href="#" onClick={(e)=> e.stopPropagation()} className="text-white font-semibold tracking-wide">WEBSITE</a>
              </div>
              <div className="absolute top-10 sm:top-16 right-[12vw] sm:right-[16vw] flex items-center gap-3">
                <span className="h-[1px] w-24 bg-black/70" />
                <a href="#" onClick={(e)=> e.stopPropagation()} className="text-black font-semibold tracking-wide">GRAPHIC DESIGN</a>
              </div>
              <a href="#" onClick={(e)=> e.stopPropagation()} className="absolute bottom-24 left-[18vw] sm:left-[22vw] text-white font-semibold tracking-wide">APP DEVELOPMENT</a>
              <a href="#" onClick={(e)=> e.stopPropagation()} className="absolute bottom-24 right-[8vw] sm:right-[10vw] text-black font-semibold tracking-wide">DIGITAL MARKETING</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <motion.div
        id="hero"
        className="relative grid md:grid-cols-2 gap-10 items-center"
        variants={heroContainer}
        initial="hidden"
        animate="show"
      >
        <div>
          <motion.h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight" variants={fadeUp}>
            Namma Web — Design, Build, and Grow Online
          </motion.h1>
          <motion.p className="text-gray-700 dark:text-gray-300 mb-6" variants={fadeUp}>
            We craft websites, brands, and growth strategies that drive visibility and results.
          </motion.p>
          <motion.div className="flex flex-wrap gap-4" variants={fadeUp}>
            <button onClick={()=>document.getElementById('about')?.scrollIntoView({behavior:'smooth'})} className="px-5 py-3 bg-indigo-600 text-white rounded-md shadow-md hover:shadow-lg hover:bg-indigo-700 transition">Explore More</button>
            <Link to="/contact" className="px-5 py-3 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition">Get a Quote</Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Intro / Tagline & Trust */}
      <section id="tagline" className="mt-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">NammaWeb</h2>
        <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">The Best Institute For Java Full Stack Developer Course</p>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Trusted by over 75,000+ students across India</p>
        <div className="mt-5 flex items-center justify-center gap-3">
          <Link to="/courses" className="px-5 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">Course</Link>
          <a href="#student-program" className="px-5 py-2 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">Internship</a>
        </div>
      </section>

      {/* About / Intro */}
      <section id="about" className="mt-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">We Help Brands Increase Their Online Sales</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">At Namma Web, we specialize in boosting your brand’s visibility and engagement online. Our expert team crafts tailored digital strategies to enhance your website, optimize social media, and drive targeted traffic.</p>
          <div className="flex gap-6">
            <div>
              <div className="text-3xl font-bold">99%</div>
              <div className="text-gray-600 dark:text-gray-400">Support System</div>
            </div>
            <div>
              <div className="text-3xl font-bold">100%</div>
              <div className="text-gray-600 dark:text-gray-400">Friendly Relationship</div>
            </div>
          </div>
          <div className="mt-5">
            <Link to="/about" className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">More About Us</Link>
          </div>
        </div>
        <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover-zoom">
          <h3 className="text-lg font-semibold mb-2">Why You Need Namma Web's Support</h3>
          <p className="text-gray-600 dark:text-gray-400">We collaborate with you to understand your business needs, design a tailored strategy, develop your solution, and launch it with ongoing monitoring for continuous success.</p>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="mt-16">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Our Expertise for You</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">We collaborate with you to understand your business needs, design a tailored strategy, develop your solution, and launch it with ongoing monitoring for continuous success.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {title:'Digital Marketing', desc:'Improve search positions with our expert strategies. Boost rankings, increase visibility, and drive organic traffic.'},
            {title:'Websites & E-commerce', desc:'Reach your target market effectively. Identify, engage, and convert your ideal customers with precision.'},
            {title:'Consultations', desc:'Unlock success with the best strategy. Achieve your goals, outperform competitors, and maximize results.'}
          ].map(item=> (
            <div key={item.title} className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover-zoom">
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mt-16">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {title:'Website Development', desc:'Responsive, visually appealing websites optimized for performance.'},
            {title:'Branding & Marketing', desc:'Impactful brand identities and growth campaigns.'},
            {title:'E-Commerce Solutions', desc:'Scalable stores with secure payments and smooth UX.'},
            {title:'Consultation Services', desc:'Expert guidance to streamline operations and adopt innovation.'}
          ].map(item=> (
            <div key={item.title} className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col hover-zoom">
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm flex-1">{item.desc}</p>
              <button className="mt-4 self-start px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">Let’s Start</button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us (Packages) */}
      <section className="mt-16">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Packages</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover-zoom">
            <h3 className="text-xl font-semibold mb-1">Starter</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">₹5999 (One Time) • Excluding Hosting & Domain</p>
            <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc ml-5 space-y-1 mb-4">
              <li>Landing page</li>
              <li>On Page SEO</li>
              <li>User Friendly & Attractive</li>
              <li>2 Month Support</li>
            </ul>
            <button className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">Let’s Start</button>
          </div>
          <div className="p-6 rounded-xl border-2 border-indigo-600 bg-white dark:bg-gray-900 hover-zoom">
            <div className="inline-block text-xs px-2 py-1 rounded bg-indigo-100 text-indigo-700 mb-2">Best Choice</div>
            <h3 className="text-xl font-semibold mb-1">Startup</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">₹16999 (One Time) • Excluding Hosting & Domain</p>
            <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc ml-5 space-y-1 mb-4">
              <li>5–7 Pages</li>
              <li>On Page SEO & Branding Support</li>
              <li>Premium Design</li>
              <li>5 Month Support</li>
            </ul>
            <button className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">Let’s Start</button>
          </div>
          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover-zoom">
            <h3 className="text-xl font-semibold mb-1">Enterprise</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Contact the Team • Billed Yearly • Includes Hosting & Domain</p>
            <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc ml-5 space-y-1 mb-4">
              <li>Unlimited Pages</li>
              <li>Branding & Marketing</li>
              <li>Premium Design</li>
              <li>1 Year Support</li>
            </ul>
            <Link to="/contact" className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">Contact</Link>
          </div>
        </div>
      </section>

      {/* Student Program / Internship */}
      <section id="student-program" className="mt-16 p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-900 hover-zoom">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">WEB DEVELOPMENT STUDENT PROGRAM WITH INTERNSHIP</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">The Web Development Student Program with Internship in 2-month that combines learning with real-world projects. Complete the program to gain practical skills and earn a certification. And boost your career!</p>
        <div className="flex flex-wrap items-center gap-3">
          <a href="https://forms.gle/" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">Join Now</a>
          <span className="text-gray-500">or</span>
          <Link to="/contact" className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">Contact Us</Link>
        </div>
        <p className="mt-4 text-gray-700 dark:text-gray-300">Start Building Awesome Websites Today — Namma Web ensures professional design, seamless functionality, and optimal performance to enhance your online presence and achieve your goals.</p>
      </section>
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
