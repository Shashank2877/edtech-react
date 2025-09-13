import React from 'react'

export default function BlogCard({ 
  title, 
  excerpt, 
  date, 
  author = "Nammaweb Team",
  category = "General",
  className = "",
  ...props 
}) {
  return (
    <article 
      className={`border border-gray-200 dark:border-gray-800 rounded-lg p-5 bg-white dark:bg-gray-900 theme-transition shadow-sm hover:shadow-md ${className}`} 
      data-aos="fade-up"
      {...props}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-200/20 text-indigo-700 dark:text-indigo-300 text-xs rounded-full">
          {category}
        </span>
      </div>
      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{title}</h3>
      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{excerpt}</p>
      <div className="mt-3 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
        <span>{date}</span>
        <span>By {author}</span>
      </div>
    </article>
  )
}
