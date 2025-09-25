import React from 'react'
import { motion } from 'framer-motion'
import VideoBackground from '../components/VideoBackground'
import GlassSection from '../components/GlassSection'

export default function Career(){
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
      title: 'Back‑end Developer',
      responsibilities: [
        'Develop server‑side logic, APIs, and databases',
        'Integrate front‑end and back‑end components',
        'Optimize performance for speed and scalability',
        'Test, troubleshoot, and maintain core systems'
      ],
      qualifications: [
        'Basics in PHP/Node.js/Python/Ruby etc.',
        'Familiarity with MySQL/MongoDB/PostgreSQL',
        'Strong problem solving; willingness to learn'
      ]
    },
    {
      title: 'Front‑end Developer',
      responsibilities: [
        'Build responsive sites using HTML, CSS, JavaScript',
        'Implement UI from UX mockups/designs',
        'Ensure cross‑browser/device compatibility',
        'Collaborate with back‑end developers for integration'
      ],
      qualifications: [
        'Solid HTML, CSS, JavaScript',
        'Exposure to React/Vue/Angular is a plus',
        'Keen attention to detail'
      ]
    },
    {
      title: 'Full‑stack Developer',
      responsibilities: [
        'Own both front‑end and back‑end (end‑to‑end)',
        'Combine client & server functionality; assist architecture',
        'Collaborate across teams to meet requirements'
      ],
      qualifications: [
        'Understanding of FE/BE tech (HTML/CSS/JS + Node/PHP/Python etc.)',
        'Knowledge of databases and Git',
        'Strong learning attitude'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-[#080B1A] relative">
      {/* Video Background */}
      <div className="fixed inset-0 z-0">
        <VideoBackground />
        <div className="absolute inset-0 bg-[#080B1A]/80 pointer-events-none" />
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
    </div>
  )
}
