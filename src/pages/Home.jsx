import React from 'react'
import { Link } from 'react-router-dom'
import CourseCard from '../components/CourseCard'
import { sampleCourses } from './data'

export default function Home(){
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4" data-aos="fade-right">Build skills with practical courses</h1>
          <p className="text-gray-700 mb-6" data-aos="fade-right">Interactive learning paths, projects, and mentor support to help you land your next role.</p>
          <div className="flex gap-4" data-aos="fade-up">
            <Link to="/courses" className="px-4 py-2 bg-indigo-600 text-white rounded">View Courses</Link>
            <Link to="/contact" className="px-4 py-2 border rounded">Contact Us</Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {sampleCourses.slice(0,3).map(c=> <CourseCard key={c.id} course={c} />)}
        </div>
      </div>
    </section>
  )
}
