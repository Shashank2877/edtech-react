import React from 'react'
import BlogCard from '../components/BlogCard'
import { samplePosts } from './data'

export default function Blogs(){
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6" data-aos="fade-up">Blog</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {samplePosts.map(p=> <BlogCard key={p.id} post={p} />)}
      </div>
    </section>
  )
}
