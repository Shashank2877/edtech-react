import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ()=> (
  <div className="flex items-center gap-2">
    <img src="/download.png" alt="Company Logo" width="28" height="28" className="mr-1" />
    <span className="font-semibold text-lg tracking-tight text-indigo-600 dark:text-indigo-400">NAMMA WEB</span>
  </div>
)

export default function Footer({ 
  companyName = "NAMMA WEB",
  description = "Namma Web ensures professional design, seamless functionality, and optimal performance.",
  links = [
    { to: "/", label: "HOME" },
    { to: "/about", label: "ABOUT" },
    { to: "/services", label: "SERVICE" },
    { to: "/courses", label: "COURSES" },
    { to: "/career", label: "CAREER" },
    { to: "/contact", label: "CONTACT" }
  ],
  socialLinks = [
    { href: "https://youtube.com", label: "YouTube", icon: "youtube" },
    { href: "https://linkedin.com", label: "LinkedIn", icon: "linkedin" },
    { href: "https://instagram.com", label: "Instagram", icon: "instagram" },
    { href: "https://wa.me/", label: "WhatsApp", icon: "whatsapp" }
  ],
  className = ""
}) {
  const year = new Date().getFullYear()

  const getSocialIcon = (iconName) => {
    const icons = {
      youtube: <path d="M23.5 6.2s-.23-1.64-.95-2.36c-.91-.95-1.93-.96-2.4-1.02C16.8 2.5 12 2.5 12 2.5h-.01s-4.8 0-8.14.32c-.47.06-1.49.07-2.4 1.02C.73 4.56.5 6.2.5 6.2S.25 8.2.25 10.19v1.6c0 2 .25 4 .25 4s.23 1.64.95 2.36c.91.95 2.1.92 2.64 1.02C6.2 19.5 12 19.5 12 19.5s4.8 0 8.14-.32c.47-.06 1.49-.07 2.4-1.02.72-.72.95-2.36.95-2.36s.25-2 .25-4v-1.6c0-2-.25-4-.25-4zM9.75 14.5V7.5l6.5 3.5-6.5 3.5z"/>,
      instagram: <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm8 2H9a3 3 0 00-3 3v6a3 3 0 003 3h6a3 3 0 003-3V7a3 3 0 00-3-3zm3.5 1.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM12 8.5A3.5 3.5 0 1012 15.5 3.5 3.5 0 0012 8.5z"/>,
      whatsapp: <path d="M20.52 3.48A10 10 0 101.48 22.52 10 10 0 0020.52 3.48zM12 20.2a8.2 8.2 0 118.2-8.2 8.2 8.2 0 01-8.2 8.2zm4.58-6.14c-.25-.13-1.47-.72-1.7-.8-.23-.09-.4-.13-.56.12-.16.25-.64.8-.78.96-.14.16-.29.18-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.66-1.25-1.47-1.4-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.36-.43.12-.14.16-.25.25-.41.08-.16.04-.3-.02-.43-.06-.13-.56-1.34-.77-1.83-.2-.48-.41-.42-.56-.42-.14 0-.3 0-.46 0-.16 0-.43.06-.65.3-.22.25-.85.83-.85 2.02s.88 2.35 1 2.51c.11.16 1.72 2.63 4.16 3.69.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29z"/>,
      linkedin: <path d="M6.94 6.5A1.94 1.94 0 115 4.56 1.94 1.94 0 016.94 6.5zM5.5 8.5h2.9v9.94H5.5V8.5zm5.12 0h2.77v1.36h.04c.39-.7 1.35-1.44 2.79-1.44 2.98 0 3.53 1.98 3.53 4.55v5.97h-2.9v-5.3c0-1.26-.02-2.88-1.76-2.88-1.76 0-2.03 1.37-2.03 2.79v5.39H10.6V8.5z"/>
    }
    return icons[iconName] || icons.twitter
  }

  return (
    <footer className={`mt-16 border-t border-gray-200/60 dark:border-gray-800/80 bg-white/40 dark:bg-gray-950/40 backdrop-blur theme-transition ${className}`}>
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 max-w-sm">{description}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Pages</h4>
          <nav className="grid gap-2 text-sm text-gray-700 dark:text-gray-300">
            {links.map(link => (
              <Link 
                key={link.label} 
                to={link.to} 
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <div className="flex items-center gap-3">
            {socialLinks.map(social => (
              <a 
                key={social.label}
                href={social.href} 
                aria-label={social.label} 
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 theme-transition"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700 dark:text-gray-300">
                  {getSocialIcon(social.icon)}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200/60 dark:border-gray-800/80">
        <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-gray-600 dark:text-gray-400 flex items-center justify-between">
          <span>©2024 {companyName} | All Rights Reserved</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Terms & Condition</a>
            <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Privacy Policy</a>
            <span className="opacity-80">AI Saraswathi</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
