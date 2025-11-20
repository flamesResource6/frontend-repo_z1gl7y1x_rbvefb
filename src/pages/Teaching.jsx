import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionHeading from '../components/SectionHeading'
import { motion } from 'framer-motion'
import { BookOpen, Brain, Puzzle, Target, Sparkles } from 'lucide-react'

const curriculum = [
  { icon: BookOpen, title: 'Openings', desc: 'Principles, development, center control, common traps.' },
  { icon: Brain, title: 'Tactics', desc: 'Pins, forks, skewers, discovered attacks with drills.' },
  { icon: Puzzle, title: 'Puzzles', desc: 'Daily problem sets to build pattern recognition.' },
  { icon: Target, title: 'Endgames', desc: 'King and pawn, minor piece endings, practical technique.' },
  { icon: Sparkles, title: 'Analysis', desc: 'Review games to turn mistakes into learning.' },
]

export default function Teaching() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Teaching" title="Hands-on, consistent mentorship" subtitle="Weekly sessions, age-tailored groups, and a curriculum built for steady progress." />

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {curriculum.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-6 rounded-2xl bg-white border border-black/10 shadow-sm">
                <c.icon className="w-6 h-6" />
                <h4 className="mt-4 font-semibold">{c.title}</h4>
                <p className="mt-2 text-gray-600">{c.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              { label: 'Students Trained', value: '30+' },
              { label: 'Sessions Conducted', value: '60+' },
              { label: 'Avg. Improvement', value: '+250 Elo (placeholder)' },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-black/10 text-center">
                <p className="text-4xl font-extrabold tracking-tight">{s.value}</p>
                <p className="mt-2 text-gray-600">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
