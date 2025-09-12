import React from 'react'
export default function Footer(){
  return (
    <footer className="bg-gray-900 text-gray-200 mt-8">
      <div className="max-w-6xl mx-auto px-4 py-8 flex justify-between">
        <div>
          <h3 className="font-bold">EdTech</h3>
          <p className="text-sm">Learn. Build. Grow.</p>
        </div>
        <div className="text-sm">
          <p>© {new Date().getFullYear()} EdTech — Demo</p>
        </div>
      </div>
    </footer>
  )
}
