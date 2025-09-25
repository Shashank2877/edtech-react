import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import VideoBackground from '../components/VideoBackground'

// Scroll Indicator Component
const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-[100]"
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: isVisible ? [1, 0.5, 1] : 0,
        y: isVisible ? [0, 12, 0] : 20
      }}
      transition={{ 
        duration: 2,
        repeat: isVisible ? Infinity : 0,
        ease: "easeInOut"
      }}
      style={{
        filter: "drop-shadow(0 0 8px rgba(128, 90, 213, 0.5))"
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="#805AD5"
        stroke="#805AD5"
        strokeWidth="1"
        className="opacity-80"
      >
        <path d="M12 2A4.5 4.5 0 0 0 7.5 6.5v5A4.5 4.5 0 0 0 12 16a4.5 4.5 0 0 0 4.5-4.5v-5A4.5 4.5 0 0 0 12 2zm0 2a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-5 0v-5A2.5 2.5 0 0 1 12 4z"/>
        <path d="M12 7v3"/>
      </svg>
    </motion.div>
  );
}

// Glass Card Component
const GlassCard = ({ children, className = "" }) => (
  <div className={`backdrop-blur-lg border border-white/10 ${className}`}>
    {children}
  </div>
)

// Glass Section Component
const GlassSection = ({ children, className = "" }) => (
  <div className={`backdrop-blur-sm ${className}`}>
    {children}
  </div>
)

export default function Home() {
  // Stats data
  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "24/7", label: "Support Available" },
    { number: "2+", label: "Years Experience" }
  ]

  return (
    <div className="min-h-screen text-white relative">
      <VideoBackground />
      <ScrollIndicator />
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          className="w-full max-w-4xl px-6 text-center"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#00FFB2] mb-4">
            Namma Web — Design, Build, Grow Online
          </h1>
          <p className="text-lg text-white/90 mb-6">
            We craft websites, brands, and growth strategies that drive visibility and results.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 rounded bg-[#00FFB2] text-black font-medium hover:bg-[#00FFB2]/90 transition-colors"
            >
              Explore
            </button>
            <Link 
              to="/contact" 
              className="px-6 py-3 rounded border border-[#00FFB2] text-[#00FFB2] hover:bg-[#00FFB2]/10 transition-colors"
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        {/* Stats Section */}
        <section className="mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="py-6 text-center rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-white/70 mt-1">{stat.label}</div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* About / Intro */}
        <section id="about" className="mt-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">We Help Brands Increase Their Online Sales</h2>
            <p className="text-gray-400 mb-4">
              At Namma Web, we specialize in boosting your brand's visibility and engagement online. Our expert team crafts tailored digital strategies to enhance your website, optimize social media, and drive targeted traffic.
            </p>
            <div className="flex gap-6">
              <div>
                <div className="text-3xl font-bold">99%</div>
                <div className="text-gray-400">Support System</div>
              </div>
              <div>
                <div className="text-3xl font-bold">100%</div>
                <div className="text-gray-400">Friendly Relationship</div>
              </div>
            </div>
            <div className="mt-5">
              <Link 
                to="/about" 
                className="px-4 py-2 rounded-md border border-gray-700 hover:bg-gray-800 transition-colors"
              >
                More About Us
              </Link>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-gray-800 bg-gray-900 hover:scale-105 transition-transform duration-300">
            <h3 className="text-lg font-semibold mb-2">Why You Need Namma Web's Support</h3>
            <p className="text-gray-400">
              We collaborate with you to understand your business needs, design a tailored strategy, develop your solution, and launch it with ongoing monitoring for continuous success.
            </p>
          </div>
        </section>

        {/* Our Expertise */}
        <section className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Our Expertise for You</h2>
          <p className="text-gray-400 mb-6">
            We collaborate with you to understand your business needs, design a tailored strategy, develop your solution, and launch it with ongoing monitoring for continuous success.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Digital Marketing', desc: 'Improve search positions with our expert strategies. Boost rankings, increase visibility, and drive organic traffic.' },
              { title: 'Websites & E-commerce', desc: 'Reach your target market effectively. Identify, engage, and convert your ideal customers with precision.' },
              { title: 'Consultations', desc: 'Unlock success with the best strategy. Achieve your goals, outperform competitors, and maximize results.' }
            ].map(item => (
              <div 
                key={item.title} 
                className="p-6 rounded-xl border border-gray-800 bg-gray-900 hover:scale-105 transition-transform duration-300"
              >
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Website Development', desc: 'Responsive, visually appealing websites optimized for performance.' },
              { title: 'Branding & Marketing', desc: 'Impactful brand identities and growth campaigns.' },
              { title: 'E-Commerce Solutions', desc: 'Scalable stores with secure payments and smooth UX.' },
              { title: 'Consultation Services', desc: 'Expert guidance to streamline operations and adopt innovation.' }
            ].map(item => (
              <div 
                key={item.title} 
                className="p-5 rounded-xl border border-gray-800 bg-gray-900 flex flex-col hover:scale-105 transition-transform duration-300"
              >
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm flex-1">{item.desc}</p>
                <button className="mt-4 self-start px-4 py-2 rounded-md border border-gray-700 hover:bg-gray-800 transition-colors">
                  Let's Start
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Packages */}
        <section className="relative mt-24">
          <GlassSection className="py-16 overflow-hidden">
            <motion.div
              className="absolute -left-32 top-0 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl"
              animate={{
                x: [-20, 20, -20],
                y: [-20, 20, -20],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -right-32 bottom-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
              animate={{
                x: [20, -20, 20],
                y: [20, -20, 20],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />

            <div className="relative max-w-6xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                  Choose Your Plan
                </h2>
                <p className="mt-4 text-lg text-white/70">
                  Select the perfect package for your business needs
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Starter",
                    price: "₹5999",
                    billing: "One Time",
                    note: "Excluding Hosting & Domain",
                    features: ["Landing page", "On Page SEO", "User Friendly & Attractive", "2 Month Support"],
                    cta: "Let's Start",
                    isPopular: false
                  },
                  {
                    title: "Startup",
                    price: "₹16999",
                    billing: "One Time",
                    note: "Excluding Hosting & Domain",
                    features: ["5–7 Pages", "On Page SEO & Branding Support", "Premium Design", "5 Month Support"],
                    cta: "Let's Start",
                    isPopular: true
                  },
                  {
                    title: "Enterprise",
                    price: "Contact",
                    billing: "Billed Yearly",
                    note: "Includes Hosting & Domain",
                    features: ["Unlimited Pages", "Branding & Marketing", "Premium Design", "1 Year Support"],
                    cta: "Contact Us",
                    isPopular: false
                  }
                ].map((plan, index) => (
                  <motion.div
                    key={plan.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <GlassCard className={`relative h-full p-8 rounded-xl backdrop-blur-lg ${plan.isPopular ? 'bg-white/10' : 'bg-white/5'} transition-all duration-300 group hover:bg-white/15`}>
                      {plan.isPopular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                          <div className="px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg">
                            Popular Choice
                          </div>
                        </div>
                      )}

                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {plan.title}
                        </h3>
                        <div className="flex items-baseline justify-center gap-1">
                          <span className="text-3xl font-bold text-white">
                            {plan.price}
                          </span>
                          <span className="text-white/70">
                            • {plan.billing}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-white/50">
                          {plan.note}
                        </p>
                      </div>

                      <ul className="space-y-4 mb-8">
                        {plan.features.map(feature => (
                          <li key={feature} className="flex items-center gap-3 text-white/80">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <motion.button
                        className={`w-full py-3 px-6 rounded-full text-white ${plan.isPopular
                          ? 'bg-gradient-to-r from-emerald-600 to-teal-500 hover:shadow-lg hover:shadow-emerald-500/25'
                          : 'border border-white/20 hover:bg-white/10'
                        } transition-all duration-300`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {plan.cta}
                      </motion.button>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </GlassSection>
        </section>

        {/* Student Program / Internship */}
        <section id="student-program" className="mt-16 p-6 rounded-xl border border-gray-800 bg-gradient-to-br from-indigo-900/50 to-gray-900 hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2">WEB DEVELOPMENT STUDENT PROGRAM WITH INTERNSHIP</h2>
          <p className="text-gray-400 mb-4">
            The Web Development Student Program with Internship in 2-month that combines learning with real-world projects. Complete the program to gain practical skills and earn a certification. And boost your career!
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a 
              href="https://forms.gle/" 
              target="_blank" 
              rel="noreferrer" 
              className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
            >
              Join Now
            </a>
            <span className="text-gray-500">or</span>
            <Link 
              to="/contact" 
              className="px-4 py-2 rounded-md border border-gray-700 hover:bg-gray-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>
          <p className="mt-4 text-gray-300">
            Start Building Awesome Websites Today — Namma Web ensures professional design, seamless functionality, and optimal performance to enhance your online presence and achieve your goals.
          </p>
        </section>
      </div>
    </div>
  )
}