import React from 'react'
export default function BlogCard({post}) {
  return (
    <article className="border border-gray-200 dark:border-gray-800 rounded-lg p-5 bg-white dark:bg-gray-900 theme-transition shadow-sm hover:shadow-md" data-aos="fade-up">
      <h3 className="font-semibold text-gray-900 dark:text-gray-100">{post.title}</h3>
      <p className="text-sm text-gray-700 dark:text-gray-300 mt-2 leading-relaxed">{post.excerpt}</p>
      <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">{post.date}</div>
    </article>
  )
}
