import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import CourseCard from '../components/CourseCard'
import { sampleCourses } from './data'

export default function Courses(){
  const [level, setLevel] = useState('All')
  const [selected, setSelected] = useState(null)

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced']

  const filtered = useMemo(() => {
    if (level === 'All') return sampleCourses
    return sampleCourses.filter(c => c.level === level)
  }, [level])

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Page header */}
      <div className="mb-6" data-aos="fade-up">
        <h1 className="text-3xl font-bold">Our Courses</h1>
        <p className="text-gray-700 dark:text-gray-300 mt-1">Learn new skills with our interactive courses.</p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-3" data-aos="fade-up">
        {levels.map(l => (
          <button
            key={l}
            onClick={() => setLevel(l)}
            className={(level === l
              ? 'bg-indigo-600 text-white '
              : 'border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 ') +
              'px-4 py-2 rounded-md theme-transition'}
          >
            {l}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
        <AnimatePresence mode="popLayout">
          {filtered.map(c => (
            <motion.div
              key={c.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelected(c)}
              role="button"
              className="cursor-pointer"
            >
              <CourseCard course={c} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* CTA */}
      <motion.div className="mt-12 text-center" initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
        <Link to="/contact" className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition">
          Enroll Now
        </Link>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setSelected(null)} />
            <motion.div
              initial={{ scale: 0.95, y: 10, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 w-full max-w-lg rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{selected.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-2 text-sm">
                    <span className="px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-200/20 text-indigo-700 dark:text-indigo-300">{selected.level}</span>
                    <span className="px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">Self-paced</span>
                    <span className="px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">Certificate</span>
                  </div>
                </div>
                <button onClick={() => setSelected(null)} aria-label="Close" className="h-9 w-9 rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800">×</button>
              </div>
              <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">{selected.desc}</p>
              {selected.image && (
                <img src={selected.image} alt="" className="mt-4 h-40 w-full object-cover rounded-lg" />
              )}
              <div className="mt-6 flex justify-end gap-3">
                <button onClick={() => setSelected(null)} className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">Close</button>
                <Link to="/contact" className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">Enroll Now</Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
