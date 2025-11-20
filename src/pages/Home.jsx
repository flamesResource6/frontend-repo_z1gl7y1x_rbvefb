import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import SectionHeading from '../components/SectionHeading'
import { motion } from 'framer-motion'
import { Users, Trophy, GraduationCap, Heart } from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <Hero />

      <section className="py-20" id="teaching">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Highlights" title="Leadership. Consistency. Community." subtitle="A snapshot of the program's reach and impact so far. Numbers are placeholders and can be updated." />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, label: 'Students Trained', value: '30+' },
              { icon: GraduationCap, label: 'Sessions Conducted', value: '60+' },
              { icon: Trophy, label: 'Tournaments Hosted', value: '3+' },
              { icon: Heart, label: 'Funds Raised', value: '$2,500+' },
            ].map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="p-6 rounded-2xl bg-white border border-black/10 shadow-sm">
                <item.icon className="w-6 h-6 text-gray-900" />
                <p className="mt-4 text-3xl font-bold tracking-tight">{item.value}</p>
                <p className="text-gray-600">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
