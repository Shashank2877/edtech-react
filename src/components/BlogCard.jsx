import React from 'react'
import { motion } from 'framer-motion'

export default function BlogCard({ 
  title, 
  excerpt, 
  date, 
  author = "EdTech Team",
  category = "General",
  image,
  className = "",
  index = 0,
  ...props 
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className={`relative rounded-xl border border-white/10 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 backdrop-blur-lg overflow-hidden group ${className}`}
      {...props}
    >
      {image && (
        <div className="aspect-video w-full overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm">
            {category}
          </span>
        </div>

        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>

        <p className="text-gray-300 mb-4 line-clamp-2">
          {excerpt}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">{date}</span>
          <span className="text-sm text-gray-400">By {author}</span>
        </div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.article>
  )
}
