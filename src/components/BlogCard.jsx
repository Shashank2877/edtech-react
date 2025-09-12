import React from 'react'
export default function BlogCard({post}) {
  return (
    <article className="border rounded p-4" data-aos="fade-up">
      <h3 className="font-semibold">{post.title}</h3>
      <p className="text-sm text-gray-600 mt-2">{post.excerpt}</p>
      <div className="mt-3 text-xs text-gray-500">{post.date}</div>
    </article>
  )
}
