import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BlogCard from '../components/BlogCard'
import { samplePosts } from './data'

export default function Blogs(){
  const [selected, setSelected] = useState(null)

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Page header */}
      <div className="mb-6" data-aos="fade-up">
        <h1 className="text-3xl font-bold">Our Blog</h1>
        <p className="text-gray-700 dark:text-gray-300 mt-1">Latest updates, tips, and guides for learners.</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        <AnimatePresence mode="popLayout">
          {samplePosts.map(p => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              whileHover={{ scale: 1.02 }}
              className="cursor-pointer"
              onClick={() => setSelected(p)}
            >
              <BlogCard post={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/50" onClick={()=> setSelected(null)} />
            <motion.div
              initial={{ scale: 0.95, y: 10, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 w-full max-w-2xl rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{selected.title}</h3>
                  <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">{selected.date}</div>
                </div>
                <button onClick={()=> setSelected(null)} aria-label="Close" className="h-9 w-9 rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800">×</button>
              </div>
              <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">{selected.excerpt}</p>
              <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">This is placeholder content for the full blog post. Add sections, images, and code snippets as needed.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
