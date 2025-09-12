import React from 'react'
import CourseCard from '../components/CourseCard'
import { sampleCourses } from './data'

export default function Courses(){
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6" data-aos="fade-up">Courses Offered</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {sampleCourses.map(c=> <CourseCard key={c.id} course={c} />)}
      </div>
    </section>
  )
}
