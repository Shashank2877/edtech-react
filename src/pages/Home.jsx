import React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import VideoBackground from '../components/VideoBackground'

// Scroll Indicator Component
const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed bottom-8 cursor-pointer z-[100] flex justify-center items-center"
      style={{ 
        left: '50%', 
        transform: 'translateX(calc(-50% - 16px))'
      }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: isVisible ? [1, 0.6, 1] : 0,
        y: isVisible ? [0, 10, 0] : 20
      }}
      transition={{ 
        duration: 1.5,
        repeat: isVisible ? Infinity : 0,
        ease: "easeInOut"
      }}
      onClick={() => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
      }}
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-indigo-400 font-semibold text-lg tracking-wider">
          Scroll
        </span>
        <motion.div
          animate={isVisible ? { y: [0, 8, 0] } : { y: 0 }}
          transition={{
            duration: 1,
            repeat: isVisible ? Infinity : 0,
            ease: "easeInOut"
          }}
        >
          <svg
            className="w-6 h-6 text-indigo-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Glass Card Component
const GlassCard = ({ children, className = "" }) => (
  <div className={`backdrop-blur-lg border border-white/10 ${className}`}>
    {children}
  </div>
)

// Glass Section Component
const GlassSection = ({ children, className = "" }) => (
  <div className={`backdrop-blur-sm ${className}`}>
    {children}
  </div>
)

export default function Home() {
  // State for registration modal
  const [showRegistrationModal, setShowRegistrationModal] = React.useState(false)
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: ''
  })

  // Stats data
  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "24/7", label: "Support Available" },
    { number: "2+", label: "Years Experience" }
  ]

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you can add your form submission logic
    console.log('Registration submitted:', formData)
    alert('Registration submitted successfully! We will contact you soon.')
    setShowRegistrationModal(false)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      education: '',
      experience: ''
    })
  }

  return (
    <div className="min-h-screen text-white relative">
      <VideoBackground />
      <ScrollIndicator />
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          className="w-full max-w-4xl px-6 text-center"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-indigo-400 mb-4">
            Namma Web — Design, Build, Grow Online
          </h1>
          <p className="text-lg text-white/90 mb-6">
            We craft websites, brands, and growth strategies that drive visibility and results.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 rounded bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition-colors"
            >
              Explore
            </button>
            <Link 
              to="/contact" 
              className="px-6 py-3 rounded border border-indigo-400 text-indigo-400 hover:bg-indigo-400/10 transition-colors"
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        {/* Stats Section */}
        <section className="mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="py-6 text-center rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-white/70 mt-1">{stat.label}</div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* About / Intro */}
        <section id="about" className="mt-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">We Help Brands Increase Their Online Sales</h2>
            <p className="text-gray-400 mb-4">
              At Namma Web, we specialize in boosting your brand's visibility and engagement online. Our expert team crafts tailored digital strategies to enhance your website, optimize social media, and drive targeted traffic.
            </p>
            <div className="flex gap-6">
              <div>
                <div className="text-3xl font-bold">99%</div>
                <div className="text-gray-400">Support System</div>
              </div>
              <div>
                <div className="text-3xl font-bold">100%</div>
                <div className="text-gray-400">Friendly Relationship</div>
              </div>
            </div>
            <div className="mt-5">
              <Link 
                to="/about" 
                className="px-4 py-2 rounded-md border border-gray-700 hover:bg-gray-800 transition-colors"
              >
                More About Us
              </Link>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-gray-800 bg-gray-900 hover:scale-105 transition-transform duration-300">
            <h3 className="text-lg font-semibold mb-2">Why You Need Namma Web's Support</h3>
            <p className="text-gray-400">
              We collaborate with you to understand your business needs, design a tailored strategy, develop your solution, and launch it with ongoing monitoring for continuous success.
            </p>
          </div>
        </section>

        {/* Our Expertise */}
        <section className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Our Expertise for You</h2>
          <p className="text-gray-400 mb-6">
            We collaborate with you to understand your business needs, design a tailored strategy, develop your solution, and launch it with ongoing monitoring for continuous success.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Digital Marketing', desc: 'Improve search positions with our expert strategies. Boost rankings, increase visibility, and drive organic traffic.' },
              { title: 'Websites & E-commerce', desc: 'Reach your target market effectively. Identify, engage, and convert your ideal customers with precision.' },
              { title: 'Consultations', desc: 'Unlock success with the best strategy. Achieve your goals, outperform competitors, and maximize results.' }
            ].map(item => (
              <div 
                key={item.title} 
                className="p-6 rounded-xl border border-gray-800 bg-gray-900 hover:scale-105 transition-transform duration-300"
              >
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Website Development', desc: 'Responsive, visually appealing websites optimized for performance.' },
              { title: 'Branding & Marketing', desc: 'Impactful brand identities and growth campaigns.' },
              { title: 'E-Commerce Solutions', desc: 'Scalable stores with secure payments and smooth UX.' },
              { title: 'Consultation Services', desc: 'Expert guidance to streamline operations and adopt innovation.' }
            ].map(item => (
              <div 
                key={item.title} 
                className="p-5 rounded-xl border border-gray-800 bg-gray-900 flex flex-col hover:scale-105 transition-transform duration-300"
              >
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm flex-1">{item.desc}</p>
                <button className="mt-4 self-start px-4 py-2 rounded-md border border-gray-700 hover:bg-gray-800 transition-colors">
                  Let's Start
                </button>
              </div>
            ))}
          </div>
        </section>



        {/* Student Program / Internship */}
        <section id="student-program" className="mt-16 p-6 rounded-xl border border-gray-800 bg-gradient-to-br from-indigo-900/50 to-gray-900 hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2">WEB DEVELOPMENT STUDENT PROGRAM WITH INTERNSHIP</h2>
          <p className="text-gray-400 mb-4">
            The Web Development Student Program with Internship in 2-month that combines learning with real-world projects. Complete the program to gain practical skills and earn a certification. And boost your career!
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <button 
              onClick={() => setShowRegistrationModal(true)}
              className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
            >
              Join Now
            </button>
            <span className="text-gray-500">or</span>
            <Link 
              to="/contact" 
              className="px-4 py-2 rounded-md border border-gray-700 hover:bg-gray-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>
          <p className="mt-4 text-gray-300">
            Start Building Awesome Websites Today — Namma Web ensures professional design, seamless functionality, and optimal performance to enhance your online presence and achieve your goals.
          </p>
        </section>
      </div>

      {/* Registration Modal */}
      <AnimatePresence>
        {showRegistrationModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowRegistrationModal(false)}
          >
            <motion.div
              className="bg-gray-900 rounded-xl p-6 w-full max-w-md border border-gray-700"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">Join Web Development Program</h3>
                <button
                  onClick={() => setShowRegistrationModal(false)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Education Background
                  </label>
                  <select
                    name="education"
                    value={formData.education}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Select your education level</option>
                    <option value="high-school">High School</option>
                    <option value="diploma">Diploma</option>
                    <option value="bachelors">Bachelor's Degree</option>
                    <option value="masters">Master's Degree</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Programming Experience
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Select your experience level</option>
                    <option value="beginner">Complete Beginner</option>
                    <option value="some-knowledge">Some Basic Knowledge</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>

                <div className="flex gap-3 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowRegistrationModal(false)}
                    className="flex-1 px-4 py-2 border border-gray-600 text-gray-300 rounded-md hover:bg-gray-800 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    Submit Registration
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}