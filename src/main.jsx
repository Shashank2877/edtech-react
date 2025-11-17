import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/index.css'

// Initialize AOS with error handling
try {
  import('aos').then((AOS) => {
    import('aos/dist/aos.css')
    if (AOS.default) {
      AOS.default.init({ once: true, duration: 700 })
    }
  }).catch(err => {
    console.warn('AOS initialization failed:', err)
  })
} catch (error) {
  console.warn('AOS import failed:', error)
}

const container = document.getElementById('root')
if (container) {
  createRoot(container).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  )
} else {
  console.error('Root element not found')
}
