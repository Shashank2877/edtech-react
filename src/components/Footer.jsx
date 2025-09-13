import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ()=> (
  <div className="flex items-center gap-2">
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-teal-400">
      <path d="M10 32l18-18 8 8-18 18-8-8z" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M54 32L36 14l-8 8 18 18 8-8z" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26 48l12-12" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    </svg>
    <span className="font-semibold text-lg tracking-tight">Nammaweb</span>
  </div>
)

export default function Footer({ 
  companyName = "Nammaweb",
  description = "Learning platform by Nammaweb — practical courses, projects, and supportive community.",
  links = [
    { to: "/", label: "Home" },
    { to: "/courses", label: "Courses" },
    { to: "/blogs", label: "Blogs" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" }
  ],
  socialLinks = [
    { href: "#", label: "Twitter", icon: "twitter" },
    { href: "#", label: "GitHub", icon: "github" },
    { href: "#", label: "LinkedIn", icon: "linkedin" }
  ],
  className = ""
}) {
  const year = new Date().getFullYear()

  const getSocialIcon = (iconName) => {
    const icons = {
      twitter: <path d="M22 5.92c-.77.35-1.6.58-2.47.69.89-.53 1.57-1.37 1.89-2.37-.83.5-1.75.86-2.73 1.06A4.12 4.12 0 0015.3 4c-2.28 0-4.13 1.89-4.13 4.22 0 .33.03.65.1.96-3.43-.18-6.47-1.88-8.5-4.47-.36.64-.56 1.37-.56 2.15 0 1.48.73 2.79 1.84 3.55-.67-.02-1.31-.21-1.86-.52v.05c0 2.06 1.43 3.78 3.33 4.17-.35.1-.72.15-1.1.15-.27 0-.53-.03-.78-.08.53 1.72 2.08 2.98 3.92 3.01A8.23 8.23 0 012 19.54 11.6 11.6 0 008.29 21c7.55 0 11.68-6.4 11.68-11.95 0-.18 0-.35-.01-.53.8-.59 1.49-1.32 2.04-2.16z"/>,
      github: <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.51 2.87 8.33 6.84 9.68.5.1.68-.22.68-.5v-1.86c-2.78.62-3.37-1.22-3.37-1.22-.46-1.2-1.12-1.52-1.12-1.52-.92-.65.07-.64.07-.64 1.01.07 1.54 1.06 1.54 1.06.9 1.58 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.55-1.15-4.55-5.13 0-1.13.39-2.06 1.03-2.78-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.76 1.06a9.26 9.26 0 015.02 0c1.92-1.33 2.76-1.06 2.76-1.06.55 1.42.2 2.47.1 2.73.64.72 1.02 1.65 1.02 2.78 0 3.99-2.33 4.86-4.55 5.12.36.32.69.95.69 1.92v2.85c0 .29.18.61.69.5A10.06 10.06 0 0022 12.26C22 6.58 17.52 2 12 2z"/>,
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
          <h4 className="font-semibold mb-3">Quick links</h4>
          <nav className="grid gap-2 text-sm text-gray-700 dark:text-gray-300">
            {links.map(link => (
              <Link key={link.to} to={link.to} className="hover:text-indigo-600 dark:hover:text-indigo-400">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Follow</h4>
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
          <span>© {year} {companyName}. All rights reserved.</span>
          <span className="hidden sm:inline">Built with React, Tailwind CSS, and Vite.</span>
        </div>
      </div>
    </footer>
  )
}
