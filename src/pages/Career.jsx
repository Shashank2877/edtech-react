import React, { useState } from 'react'
import { motion } from 'framer-motion'
import VideoBackground from '../components/VideoBackground'
import GlassSection from '../components/GlassSection'
import ApplicationForm from '../components/ApplicationForm'

export default function Career(){
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [selectedJob, setSelectedJob] = useState('')

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const roles = [
    {
      title: 'Content Writer',
      responsibilities: [
        'Write clear, engaging, SEO‑optimized copy for websites',
        'Collaborate with design/dev teams to align content with goals',
        'Perform keyword research and apply SEO best practices',
        'Edit and proofread for accuracy and brand voice'
      ],
      qualifications: [
        'Excellent written & verbal communication',
        'Basic knowledge of SEO principles',
        'Creative mindset; adaptable writing styles'
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
    <div className="min-h-screen relative">
      <VideoBackground />
      {/* Video Background */}
      <div className="fixed inset-0 z-0">
        <VideoBackground />
        <div className="absolute inset-0 bg-[#080B1A]/40 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.div 
          className="max-w-7xl mx-auto px-4 pt-16 pb-12 text-center"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#B4A5FF]">
            Join Hands With Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                    <h2 className="text-2xl font-semibold text-[#B4A5FF] mb-4">{role.title}</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-indigo-400 font-medium mb-2">Key Responsibilities</h3>
                        <ul className="space-y-2">
                          {role.responsibilities.map((item) => (
                            <li key={item} className="text-gray-300 text-sm flex items-start">
                              <span className="text-indigo-400 mr-2">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-indigo-400 font-medium mb-2">Qualifications</h3>
                        <ul className="space-y-2">
                          {role.qualifications.map((item) => (
                            <li key={item} className="text-gray-300 text-sm flex items-start">
                              <span className="text-indigo-400 mr-2">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="px-6 pb-6 mt-3">
                      <motion.button
                        className="inline-block px-6 py-3 rounded-lg bg-[#B4A5FF] text-gray-900 font-semibold hover:bg-indigo-400 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          setSelectedJob(role.title)
                          setShowApplicationForm(true)
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
                <p className="text-gray-300 mb-6">
                  2-month hands-on program with real projects. Completing the program earns 
                  a certification and provides a solid career boost.
                </p>
                <motion.a
                  href="https://forms.gle/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-6 py-3 rounded-lg bg-[#B4A5FF] text-gray-900 font-semibold 
                    hover:bg-indigo-400 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply Now
                </motion.a>
              </div>
            </GlassSection>

            <GlassSection>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#B4A5FF] mb-4">Why join?</h3>
                <ul className="space-y-3">
                  <li className="text-gray-300 text-sm flex items-start">
                    <span className="text-indigo-400 mr-2">•</span>
                    Real projects with mentorship
                  </li>
                  <li className="text-gray-300 text-sm flex items-start">
                    <span className="text-indigo-400 mr-2">•</span>
                    Certification on completion
                  </li>
                  <li className="text-gray-300 text-sm flex items-start">
                    <span className="text-indigo-400 mr-2">•</span>
                    Portfolio development and career guidance
                  </li>
                </ul>
              </div>
            </GlassSection>
          </motion.div>
        </div>
      </div>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <ApplicationForm
          jobTitle={selectedJob}
          onClose={() => setShowApplicationForm(false)}
        />
      )}
    </div>
  )
}
