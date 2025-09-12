import React from 'react'
import { motion } from 'framer-motion'

export default function CourseCard({course}){
  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      className="group h-full flex flex-col border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-gray-900 theme-transition shadow-sm hover:shadow-md"
      data-aos="fade-up"
    >
      {course.image && (
        <div className="relative h-40 sm:h-44 overflow-hidden">
          <img src={course.image} alt={course.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}
      <div className="p-4 flex-1 flex flex-col">
        <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100 leading-snug">{course.title}</h4>
        <p className="text-sm text-gray-700 dark:text-gray-300 mt-2 leading-relaxed min-h-[72px]">
          {course.desc}
        </p>
        <div className="mt-auto pt-3 flex items-center justify-between">
          <span className="inline-block px-3 py-1 bg-indigo-50 dark:bg-indigo-200/20 text-indigo-700 dark:text-indigo-300 rounded-full text-sm">
            {course.level}
          </span>
        </div>
      </div>
    </motion.article>
  )
}
