import React from 'react'

export default function Career(){
  const card = "p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover-zoom"

  const roles = [
    {
      title: 'Content Writer',
      responsibilities: [
        'Write clear, engaging, SEO‑optimized copy for websites',
        'Collaborate with design/dev teams to align content with goals',
        'Perform keyword research and apply SEO best practices',
        'Edit and proofread for accuracy and brand voice'
      ],
      qualifications: [
        'Excellent written & verbal communication',
        'Basic knowledge of SEO principles',
        'Creative mindset; adaptable writing styles'
      ]
    },
    {
      title: 'UI/UX Designer',
      responsibilities: [
        'Produce wireframes, prototypes, and high‑fidelity mockups',
        'Work with front‑end devs to translate designs into UI',
        'Conduct user research/usability testing to refine designs',
        'Ensure responsive design across devices'
      ],
      qualifications: [
        'Strong communication (writing & speaking)',
        'Basic SEO understanding',
        'Creativity and flexibility in design approach'
      ]
    },
    {
      title: 'Back‑end Developer',
      responsibilities: [
        'Develop server‑side logic, APIs, and databases',
        'Integrate front‑end and back‑end components',
        'Optimize performance for speed and scalability',
        'Test, troubleshoot, and maintain core systems'
      ],
      qualifications: [
        'Basics in PHP/Node.js/Python/Ruby etc.',
        'Familiarity with MySQL/MongoDB/PostgreSQL',
        'Strong problem solving; willingness to learn'
      ]
    },
    {
      title: 'Front‑end Developer',
      responsibilities: [
        'Build responsive sites using HTML, CSS, JavaScript',
        'Implement UI from UX mockups/designs',
        'Ensure cross‑browser/device compatibility',
        'Collaborate with back‑end developers for integration'
      ],
      qualifications: [
        'Solid HTML, CSS, JavaScript',
        'Exposure to React/Vue/Angular is a plus',
        'Keen attention to detail'
      ]
    },
    {
      title: 'Full‑stack Developer',
      responsibilities: [
        'Own both front‑end and back‑end (end‑to‑end)',
        'Combine client & server functionality; assist architecture',
        'Collaborate across teams to meet requirements'
      ],
      qualifications: [
        'Understanding of FE/BE tech (HTML/CSS/JS + Node/PHP/Python etc.)',
        'Knowledge of databases and Git',
        'Strong learning attitude'
      ]
    }
  ]

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <h1 className="text-3xl font-bold">Join Hands With Us</h1>
      <p className="mt-2 text-gray-700 dark:text-gray-300">WEB DEVELOPMENT STUDENT PROGRAM WITH INTERNSHIP — a 2‑month program combining learning + real projects, culminating in a certification and career boost.</p>

      {/* Open Roles */}
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {roles.map((r)=> (
          <div key={r.title} className={card}>
            <h2 className="text-xl font-semibold">{r.title}</h2>
            <div className="mt-3">
              <h3 className="font-medium">Key Responsibilities</h3>
              <ul className="list-disc ml-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                {r.responsibilities.map((it)=> <li key={it}>{it}</li>)}
              </ul>
            </div>
            <div className="mt-3">
              <h3 className="font-medium">Qualifications</h3>
              <ul className="list-disc ml-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                {r.qualifications.map((it)=> <li key={it}>{it}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Program Info */}
      <div className="mt-10 grid lg:grid-cols-2 gap-6 items-start">
        <div className={card}>
          <h2 className="text-xl font-semibold mb-2">Student Program — Summary</h2>
          <p className="text-gray-700 dark:text-gray-300">2‑month hands‑on program with real projects. Completing the program earns a certification and provides a solid career boost.</p>
          <a href="https://forms.gle/" target="_blank" rel="noreferrer" className="mt-4 inline-block px-5 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">Apply Now</a>
        </div>
        <div className={card}>
          <h3 className="font-semibold mb-2">Why join?</h3>
          <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 text-sm space-y-1">
            <li>Real projects with mentorship</li>
            <li>Certification on completion</li>
            <li>Portfolio development and career guidance</li>
          </ul>
        </div>
      </div>
    </section>
  )
}



