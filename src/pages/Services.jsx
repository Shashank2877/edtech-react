import React from 'react'
import { motion } from 'framer-motion'
import GlassSection from '../components/GlassSection'
import Footer from '../components/Footer'

export default function Services() {
  const services = [
    {
      title: "SEO & Search Engine Marketing",
      icon: "",
      items: [
        "Complete keyword research and SEO strategy development",
        "On-page SEO optimization for higher Google rankings",
        "Technical SEO audits and website performance improvements",
        "Local SEO for businesses to dominate local search results",
        "Link building and off-page SEO campaigns",
        "SEO content writing and optimization"
      ]
    },
    {
      title: "Web Development & Design",
      icon: "",
      items: [
        "Build user-friendly, responsive, custom websites optimized for all devices",
        "Seamless browsing experience with modern design principles",
        "Website revamp and redesign services",
        "Conversion-focused experiences"
      ]
    },
    {
      title: "E-commerce Solutions",
      icon: "",
      items: [
        "Creation of engaging e-commerce websites",
        "SEO optimization for product/category pages",
        "Smooth shopping UX: cart, checkout, payments",
        "Maximize conversions and increase profit"
      ]
    },
    {
      title: "Website Maintenance",
      icon: "",
      items: [
        "Ongoing updates, security, performance monitoring",
        "SEO audits, publishing blog posts",
        "Handling customer inquiries",
        "Regular content updates and optimizations"
      ]
    },
    {
      title: "Advertising Solutions",
      icon: "",
      items: [
        "Plan and execute strategies to enhance brand visibility",
        "Create promotional materials (online & offline)",
        "Manage ads on Google, Facebook, and other platforms"
      ]
    },
    {
      title: "Data Security",
      icon: "",
      items: [
        "Secure hosting and encrypted communications",
        "Vulnerability assessments",
        "Compliance (GDPR, ISO 27001)"
      ]
    },
    {
      title: "Branding & Design",
      icon: "",
      items: [
        "Logo design, graphics, multimedia",
        "End-to-end brand identity systems",
        "Visual asset creation and management"
      ]
    },
    {
      title: "Automation",
      icon: "",
      items: [
        "Business process automation and workflow optimization",
        "Automated testing and deployment pipelines (CI/CD)",
        "Robotic Process Automation (RPA) implementation",
        "Task automation and scheduled operations",
        "Email marketing automation and customer journey mapping",
        "Inventory and supply chain automation"
      ]
    },
    {
      title: "AI driven Solutions",
      icon: "",
      items: [
        "Custom AI chatbots and virtual assistants",
        "Machine learning model development and deployment",
        "Predictive analytics and business intelligence",
        "Natural language processing (NLP) solutions",
        "Computer vision and image recognition systems",
        "AI-powered recommendation engines and personalization"
      ]
    }
  ];

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
      
      {/* Services Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Our Services
            </h1>
            <p className="text-xl text-gray-700">
              Solutions that help you launch, grow, and maintain your digital presence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassSection className="h-full">
                  <div className="p-6 h-full flex flex-col">
                    <div className="text-3xl mb-4 text-blue-600">{service.icon}</div>
                    <h2 className="text-xl font-semibold mb-4 text-blue-600">
                      {service.title}
                    </h2>
                    <ul className="space-y-2 flex-grow">
                      {service.items.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index * 0.1) + (i * 0.05) }}
                          className="text-gray-700 text-sm flex items-start leading-relaxed"
                        >
                          <span className="text-blue-600 mr-2">•</span>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </GlassSection>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}