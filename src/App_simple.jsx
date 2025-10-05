import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function SimpleHome() {
  return (
    <div style={{ padding: '20px', backgroundColor: 'white', color: 'black', minHeight: '100vh' }}>
      <h1>Simple Test Page</h1>
      <p>If you can see this, React is working!</p>
      <p>The white screen issue might be caused by the complex components.</p>
    </div>
  )
}

export default function SimpleApp() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SimpleHome />} />
      </Routes>
    </div>
  )
}