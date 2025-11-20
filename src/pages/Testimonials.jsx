import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionHeading from '../components/SectionHeading'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    quote: 'I started as a beginner and now I can play full games confidently. The sessions were super fun and I learned to think ahead.',
    name: 'A., Grade 5',
    role: 'Student',
  },
  {
    quote: 'My child looks forward to every session and has grown in confidence. The tournaments were organized with care and inclusion.',
    name: 'Parent of S.',
    role: 'Parent',
  },
  {
    quote: 'Students practiced persistence and analysis through chess — skills that carried into class participation and teamwork.',
    name: 'Ms. R.',
    role: 'Teacher Partner',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Outcomes & Testimonials" title="What students and families say" subtitle="Real quotes placeholders — replace with your own to showcase growth, confidence, and community." />

          <div className="mt-12 relative">
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-black/10 shadow-sm min-h-[260px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="w-full"
                >
                  <p className="text-xl md:text-2xl leading-relaxed text-gray-800">“{testimonials[index].quote}”</p>
                  <div className="mt-6 text-sm text-gray-600">
                    <span className="font-medium text-gray-900">{testimonials[index].name}</span> · {testimonials[index].role}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2">
              {testimonials.map((_, i) => (
                <button key={i} aria-label={`Go to testimonial ${i+1}`} onClick={() => setIndex(i)} className={`h-2.5 w-2.5 rounded-full transition-all ${i === index ? 'bg-gray-900 w-6' : 'bg-gray-300 hover:bg-gray-400'}`} />
              ))}
            </div>
          </div>

          <div className="mt-16 grid sm:grid-cols-3 gap-6">
            {[{
              title: 'Analytical Thinking',
              text: 'Students practiced breaking problems down and evaluating options.'
            },{
              title: 'Confidence',
              text: 'Presenting moves, learning from mistakes, and celebrating progress.'
            },{
              title: 'Community',
              text: 'Peer mentoring and collaborative learning across age groups.'
            }].map((c, i) => (
              <motion.div key={c.title} initial={{opacity:0, y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="p-6 rounded-2xl bg-white border border-black/10 shadow-sm">
                <h4 className="font-semibold">{c.title}</h4>
                <p className="mt-2 text-gray-600">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
