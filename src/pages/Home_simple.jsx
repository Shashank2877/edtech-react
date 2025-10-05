import React from 'react'

export default function SimpleHome() {
  return (
    <div className="min-h-screen bg-white text-black p-8">
      <h1 className="text-4xl font-bold mb-4">NammaWeb - Home Page Test</h1>
      <p className="text-lg mb-4">If you can see this, the basic routing and React rendering is working!</p>
      <div className="bg-blue-100 p-4 rounded">
        <p>This is a simplified version to test if the white screen issue is resolved.</p>
      </div>
    </div>
  )
}