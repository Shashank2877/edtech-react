import React, { useState, useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import GlassSection from '../components/GlassSection'
import Footer from '../components/Footer'

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
    { label: 'Years of Experience', value: '3+', icon: '' },
    { label: 'Projects Completed', value: '50+', icon: '' },
    { label: 'Team Members', value: '10+', icon: '' },
    { label: 'Client Satisfaction', value: '100%', icon: '' },
    { label: 'Startup Ranking', value: 'Top 50', icon: '' },
    { label: 'Recognition', value: 'Startup India', icon: '' }
  ]

  const services = [
    {
      category: 'AI & Automation',
      icon: '',
      items: ['AI Co-Pilot', 'Business Automation', 'Chatbots (Saraswathi AI)', 'RPA Automation', 'AI in Commerce']
    },
    {
      category: 'Development',
      icon: '',
      items: ['Custom Software (SaaS)', 'Mobile App Development', 'E-commerce Solutions', 'AR/VR Integration', 'Static/Dynamic Websites']
    },
    {
      category: 'SEO & Search Marketing',
      icon: '',
      items: ['Keyword Research & Strategy', 'On-Page SEO Optimization', 'Technical SEO Audits', 'Local SEO Services', 'Content SEO Writing', 'Search Engine Rankings']
    },
    {
      category: 'Education & Training',
      icon: '',
      items: ['Web Academy (Grades 5-12)', 'Professional Upskilling', 'AI & Coding Bootcamps', 'Cybersecurity Training', 'Data Science Courses']
    },
    {
      category: 'Digital Marketing',
      icon: '',
      items: ['Social Media Marketing', 'Email Marketing', 'Google & Meta Ads', 'Marketing Automation', 'PPC Management']
    },
    {
      category: 'Design & Branding',
      icon: '',
      items: ['Logo & Brand Identity', 'UI/UX Design', 'Print Design', 'Motion Graphics', 'Social Media Graphics']
    },
    {
      category: 'Specialized Services',
      icon: '',
      items: ['IT Outsourcing', 'Data Security', 'Voice-over Dubbing', 'Resource Outsourcing', 'GDPR Compliance']
    }
  ]

  const achievements = [
    { title: 'Startup India Recognition', desc: 'Officially recognized by the Government of India', icon: '' },
    { title: 'AICTE Support', desc: 'Supported by All India Council for Technical Education', icon: '' },
    { title: 'Skill India Partnership', desc: 'Partner in national skill development initiatives', icon: '' },
    { title: 'Top 50 Emerging Startup', desc: 'Ranked among India\'s most promising startups', icon: '' }
  ]

  const products = [
    { name: 'Time Tick', category: 'Time Management SaaS', icon: '' },
    { name: 'CoreX ERP', category: 'Enterprise Resource Planning', icon: '' },
    { name: 'Maze HCM', category: 'Human Capital Management', icon: '' },
    { name: 'Traction', category: 'Vehicle Tracking System', icon: '' },
    { name: 'Vendor Management', category: 'Supply Chain Solution', icon: '' },
    { name: 'Safety Management', category: 'Workplace Safety System', icon: '' },
    { name: 'HSEQ System', category: 'Health, Safety, Environment & Quality', icon: '' },
    { name: 'Saraswathi AI', category: 'Educational Chatbot', icon: '' }
  ]

  const courses = [
    { name: 'Data Science', icon: '', level: 'Advanced' },
    { name: 'Front-End Development', icon: '', level: 'Beginner to Advanced' },
    { name: 'Graphic Design', icon: '', level: 'Creative' },
    { name: 'Tally (Basic)', icon: '', level: 'Professional' },
    { name: 'HR Training', icon: '', level: 'Management' },
    { name: 'Cybersecurity', icon: '', level: 'Specialized' },
    { name: 'Medical Coding', icon: '', level: 'Healthcare' },
    { name: 'Digital Marketing', icon: '', level: 'Marketing' }
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
        <section className="max-w-6xl mx-auto px-4 py-12" ref={ref}>
          {/* Hero Section */}
          <GlassSection>
            <div className="p-8 sm:p-12">
              <motion.div 
                className="text-center mb-6"
                initial={fadeIn.initial}
                animate={fadeIn.animate}
                transition={fadeIn.transition}
              >
                <h1 className="text-4xl sm:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  NAMMA WEB LLP
                </h1>
                <p className="text-2xl sm:text-3xl font-semibold text-purple-600 mb-4">
                  "We create your dreams to reality"
                </p>
                <div className="text-lg text-gray-700 space-y-3">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-purple-600 font-semibold">FOUNDER & CEO</p>
                    <p className="text-gray-900 font-bold">MALLIKARJUN S NANDYAL</p>
                    <motion.a 
                      href="https://zippy-biscuit-5b2987.netlify.app/#hero"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-purple-600 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View CEO Profile
                    </motion.a>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-purple-600 font-semibold">MANAGING DIRECTOR</p>
                    <p className="text-gray-900 font-bold">P. DAKSHAYANI</p>
                  </div>
                  <p className="mt-4">Headquarters: <span className="text-gray-900 font-semibold">Bengaluru, Karnataka, India</span></p>
                </div>
              </motion.div>
              
              <motion.p 
                className="text-xl text-gray-700 max-w-4xl mx-auto mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Bengaluru-based team driving digital innovation & creativity. We provide affordable digital solutions for businesses of all sizes, 
                focusing on measurable growth and 100% client satisfaction through AI-driven automation and innovation.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.a 
                  href="#achievements" 
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Our Achievements
                </motion.a>
                <Link to="/services">
                  <motion.div 
                    className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all font-semibold cursor-pointer text-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Our Services
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </GlassSection>

          {/* Interactive Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mt-12">
            {stats.map((s, i) => (
              <motion.div 
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassSection>
                  <div className="p-4 sm:p-6 text-center">
                    <motion.div
                      className="text-3xl sm:text-4xl mb-2"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {s.icon}
                    </motion.div>
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">{s.value}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{s.label}</div>
                  </div>
                </GlassSection>
              </motion.div>
            ))}
          </div>

          {/* Achievements Section */}
          <motion.section 
            id="achievements"
            className="mt-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <GlassSection>
              <div className="p-8 sm:p-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Our Achievements & Recognition
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {achievements.map((achievement, i) => (
                    <motion.div
                      key={achievement.title}
                      className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-500/20"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className="text-4xl mb-4">{achievement.icon}</div>
                      <h3 className="text-lg font-semibold text-blue-600 mb-2">{achievement.title}</h3>
                      <p className="text-gray-700 text-sm">{achievement.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </GlassSection>
          </motion.section>

          {/* Products Section */}
          <motion.section 
            className="mt-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <GlassSection>
              <div className="p-8 sm:p-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  💡 Our SaaS Products
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {products.map((product, i) => (
                    <motion.div
                      key={product.name}
                      className="p-4 rounded-lg bg-gradient-to-br from-purple-500/5 to-indigo-500/5 border border-purple-500/10 text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl mb-2">{product.icon}</div>
                      <h4 className="font-semibold text-blue-600 mb-1">{product.name}</h4>
                      <p className="text-xs text-gray-600">{product.category}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </GlassSection>
          </motion.section>

          {/* Professional Recognition & Certification */}
          <motion.section 
            className="mt-32"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <GlassSection>
              <div className="p-8 sm:p-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Internships & Training Opportunities
                </h2>
                <motion.div 
                  className="mb-12 p-6 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto">
                    <strong className="text-blue-600">We are providing internships and training opportunities for Bharat Electronics Limited (BEL) and First Grade College</strong>
                  </p>
                  <p className="text-gray-500 mt-4">For more information, please contact us using the form below or reach out to our team directly.</p>
                </motion.div>
                {/* Optional: Add a simple contact form here if desired */}
              </div>
            </GlassSection>
          </motion.section>

          {/* Professional Events & Industry Collaborations */}
          <motion.section 
            className="mt-32"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <GlassSection>
              <div className="p-8 sm:p-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Professional Events & Industry Collaborations
                </h2>
                
                {/* BEL Collaboration Description */}
                <motion.div 
                  className="mb-12 p-6 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg text-center max-w-4xl mx-auto">
                    <span className="text-blue-600 font-semibold">Namma Web</span> specializes in end-to-end web development, 
                    application modernization, and enterprise software solutions. As part of our professional engagements, 
                    we have collaborated with <span className="text-blue-600 font-semibold">Bharat Electronics Limited (BEL)</span> to 
                    develop and enhance digital systems that meet stringent security, scalability, and performance standards. 
                    Our work involved full-stack development, database optimization, and UI/UX engineering tailored to BEL's 
                    organizational requirements, reinforcing our credibility in handling mission-critical government and 
                    defense-sector projects.
                  </p>
                </motion.div>

                {/* Professional Event Images */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <motion.div
                    className="group cursor-pointer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="relative overflow-hidden rounded-xl border border-indigo-500/20 shadow-lg">
                      <img 
                        src="/WhatsApp Image 2025-10-04 at 20.32.26_42f5ba8c.jpg" 
                        alt="Professional conference and industry recognition event"
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          e.target.src = '/startup-cert.png';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-white font-semibold text-sm">Professional Conference & Industry Recognition</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="group cursor-pointer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="relative overflow-hidden rounded-xl border border-indigo-500/20 shadow-lg">
                      <img 
                        src="/WhatsApp Image 2025-10-04 at 20.35.17_c82d0e77.jpg" 
                        alt="Academic collaboration and knowledge sharing session"
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          e.target.src = '/startup-cert.png';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-white font-semibold text-sm">Academic Collaboration & Knowledge Sharing</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="group cursor-pointer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="relative overflow-hidden rounded-xl border border-indigo-500/20 shadow-lg">
                      <img 
                        src="/WhatsApp Image 2025-10-04 at 20.36.24_c56100b1.jpg" 
                        alt="Award ceremony and professional achievement recognition"
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          e.target.src = '/startup-cert.png';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-white font-semibold text-sm">Award Ceremony & Professional Achievement</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Collaboration Highlights */}
                <motion.div 
                  className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  {/* Section intentionally left blank until official MoU announcement */}
                </motion.div>
              </div>
            </GlassSection>
          </motion.section>

          {/* Vision & Mission */}
          <motion.section 
            className="mt-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <GlassSection>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-blue-600 mb-4 flex items-center">
                    🎯 Our Vision
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    To empower businesses and individuals through AI-driven automation and innovation. 
                    We envision a future where technology bridges gaps and creates opportunities for everyone, 
                    making digital transformation accessible and affordable for all.
                  </p>
                </div>
              </GlassSection>
              
              <GlassSection>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-blue-600 mb-4 flex items-center">
                    🚀 Our Mission
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    To provide cutting-edge digital solutions that drive measurable growth for our clients. 
                    We focus on security, innovation, and excellence in every project, ensuring 100% client 
                    satisfaction through our expertise in AI, automation, and digital transformation.
                  </p>
                </div>
              </GlassSection>
            </div>
          </motion.section>

          {/* Contact Information */}
          <motion.section 
            className="mt-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <GlassSection>
              <div className="p-8 sm:p-12 text-center">
                <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#B4A5FF] to-purple-500">
                  Let's Connect
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                  <motion.a 
                    href="https://nammaweb.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 hover:scale-105 transition-transform"
                    whileHover={{ y: -5 }}
                  >
                    <span className="text-2xl mb-2">🌐</span>
                    <span className="text-blue-600 font-semibold">Website</span>
                    <span className="text-gray-600 text-sm">nammaweb.com</span>
                  </motion.a>
                  
                  <motion.a 
                    href="mailto:Mallikarjunsnandyal@nammaweb.com"
                    className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-105 transition-transform"
                    whileHover={{ y: -5 }}
                  >
                    <span className="text-2xl mb-2">📧</span>
                    <span className="text-blue-600 font-semibold">Email</span>
                    <span className="text-gray-600 text-sm">Mallikarjunsnandyal
                      @nammaweb.com</span>
                  </motion.a>
                  
                  <motion.a 
                    href="https://wa.me/+919241527429" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-lime-500/10 border border-green-500/20 hover:scale-105 transition-transform"
                    whileHover={{ y: -5 }}
                  >
                    <span className="text-2xl mb-2">📱</span>
                    <span className="text-blue-600 font-semibold">WhatsApp</span>
                    <span className="text-gray-600 text-sm">+91 9241527429</span>
                  </motion.a>
                  
                  <motion.a 
                    href="https://linkedin.com/company/namma-web" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-105 transition-transform"
                    whileHover={{ y: -5 }}
                  >
                    <span className="text-2xl mb-2">💼</span>
                    <span className="text-blue-600 font-semibold">LinkedIn</span>
                    <span className="text-gray-600 text-sm">Company Page</span>
                  </motion.a>
                  
                  <motion.a 
                    href="https://youtube.com/@NammaWeb1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-red-500/20 hover:scale-105 transition-transform"
                    whileHover={{ y: -5 }}
                  >
                    <span className="text-2xl mb-2">📺</span>
                    <span className="text-blue-600 font-semibold">YouTube</span>
                    <span className="text-gray-400 text-sm">@NammaWeb1</span>
                  </motion.a>
                </div>
              </div>
            </GlassSection>
          </motion.section>
        </section>
      </div>
      {/* Startup India Certificate Section - Styled as per screenshot */}
      <section className="flex flex-col items-center justify-center py-16 px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-6 mb-8" style={{ maxWidth: 600 }}>
          <img
            src="/startup-cert.png"
            alt="Startup India Certificate of Recognition"
            className="w-full rounded-xl border border-blue-200 shadow-lg"
            style={{ background: '#fff' }}
          />
        </div>
        <div className="w-full max-w-2xl bg-blue-50 rounded-2xl shadow-lg p-6 mb-8 text-center border border-blue-200">
          <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-2">Official Government Recognition</h2>
          <p className="text-gray-800 mb-2">
            <span className="font-bold">NAMMAWEB LLP</span> is officially recognized as a <span className="font-semibold text-blue-700">Limited Liability Partnership</span> and certified startup by the <br />
            <span className="font-semibold text-blue-700">Government of India - Department for Promotion of Industry and Internal Trade</span>
          </p>
          <p className="text-gray-700 text-sm mb-2">
            Working in 'Education' Industry and 'Skill Development' sector | Certificate No: <span className="font-semibold">DIPP199820</span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-2xl mb-12 justify-center">
          <div className="flex-1 bg-blue-100 rounded-xl p-4 text-center border border-blue-200 shadow">
            <div className="font-semibold text-blue-700 mb-1">Government Certified</div>
            <div className="text-xs text-gray-700">Official Startup Recognition</div>
          </div>
          <div className="flex-1 bg-green-100 rounded-xl p-4 text-center border border-green-200 shadow">
            <div className="font-semibold text-green-700 mb-1">Education Sector</div>
            <div className="text-xs text-gray-700">Skill Development &amp; Training</div>
          </div>
          <div className="flex-1 bg-purple-100 rounded-xl p-4 text-center border border-purple-200 shadow">
            <div className="font-semibold text-purple-700 mb-1">Defense Projects</div>
            <div className="text-xs text-gray-700">BEL Collaboration &amp; Security</div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}