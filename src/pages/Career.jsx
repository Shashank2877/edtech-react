import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GlassSection from '../components/GlassSection'
import Footer from '../components/Footer'

export default function Career(){
  const [showHREmailModal, setShowHREmailModal] = useState(false)
  const [selectedJob, setSelectedJob] = useState('')
  
  // State for student program registration modal
  const [showRegistrationModal, setShowRegistrationModal] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: ''
  })

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
    console.log('Student Program Registration submitted:', formData)
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

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const roles = [
    {
      title: 'SEO Specialist',
      responsibilities: [
        'Conduct comprehensive keyword research and competitive analysis',
        'Optimize website content for search engines and user experience',
        'Perform technical SEO audits and implement improvements',
        'Build high-quality backlinks and manage off-page SEO campaigns',
        'Monitor search engine rankings and provide detailed reports',
        'Stay updated with Google algorithm changes and SEO best practices'
      ],
      qualifications: [
        'Experience with SEO tools (SEMrush, Ahrefs, Google Analytics)',
        'Strong understanding of on-page and technical SEO',
        'Knowledge of HTML, CSS, and website optimization',
        'Excellent analytical and reporting skills'
      ]
    },
    {
      title: 'Content Writer',
      responsibilities: [
        'Write clear, engaging, SEO‑optimized copy for websites',
        'Collaborate with design/dev teams to align content with goals',
        'Perform keyword research and apply SEO best practices',
        'Edit and proofread for accuracy and brand voice',
        'Create compelling blog posts and marketing materials',
        'Develop content strategies for various digital platforms'
      ],
      qualifications: [
        'Excellent written & verbal communication',
        'Basic knowledge of SEO principles',
        'Creative mindset; adaptable writing styles',
        'Experience with content management systems'
      ]
    },
    {
      title: 'UI/UX Designer',
      responsibilities: [
        'Produce wireframes, prototypes, and high‑fidelity mockups',
        'Work with front‑end devs to translate designs into UI',
        'Conduct user research/usability testing to refine designs',
        'Ensure responsive design across devices'
      ],
      qualifications: [
        'Strong communication (writing & speaking)',
        'Basic SEO understanding',
        'Creativity and flexibility in design approach'
      ]
    },
    {
      title: 'SDE Intern',
      responsibilities: [
        'Assist in developing web applications and software solutions',
        'Write clean, maintainable code under senior developer guidance',
        'Participate in code reviews and learn best practices',
        'Help with testing and debugging applications'
      ],
      qualifications: [
        'Basic knowledge of programming languages (Python, Java, JavaScript)',
        'Understanding of data structures and algorithms',
        'Currently pursuing Computer Science or related degree'
      ]
    },
    {
      title: 'Automation Intern',
      responsibilities: [
        'Develop automated testing scripts and frameworks',
        'Assist in setting up CI/CD pipelines',
        'Create automation tools for repetitive tasks',
        'Support quality assurance processes'
      ],
      qualifications: [
        'Basic knowledge of automation tools (Selenium, Cypress)',
        'Understanding of testing methodologies',
        'Familiarity with scripting languages (Python, JavaScript)'
      ]
    },
    {
      title: 'HR Intern',
      responsibilities: [
        'Assist with recruitment and candidate screening',
        'Support employee onboarding and training programs',
        'Help maintain employee records and documentation',
        'Participate in organizing team events and activities'
      ],
      qualifications: [
        'Strong interpersonal and communication skills',
        'Currently pursuing HR, Psychology, or related degree',
        'Interest in talent acquisition and employee relations'
      ]
    },
    {
      title: 'Sales/Ops Intern',
      responsibilities: [
        'Support sales team with lead generation and follow-ups',
        'Assist in client presentations and proposals',
        'Help with operational processes and workflow optimization',
        'Maintain CRM systems and sales databases'
      ],
      qualifications: [
        'Excellent communication and presentation skills',
        'Basic understanding of sales processes',
        'Currently pursuing Business, Marketing, or related degree'
      ]
    },
    {
      title: 'AI Analytics Intern',
      responsibilities: [
        'Assist in data collection, cleaning, and analysis',
        'Support machine learning model development',
        'Create data visualizations and reports',
        'Help with AI research and implementation projects'
      ],
      qualifications: [
        'Basic knowledge of Python, R, or similar data tools',
        'Understanding of statistics and data analysis',
        'Currently pursuing Data Science, AI, or related degree'
      ]
    }
  ]

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-slate-50 via-white to-indigo-50 overflow-hidden"
         style={{ 
           background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 25%, #f1f5f9 50%, #e0e7ff 75%, #f0f4ff 100%)'
         }}>
      {/* Floating geometric shapes background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ 
            filter: 'drop-shadow(0 10px 20px rgba(99, 102, 241, 0.2))',
            transformStyle: 'preserve-3d'
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full opacity-30"
          animate={{
            y: [0, 20, 0],
            x: [0, 10, 0],
            rotateY: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ 
            filter: 'drop-shadow(0 8px 16px rgba(244, 114, 182, 0.2))',
            transformStyle: 'preserve-3d'
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 transform rotate-45 opacity-25"
          animate={{
            rotate: [45, 225, 405],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ 
            filter: 'drop-shadow(0 6px 12px rgba(34, 197, 94, 0.2))'
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20"
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ 
            filter: 'drop-shadow(0 8px 16px rgba(168, 85, 247, 0.2))'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.div 
          className="max-w-7xl mx-auto px-4 pt-24 pb-16 text-center"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Join Hands With Us
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Launch your career with our WEB DEVELOPMENT STUDENT PROGRAM. 
            A 2-month immersive journey combining hands-on learning with real projects, 
            leading to certification and career advancement.
          </p>
        </motion.div>

        {/* Open Roles */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassSection>
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-4">{role.title}</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-blue-600 font-medium mb-2">Key Responsibilities</h3>
                        <ul className="space-y-2">
                          {role.responsibilities.map((item) => (
                            <li key={item} className="text-gray-700 text-sm flex items-start">
                              <span className="text-blue-600 mr-2">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-blue-600 font-medium mb-2">Qualifications</h3>
                        <ul className="space-y-2">
                          {role.qualifications.map((item) => (
                            <li key={item} className="text-gray-700 text-sm flex items-start">
                              <span className="text-blue-600 mr-2">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="px-6 pb-6 mt-3">
                      <motion.button
                        className="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          setSelectedJob(role.title)
                          setShowHREmailModal(true)
                        }}
                      >
                        Apply Now
                      </motion.button>
                    </div>
                  </div>
                </GlassSection>
              </motion.div>
            ))}
          </motion.div>

          {/* Program Info */}
          <motion.div 
            className="mt-12 grid lg:grid-cols-2 gap-6 items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <GlassSection>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-[#B4A5FF] mb-4">
                  Student Program — Summary
                </h2>
                <p className="text-gray-700 mb-6">
                  2-month hands-on program with real projects. Completing the program earns 
                  a certification and provides a solid career boost.
                </p>
                <motion.button
                  onClick={() => setShowRegistrationModal(true)}
                  className="inline-block px-6 py-3 rounded-lg bg-[#B4A5FF] text-gray-900 font-semibold 
                    hover:bg-indigo-400 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply Now
                </motion.button>
              </div>
            </GlassSection>

            <GlassSection>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">Why join?</h3>
                <ul className="space-y-3">
                  <li className="text-gray-900 text-sm flex items-start">
                    <span className="text-indigo-400 mr-2">•</span>
                    Real projects with mentorship
                  </li>
                  <li className="text-gray-900 text-sm flex items-start">
                    <span className="text-indigo-400 mr-2">•</span>
                    Certification on completion
                  </li>
                  <li className="text-gray-900 text-sm flex items-start">
                    <span className="text-indigo-400 mr-2">•</span>
                    Portfolio development and career guidance
                  </li>
                </ul>
              </div>
            </GlassSection>
          </motion.div>
        </div>
      </div>

      {/* HR Email Modal */}
      <AnimatePresence>
        {showHREmailModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowHREmailModal(false)}
          >
            <motion.div
              className="bg-gray-900 rounded-xl p-6 w-full max-w-md border border-gray-700"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">Apply for {selectedJob}</h3>
                <button
                  onClick={() => setShowHREmailModal(false)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="text-center space-y-4">
                <p className="text-gray-300">
                  Please send your resume and cover letter to our HR team:
                </p>
                
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                  <p className="text-sm text-gray-400 mb-2">HR Email:</p>
                  <p className="text-lg text-[#B4A5FF] font-mono break-all">
                    hr.recruitment.nammaweb@outlook.in
                  </p>
                </div>
                
                <motion.button
                  onClick={() => {
                    const subject = encodeURIComponent(`Job Application: ${selectedJob}`)
                    const body = encodeURIComponent(`Hi,\n\nI am interested in applying for the ${selectedJob} position at your company.\n\nPlease find my resume attached.\n\nThank you for your consideration.\n\nBest regards,`)
                    window.open(`mailto:hr.recruitment.nammaweb@outlook.in?subject=${subject}&body=${body}`, '_blank')
                  }}
                  className="w-full px-4 py-2 bg-[#B4A5FF] text-gray-900 font-semibold rounded-lg hover:bg-indigo-400 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Email
                </motion.button>
                
                <button
                  onClick={() => setShowHREmailModal(false)}
                  className="w-full px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Student Program Registration Modal */}
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
                <h3 className="text-xl font-semibold text-white">Join Student Program</h3>
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
      <Footer />
    </div>
  )
}
