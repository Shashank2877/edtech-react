import React from 'react'

export default function Services(){
  const card = "p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover-zoom"

  const aiCourses = [
    'Web Development using AI',
    'AI Automation & Manual Testing',
    'Machine Learning using AI',
    'AI in App Development',
    'AI in Cloud Computing',
    'AutoCAD using AI',
    'Digital Marketing using AI',
    'Finance & Accounting using AI',
    'HR using AI',
    'AI Animation',
    'Building AI Agents',
    'AI in Construction Planning',
    'AI Graphic Design',
    'AI for Research',
    'AI Data & Automation',
    'Data Science using AI',
    'AI in Supply Chain',
    'AI for Business Leadership',
    'Tools / Entrepreneurship 101',
    'Stock Market using AI'
  ]

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Our Services</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">Solutions that help you launch, grow, and maintain your digital presence.</p>

      {/* Web Development & Design */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className={card}>
          <h2 className="text-xl font-semibold mb-2">Web Development & Design</h2>
          <p className="text-gray-600 dark:text-gray-400">We build user‑friendly, responsive, custom websites optimized for desktop and mobile with a seamless browsing experience.</p>
        </div>
        <div className={card}>
          <h2 className="text-xl font-semibold mb-2">Website Revamp</h2>
          <p className="text-gray-600 dark:text-gray-400">Redesign and upgrade outdated websites into fresh, accessible, and conversion‑focused experiences.</p>
        </div>
      </div>

      {/* Ecommerce */}
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className={card}>
          <h2 className="text-xl font-semibold mb-2">E‑commerce Solutions</h2>
          <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1 text-sm">
            <li>Creation of engaging e‑commerce websites</li>
            <li>SEO optimization for product/category pages</li>
            <li>Smooth shopping UX: cart, checkout, payments</li>
            <li>Goal: maximize conversions and increase profit</li>
          </ul>
        </div>
        <div className={card}>
          <h2 className="text-xl font-semibold mb-2">Website Maintenance</h2>
          <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1 text-sm">
            <li>Ongoing updates, security, performance monitoring</li>
            <li>SEO audits, publishing blog posts</li>
            <li>Handling customer inquiries and minor content edits</li>
          </ul>
        </div>
      </div>

      {/* Advertising & Outsourcing */}
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className={card}>
          <h2 className="text-xl font-semibold mb-2">Advertising Solutions</h2>
          <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1 text-sm">
            <li>Plan and execute strategies to enhance brand visibility</li>
            <li>Create promotional materials (online & offline)</li>
            <li>Manage ads on Google, Facebook, and other platforms</li>
          </ul>
        </div>
        <div className={card}>
          <h2 className="text-xl font-semibold mb-2">Outsourcing Corporate Services</h2>
          <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1 text-sm">
            <li>Website maintenance & software development</li>
            <li>Content management</li>
            <li>General IT outsourcing for businesses</li>
          </ul>
        </div>
      </div>

      {/* Data Security & Branding */}
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className={card}>
          <h2 className="text-xl font-semibold mb-2">Data Security</h2>
          <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1 text-sm">
            <li>Secure hosting and encrypted communications</li>
            <li>Vulnerability assessments</li>
            <li>Compliance (GDPR, ISO 27001)</li>
          </ul>
        </div>
        <div className={card}>
          <h2 className="text-xl font-semibold mb-2">Branding & Design</h2>
          <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1 text-sm">
            <li>Logo design, graphics, multimedia</li>
            <li>End‑to‑end brand identity systems</li>
          </ul>
        </div>
      </div>

      {/* Internships & Education */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">Internships & Education</h2>
        <div className={card}>
          <p className="text-gray-700 dark:text-gray-300">Get industrial experience with real‑time projects, a certificate, and hands‑on mentorship.</p>
          <div className="mt-4 grid sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/60">
              <div className="text-sm text-gray-600 dark:text-gray-400">Fees</div>
              <div className="font-semibold">₹7,500 & ₹11,999</div>
            </div>
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/60">
              <div className="text-sm text-gray-600 dark:text-gray-400">Duration</div>
              <div className="font-semibold">2 months</div>
            </div>
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/60">
              <div className="text-sm text-gray-600 dark:text-gray-400">Benefits</div>
              <div className="font-semibold">Projects • Certificate • Experience</div>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Courses / Fields</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {aiCourses.map((c) => (
                <span key={c} className="text-sm px-3 py-1 rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Web Academy Coming Soon */}
      <div className="mt-10">
        <div className={card}>
          <h2 className="text-xl font-semibold mb-2">Web Academy — Coming Soon</h2>
          <p className="text-gray-700 dark:text-gray-300">Learn, Create, and Certify with our AI‑Powered Learning Tools. Project‑based learning, AI assistance and personalized help, industry certifications.</p>
        </div>
      </div>
    </section>
  )
}



