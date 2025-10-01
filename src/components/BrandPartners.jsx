import React from 'react'
import { motion } from 'framer-motion'

const BrandPartners = () => {
  const partners = [
    { name: "Google", color: "text-blue-600" },
    { name: "Microsoft", color: "text-green-600" },
    { name: "Amazon", color: "text-orange-500" },
    { name: "Meta", color: "text-blue-500" },
    { name: "IBM", color: "text-blue-700" },
    { name: "Stanford", color: "text-red-600" },
    { name: "MIT", color: "text-gray-800" },
    { name: "Harvard", color: "text-red-700" }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
            NammaWeb collaborates with{" "}
            <span className="text-blue-600 font-bold">350+ leading universities and companies</span>
          </h2>
        </motion.div>

        {/* Animated logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className={`text-2xl md:text-3xl font-bold ${partner.color} transition-all duration-300 hover:opacity-80`}>
                {partner.name}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">100M+</div>
            <div className="text-gray-600">Learners worldwide</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-green-600 mb-2">7,000+</div>
            <div className="text-gray-600">Courses available</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-purple-600 mb-2">350+</div>
            <div className="text-gray-600">University partners</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BrandPartners