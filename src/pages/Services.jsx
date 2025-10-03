import React from 'react'
import { motion } from 'framer-motion'
import GlassSection from '../components/GlassSection'
import VideoBackground from '../components/VideoBackground'
import Footer from '../components/Footer'

export default function Services() {
  const services = [
    {
      title: "SEO & Search Engine Marketing",
      icon: "🔍",
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
      icon: "💻",
      items: [
        "Build user-friendly, responsive, custom websites optimized for all devices",
        "Seamless browsing experience with modern design principles",
        "Website revamp and redesign services",
        "Conversion-focused experiences"
      ]
    },
    {
      title: "E-commerce Solutions",
      icon: "🛍️",
      items: [
        "Creation of engaging e-commerce websites",
        "SEO optimization for product/category pages",
        "Smooth shopping UX: cart, checkout, payments",
        "Maximize conversions and increase profit"
      ]
    },
    {
      title: "Website Maintenance",
      icon: "🔧",
      items: [
        "Ongoing updates, security, performance monitoring",
        "SEO audits, publishing blog posts",
        "Handling customer inquiries",
        "Regular content updates and optimizations"
      ]
    },
    {
      title: "Advertising Solutions",
      icon: "📢",
      items: [
        "Plan and execute strategies to enhance brand visibility",
        "Create promotional materials (online & offline)",
        "Manage ads on Google, Facebook, and other platforms"
      ]
    },
    {
      title: "Data Security",
      icon: "🔒",
      items: [
        "Secure hosting and encrypted communications",
        "Vulnerability assessments",
        "Compliance (GDPR, ISO 27001)"
      ]
    },
    {
      title: "Branding & Design",
      icon: "🎨",
      items: [
        "Logo design, graphics, multimedia",
        "End-to-end brand identity systems",
        "Visual asset creation and management"
      ]
    }
  ];

  return (
    <div className="min-h-screen relative">
      <VideoBackground />
      {/* Video background positioned behind everything */}
      <div className="fixed inset-0 z-0">
        <VideoBackground />
        <div className="absolute inset-0 bg-[#080B1A]/40 pointer-events-none" />
      </div>
      
      {/* Services Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#B4A5FF]">
              Our Services
            </h1>
            <p className="text-xl text-gray-300">
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
                    <div className="text-3xl mb-4 text-[#B4A5FF]">{service.icon}</div>
                    <h2 className="text-xl font-semibold mb-4 text-[#B4A5FF]">
                      {service.title}
                    </h2>
                    <ul className="space-y-2 flex-grow">
                      {service.items.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index * 0.1) + (i * 0.05) }}
                          className="text-[#8B8FA7] text-sm flex items-start leading-relaxed"
                        >
                          <span className="text-[#B4A5FF] mr-2">•</span>
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