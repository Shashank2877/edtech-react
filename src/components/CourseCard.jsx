import React from 'react'
import { motion } from 'framer-motion'

export default function CourseCard({course}){
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="border rounded-lg p-4" data-aos="fade-up">
      <h4 className="font-semibold text-lg">{course.title}</h4>
      <p className="text-sm text-gray-600 mt-2">{course.desc}</p>
      <div className="mt-3">
        <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm">{course.level}</span>
      </div>
    </motion.div>
  )
}
