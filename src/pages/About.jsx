import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120 } }
  }

  const stats = [
    { label: 'Learners', value: '25k+' },
    { label: 'Projects', value: '350+' },
    { label: 'Courses', value: '120+' },
    { label: 'Mentors', value: '80+' }
  ]

  const values = [
    { title: 'Practical first', desc: 'We believe in learning by building real projects and shipping outcomes.' },
    { title: 'Community', desc: 'Supportive learners and mentors who help you stay consistent.' },
    { title: 'Clarity', desc: 'Roadmaps and guidance that reduce noise and keep you focused.' }
  ]

  const team = [
    { name: 'Arun', role: 'Founder', avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=256&auto=format&fit=crop' },
    { name: 'Leena', role: 'Instructor', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop' },
    { name: 'Viv', role: 'Engineer', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=256&auto=format&fit=crop' }
  ]

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <motion.div
        className="rounded-2xl p-8 sm:p-12 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-900 border border-gray-200 dark:border-gray-800"
        variants={fadeUp}
        initial="hidden"
        animate="show"
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">About Us</h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl">Empowering learners with interactive online courses.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#mission" className="px-5 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">Our Mission</a>
          <a href="#team" className="px-5 py-3 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition">Meet the Team</a>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
        {stats.map((s, i) => (
          <motion.div key={s.label} className="text-center rounded-xl border border-gray-200 dark:border-gray-800 p-5 bg-white dark:bg-gray-900" initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}}>
            <div className="text-2xl font-bold">{s.value}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Mission & Values */}
      <div id="mission" className="mt-16 grid md:grid-cols-2 gap-10 items-start">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Mission & Vision</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed"><span className="font-medium">Mission:</span> To make high-quality education accessible to everyone, everywhere.</p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3"><span className="font-medium">Vision:</span> To empower learners to achieve their goals with interactive online courses.</p>
        </motion.div>
        <div className="grid gap-4">
          {[
            { title: 'Expert instructors', desc: 'Learn from practitioners with real-world experience.' },
            { title: 'Hands-on projects', desc: 'Build, ship, and showcase portfolio-ready work.' },
            { title: 'Flexible learning', desc: 'Self-paced lessons on desktop, tablet, and mobile.' },
            { title: 'Community support', desc: 'Get feedback and stay accountable with peers and mentors.' }
          ].map((v, i)=> (
            <motion.div
              key={v.title}
              className="p-5 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-md transition-shadow"
              initial={{opacity:0, y:12}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{delay:i*0.05}}
              whileHover={{ y: -4 }}
            >
              <h3 className="font-semibold mb-1">{v.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-16">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Journey</h2>
        <ol className="relative border-s border-gray-200 dark:border-gray-800">
          {['Founded','Launched first courses','Community milestones'].map((step, i)=> (
            <li key={step} className="mb-8 ms-6">
              <span className="absolute -start-3 mt-1 h-5 w-5 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900" />
              <h4 className="font-medium">{step}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{i===0?'Started with a small group of builders.': i===1?'Released project-based paths for web dev.':'Reached thousands of learners across regions.'}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Team */}
      <div id="team" className="mt-16">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {team.map((m, i)=> (
            <motion.div key={m.name} className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-center" initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}}>
              <img src={m.avatar} alt={m.name} className="h-16 w-16 rounded-full mx-auto object-cover" />
              <div className="mt-3 font-medium">{m.name}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{m.role}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div className="mt-16 text-center" initial={{opacity:0, y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
        <a href="/courses" className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition">Explore Our Courses</a>
      </motion.div>
    </section>
  )
}
