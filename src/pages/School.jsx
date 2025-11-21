import React, { useState } from 'react'
import { motion } from 'framer-motion'
import GlassCard from '../components/GlassCard'
import GlassSection from '../components/GlassSection'
import CourseRegistrationModal from '../components/CourseRegistrationModal'
import CourseDetailsModal from '../components/CourseDetailsModal'
import Footer from '../components/Footer'

// School Grade Programs Data
const gradePrograms = [
  {
    id: 1,
    title: 'Grade 1-2',
    description: 'Introduction to basic coding concepts through fun activities and games.',
    extendedDescription: 'Young learners will explore the basics of coding through interactive games, storytelling, and simple programming activities designed for early education.',
    duration: '1 Day',
    price: 699,
    bulkPrice: { count: 6, price: 999 },
    grade: 'Grade 1-2',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Fun coding games and activities',
      'Basic introduction to computers',
      'Interactive storytelling with code',
      'Age-appropriate programming concepts',
      'Hands-on activities',
      'Certificate of participation'
    ],
    syllabus: [
      'What is coding? (Simple concepts)',
      'Using computers safely',
      'Basic block coding',
      'Fun coding games',
      'Creative activities'
    ]
  },
  {
    id: 2,
    title: 'Grade 3-4',
    description: 'Exploring programming through creative projects and understanding how technology works.',
    extendedDescription: 'Students will learn about basic programming concepts, engage with educational coding tools, and create simple projects.',
    duration: '1 Day',
    price: 699,
    bulkPrice: { count: 6, price: 999 },
    grade: 'Grade 3-4',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Introduction to block coding',
      'Animation and game creation',
      'Problem-solving skills',
      'Simple project creation',
      'Interactive learning activities',
      'Achievement certificate'
    ],
    syllabus: [
      'Block-based programming',
      'Creating animations',
      'Building simple games',
      'Logic and sequences',
      'Digital safety basics'
    ]
  },
  {
    id: 3,
    title: 'Grade 5-6',
    description: 'Understanding programming fundamentals and creating interactive applications.',
    extendedDescription: 'Middle school students will dive deeper into programming concepts, learn about algorithms, and build interactive applications.',
    duration: '1 Day',
    price: 699,
    bulkPrice: { count: 6, price: 999 },
    grade: 'Grade 5-6',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Introduction to text-based coding',
      'Web development basics',
      'Game development',
      'Hands-on projects',
      'Problem-solving with code',
      'Professional certificate'
    ],
    syllabus: [
      'Introduction to Python',
      'HTML and CSS basics',
      'Creating interactive websites',
      'Simple game development',
      'Mini coding project'
    ]
  },
  {
    id: 4,
    title: 'Grade 7-8',
    description: 'Advanced programming concepts with practical web development skills.',
    extendedDescription: 'Students will learn web development, understand programming logic, and create functional websites and applications.',
    duration: '1 Day',
    price: 699,
    bulkPrice: { count: 6, price: 999 },
    grade: 'Grade 7-8',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    features: [
      'HTML, CSS, JavaScript',
      'Responsive web design',
      'Building real websites',
      'Coding best practices',
      'Real-world projects',
      'Industry-recognized certificate'
    ],
    syllabus: [
      'Advanced HTML and CSS',
      'JavaScript fundamentals',
      'Responsive design',
      'Building interactive websites',
      'Complete web project'
    ]
  },
  {
    id: 5,
    title: 'Grade 9-10',
    description: 'Comprehensive programming training with advanced concepts and career-oriented skills.',
    extendedDescription: 'High school students will gain in-depth knowledge of full stack development, databases, and prepare for tech careers.',
    duration: '1 Day',
    price: 699,
    bulkPrice: { count: 6, price: 999 },
    grade: 'Grade 9-10',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Full stack web development',
      'Backend development',
      'Database management',
      'Career guidance in tech',
      'Portfolio-ready projects',
      'Professional certification'
    ],
    syllabus: [
      'Advanced JavaScript',
      'Backend development basics',
      'Database fundamentals',
      'Building complete applications',
      'Final project development'
    ]
  }
];

// School Certificate Card component
const SchoolCertificateCard = ({ program, onViewDetails }) => (
  <GlassCard className="p-6 rounded-xl hover:scale-105 transition-transform duration-300">
    {program.image && (
      <div className="mb-4 -mx-6 -mt-6 rounded-t-xl overflow-hidden">
        <img 
          src={program.image} 
          alt={program.title}
          className="w-full h-48 object-cover"
        />
      </div>
    )}
    <div className="flex items-center gap-3 mb-4">
      <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
    </div>
    <p className="text-gray-700 mb-4">{program.description}</p>
    <div className="flex items-center gap-4 mb-4">
      <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-700 text-sm">
        {program.grade}
      </span>
      <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-700 text-sm">
        ₹{program.price}
      </span>
    </div>
    <div className="mb-4 p-3 bg-purple-50 rounded-lg border border-purple-200">
      <p className="text-sm text-purple-800 font-semibold text-center">
        Special School Offer: Bulk certificates for students!
      </p>
    </div>
    <div className="flex justify-center items-center">
      <motion.button
        className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-semibold hover:shadow-lg transition-shadow"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onViewDetails(program)}
      >
        View Details
      </motion.button>
    </div>
  </GlassCard>
)

export default function School() {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  // Handle View Details button click
  const handleViewDetails = (program) => {
    setSelectedProgram(program);
    setShowDetailsModal(true);
  };

  // Handle Enroll Now button click from details modal - shows registration modal
  const handleEnrollNow = () => {
    setShowDetailsModal(false);
    setShowRegistrationModal(true);
  };

  // Handle close details modal
  const handleCloseDetailsModal = () => {
    setShowDetailsModal(false);
    setSelectedProgram(null);
  };

  // Handle close registration modal
  const handleCloseRegistrationModal = () => {
    setShowRegistrationModal(false);
    setSelectedProgram(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">

      <div>
        {/* Hero Section */}
        <div className="pt-24 pb-12 px-4">
          <GlassSection className="max-w-7xl mx-auto rounded-2xl p-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
                Coding Certificates for Schools
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                Empower your students with coding certifications. Prepare them for the future with 
                programming skills and industry-recognized certificates.
              </p>

              {/* Pricing Banner */}
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
                <div className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl shadow-lg text-white">
                  <p className="text-sm font-semibold mb-1">Single Certificate</p>
                  <p className="text-3xl font-bold">₹699</p>
                  <p className="text-xs mt-1 opacity-90">Per Student - All inclusive</p>
                </div>
                <div className="text-2xl font-bold text-gray-400">OR</div>
                <div className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl shadow-lg text-white relative">
                  <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    SCHOOL SPECIAL
                  </div>
                  <p className="text-sm font-semibold mb-1">Bulk Package (6+ Students)</p>
                  <p className="text-3xl font-bold">₹999</p>
                  <p className="text-xs mt-1 opacity-90">For 6 Certificates - All inclusive - Save ₹3,195!</p>
                </div>
              </div>

              {/* School Benefits */}
              <div className="bg-blue-50 rounded-xl p-6 max-w-2xl mx-auto">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Special Benefits for Schools
                </h3>
                <ul className="text-left text-gray-900 space-y-2 text-sm">
                  <li>Customized training schedules for your institution</li>
                  <li>On-campus or online training options</li>
                  <li>Bulk discounts for large batches</li>
                  <li>Free demo session for school management</li>
                  <li>Progress reports and analytics for teachers</li>
                  <li>Ongoing support and curriculum integration assistance</li>
                </ul>
              </div>
            </div>
          </GlassSection>
        </div>

        {/* Certificates Grid */}
        <div className="max-w-7xl mx-auto px-4 pb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Coding Certification Programs by Grade
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Age-appropriate programming education designed for students from Grade 1 to Grade 10
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {gradePrograms.map((program) => (
              <SchoolCertificateCard 
                key={program.id} 
                program={program} 
                onViewDetails={handleViewDetails} 
              />
            ))}
          </div>

          {/* Why Choose Us Section */}
          <GlassSection className="p-8 rounded-2xl mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              Why Partner with Us?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <h3 className="font-bold text-lg mb-2 text-gray-900">Expert Trainers</h3>
                <p className="text-gray-600 text-sm">Experienced professionals in coding education</p>
              </div>
              <div className="text-center p-4">
                <h3 className="font-bold text-lg mb-2 text-gray-900">Curriculum Support</h3>
                <p className="text-gray-600 text-sm">Align with your school's academic goals</p>
              </div>
              <div className="text-center p-4">
                <h3 className="font-bold text-lg mb-2 text-gray-900">Recognized Certificates</h3>
                <p className="text-gray-600 text-sm">Industry-valued credentials for students</p>
              </div>
              <div className="text-center p-4">
                <h3 className="font-bold text-lg mb-2 text-gray-900">Ongoing Support</h3>
                <p className="text-gray-600 text-sm">Dedicated assistance throughout the program</p>
              </div>
            </div>
          </GlassSection>

          {/* CTA Section */}
          <GlassSection className="p-8 rounded-2xl text-center bg-gradient-to-r from-purple-500/10 to-blue-500/10">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Ready to Transform Your School's Tech Education?
            </h2>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Contact us today for a free consultation and demo session. Let's discuss how we can 
              customize our AI certification programs for your students.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              Schedule Free Demo
            </a>
          </GlassSection>
        </div>
      </div>

      {/* Course Details Modal */}
      <CourseDetailsModal
        course={selectedProgram}
        isOpen={showDetailsModal}
        onClose={handleCloseDetailsModal}
        onEnrollNow={handleEnrollNow}
      />

      {/* Course Registration Modal */}
      {selectedProgram && showRegistrationModal && (
        <CourseRegistrationModal
          course={selectedProgram}
          onClose={handleCloseRegistrationModal}
        />
      )}

      <Footer />
    </div>
  )
}
