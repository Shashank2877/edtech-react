import React, { useState, useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import VideoBackground from '../components/VideoBackground'
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
    { label: 'Years of Experience', value: '3+', icon: '🎓' },
    { label: 'Projects Completed', value: '50+', icon: '🚀' },
    { label: 'Team Members', value: '10+', icon: '👥' },
    { label: 'Client Satisfaction', value: '100%', icon: '⭐' },
    { label: 'Startup Ranking', value: 'Top 50', icon: '🏆' },
    { label: 'Recognition', value: 'Startup India', icon: '🇮🇳' }
  ]

  const services = [
    {
      category: 'AI & Automation',
      icon: '🤖',
      items: ['AI Co-Pilot', 'Business Automation', 'Chatbots (Saraswathi AI)', 'RPA Automation', 'AI in Commerce']
    },
    {
      category: 'Development',
      icon: '💻',
      items: ['Custom Software (SaaS)', 'Mobile App Development', 'E-commerce Solutions', 'AR/VR Integration', 'Static/Dynamic Websites']
    },
    {
      category: 'SEO & Search Marketing',
      icon: '🔍',
      items: ['Keyword Research & Strategy', 'On-Page SEO Optimization', 'Technical SEO Audits', 'Local SEO Services', 'Content SEO Writing', 'Search Engine Rankings']
    },
    {
      category: 'Education & Training',
      icon: '📚',
      items: ['Web Academy (Grades 5-12)', 'Professional Upskilling', 'AI & Coding Bootcamps', 'Cybersecurity Training', 'Data Science Courses']
    },
    {
      category: 'Digital Marketing',
      icon: '📈',
      items: ['Social Media Marketing', 'Email Marketing', 'Google & Meta Ads', 'Marketing Automation', 'PPC Management']
    },
    {
      category: 'Design & Branding',
      icon: '🎨',
      items: ['Logo & Brand Identity', 'UI/UX Design', 'Print Design', 'Motion Graphics', 'Social Media Graphics']
    },
    {
      category: 'Specialized Services',
      icon: '🔧',
      items: ['IT Outsourcing', 'Data Security', 'Voice-over Dubbing', 'Resource Outsourcing', 'GDPR Compliance']
    }
  ]

  const achievements = [
    { title: 'Startup India Recognition', desc: 'Officially recognized by the Government of India', icon: '🏅' },
    { title: 'AICTE Support', desc: 'Supported by All India Council for Technical Education', icon: '🎓' },
    { title: 'Skill India Partnership', desc: 'Partner in national skill development initiatives', icon: '🤝' },
    { title: 'Top 50 Emerging Startup', desc: 'Ranked among India\'s most promising startups', icon: '🌟' }
  ]

  const products = [
    { name: 'Time Tick', category: 'Time Management SaaS', icon: '⏰' },
    { name: 'CoreX ERP', category: 'Enterprise Resource Planning', icon: '📊' },
    { name: 'Maze HCM', category: 'Human Capital Management', icon: '👥' },
    { name: 'Traction', category: 'Vehicle Tracking System', icon: '🚗' },
    { name: 'Vendor Management', category: 'Supply Chain Solution', icon: '📦' },
    { name: 'Safety Management', category: 'Workplace Safety System', icon: '🛡️' },
    { name: 'HSEQ System', category: 'Health, Safety, Environment & Quality', icon: '✅' },
    { name: 'Saraswathi AI', category: 'Educational Chatbot', icon: '🤖' }
  ]

  const courses = [
    { name: 'Data Science', icon: '📊', level: 'Advanced' },
    { name: 'Front-End Development', icon: '💻', level: 'Beginner to Advanced' },
    { name: 'Graphic Design', icon: '🎨', level: 'Creative' },
    { name: 'Tally (Basic)', icon: '💼', level: 'Professional' },
    { name: 'HR Training', icon: '👥', level: 'Management' },
    { name: 'Cybersecurity', icon: '🔒', level: 'Specialized' },
    { name: 'Medical Coding', icon: '🏥', level: 'Healthcare' },
    { name: 'Digital Marketing', icon: '📱', level: 'Marketing' }
  ]

  return (
    <div className="min-h-screen relative">
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
              <motion.div 
                className="text-center mb-6"
                initial={fadeIn.initial}
                animate={fadeIn.animate}
                transition={fadeIn.transition}
              >
                <h1 className="text-4xl sm:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#B4A5FF] to-purple-500">
                  NAMMA WEB LLP
                </h1>
                <p className="text-2xl sm:text-3xl font-semibold text-[#B4A5FF] mb-4">
                  "We create your dreams to reality"
                </p>
                <div className="text-lg text-gray-300 space-y-3">
                  <div className="border-l-4 border-[#B4A5FF] pl-4">
                    <p className="text-[#B4A5FF] font-semibold">FOUNDER & CEO</p>
                    <p className="text-white font-bold">MALLIKARJUN S NANDYAL</p>
                    <motion.a 
                      href="https://zippy-biscuit-5b2987.netlify.app/#hero"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-2 px-4 py-2 bg-gradient-to-r from-[#B4A5FF] to-purple-500 text-white text-sm font-semibold rounded-lg hover:from-purple-500 hover:to-[#B4A5FF] transition-all duration-300 transform hover:scale-105"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="mr-2">👨‍💼</span>
                      View CEO Profile
                    </motion.a>
                  </div>
                  <div className="border-l-4 border-[#B4A5FF] pl-4">
                    <p className="text-[#B4A5FF] font-semibold">MANAGING DIRECTOR</p>
                    <p className="text-white font-bold">P. DAKSHAYANI</p>
                  </div>
                  <p className="mt-4">Headquarters: <span className="text-white font-semibold">Bengaluru, Karnataka, India</span></p>
                </div>
              </motion.div>
              
              <motion.p 
                className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 text-center"
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
                  className="px-6 py-3 bg-[#B4A5FF] text-gray-900 rounded-lg hover:bg-indigo-400 transition-all font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Our Achievements
                </motion.a>
                <motion.a 
                  href="#services" 
                  className="px-6 py-3 border border-[#B4A5FF] text-[#B4A5FF] rounded-lg hover:bg-[#B4A5FF] hover:text-gray-900 transition-all font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Our Services
                </motion.a>
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
                    <div className="text-2xl sm:text-3xl font-bold text-[#B4A5FF] mb-1">{s.value}</div>
                    <div className="text-xs sm:text-sm text-gray-400">{s.label}</div>
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
                <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#B4A5FF] to-purple-500">
                  🏆 Our Achievements & Recognition
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
                      <h3 className="text-lg font-semibold text-[#B4A5FF] mb-2">{achievement.title}</h3>
                      <p className="text-gray-300 text-sm">{achievement.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </GlassSection>
          </motion.section>

          {/* Services Section */}
          <motion.section 
            id="services"
            className="mt-32"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <GlassSection>
              <div className="p-8 sm:p-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#B4A5FF] to-purple-500">
                  🚀 Our Core Services
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service, i) => (
                    <motion.div
                      key={service.category}
                      className="p-6 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      <div className="flex items-center mb-4">
                        <span className="text-3xl mr-3">{service.icon}</span>
                        <h3 className="text-xl font-semibold text-[#B4A5FF]">{service.category}</h3>
                      </div>
                      <ul className="space-y-2">
                        {service.items.map((item, index) => (
                          <li key={index} className="text-gray-300 text-sm flex items-center">
                            <span className="w-2 h-2 bg-[#B4A5FF] rounded-full mr-2 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
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
                <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#B4A5FF] to-purple-500">
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
                      <h4 className="font-semibold text-[#B4A5FF] mb-1">{product.name}</h4>
                      <p className="text-xs text-gray-400">{product.category}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </GlassSection>
          </motion.section>

          {/* Courses Section */}
          <motion.section 
            className="mt-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <GlassSection>
              <div className="p-8 sm:p-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#B4A5FF] to-purple-500">
                  📚 Courses We Offer
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {courses.map((course, i) => (
                    <motion.div
                      key={course.name}
                      className="p-4 rounded-lg bg-gradient-to-br from-indigo-500/5 to-purple-500/5 border border-indigo-500/10 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl mb-2">{course.icon}</div>
                      <h4 className="font-semibold text-[#B4A5FF] mb-1">{course.name}</h4>
                      <p className="text-xs text-gray-400">{course.level}</p>
                    </motion.div>
                  ))}
                </div>
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
                  <h3 className="text-2xl font-bold text-[#B4A5FF] mb-4 flex items-center">
                    🎯 Our Vision
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    To empower businesses and individuals through AI-driven automation and innovation. 
                    We envision a future where technology bridges gaps and creates opportunities for everyone, 
                    making digital transformation accessible and affordable for all.
                  </p>
                </div>
              </GlassSection>
              
              <GlassSection>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#B4A5FF] mb-4 flex items-center">
                    🚀 Our Mission
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
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
                  🤝 Let's Connect
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
                    <span className="text-[#B4A5FF] font-semibold">Website</span>
                    <span className="text-gray-400 text-sm">nammaweb.com</span>
                  </motion.a>
                  
                  <motion.a 
                    href="mailto:info@nammaweb.com"
                    className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-105 transition-transform"
                    whileHover={{ y: -5 }}
                  >
                    <span className="text-2xl mb-2">📧</span>
                    <span className="text-[#B4A5FF] font-semibold">Email</span>
                    <span className="text-gray-400 text-sm">info@nammaweb.com</span>
                  </motion.a>
                  
                  <motion.a 
                    href="https://wa.me/+919241527429" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-lime-500/10 border border-green-500/20 hover:scale-105 transition-transform"
                    whileHover={{ y: -5 }}
                  >
                    <span className="text-2xl mb-2">📱</span>
                    <span className="text-[#B4A5FF] font-semibold">WhatsApp</span>
                    <span className="text-gray-400 text-sm">+91 9241527429</span>
                  </motion.a>
                  
                  <motion.a 
                    href="https://linkedin.com/company/namma-web" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-105 transition-transform"
                    whileHover={{ y: -5 }}
                  >
                    <span className="text-2xl mb-2">💼</span>
                    <span className="text-[#B4A5FF] font-semibold">LinkedIn</span>
                    <span className="text-gray-400 text-sm">Company Page</span>
                  </motion.a>
                  
                  <motion.a 
                    href="https://youtube.com/@NammaWeb1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-red-500/20 hover:scale-105 transition-transform"
                    whileHover={{ y: -5 }}
                  >
                    <span className="text-2xl mb-2">📺</span>
                    <span className="text-[#B4A5FF] font-semibold">YouTube</span>
                    <span className="text-gray-400 text-sm">@NammaWeb1</span>
                  </motion.a>
                </div>
              </div>
            </GlassSection>
          </motion.section>
        </section>
      </div>
      <Footer />
    </div>
  )
}