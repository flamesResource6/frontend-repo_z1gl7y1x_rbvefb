import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionHeading from '../components/SectionHeading'
import { motion } from 'framer-motion'

const tournaments = [
  { name: 'Spring Open', participants: '24', location: 'Community Center', date: 'Apr 2024' },
  { name: 'Summer Rapid', participants: '30', location: 'Library Hall', date: 'Aug 2024' },
  { name: 'Winter Classic', participants: '18', location: 'School Gym', date: 'Dec 2024' },
]

export default function Tournaments() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Events" title="Tournaments Hosted" subtitle="Competitive, fun, and community-oriented. Photo carousel placeholders included for future uploads." />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {tournaments.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-black/10 bg-white shadow-sm overflow-hidden">
                <div className="aspect-[16/9] bg-gray-100" />
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{t.name}</h4>
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-900 text-white">{t.date}</span>
                  </div>
                  <p className="mt-2 text-gray-600">{t.location} • {t.participants} participants</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
