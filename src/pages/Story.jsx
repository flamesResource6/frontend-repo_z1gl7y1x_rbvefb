import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionHeading from '../components/SectionHeading'
import { motion } from 'framer-motion'

export default function Story() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="The Story" title="Why this initiative began" subtitle="A narrative of noticing a gap, taking initiative, and building a program that empowers younger students through chess." align="left" />

          <div className="mt-12 grid lg:grid-cols-2 gap-10 items-start">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                I noticed an absence of accessible chess mentorship for elementary and middle school students in my community. Many had curiosity but lacked structured guidance.
              </p>
              <p>
                I gathered interested students, designed a curriculum, and launched weekly sessions. The mission: make strategic thinking engaging, inclusive, and growth-oriented.
              </p>
              <blockquote className="border-l-4 border-black/10 pl-4 italic text-gray-800">“Chess is a framework for thinking: plan ahead, adapt, and learn from every move.”</blockquote>
              <p>
                What started as a small group became a consistent program that blended fundamentals with tactics, puzzles, and game analysis. The vision: equip young learners with skills that extend far beyond the board.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="aspect-video rounded-2xl bg-gray-100 border border-black/10" />
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-semibold">Timeline</h3>
            <div className="mt-6 grid sm:grid-cols-3 gap-6">
              {[
                { title: 'How it began', text: 'Identified need, recruited first cohort, established weekly cadence.' },
                { title: 'How it grew', text: 'Structured curriculum, introduced peer mentoring, began tournaments.' },
                { title: 'Current impact', text: 'Dozens trained, measurable growth, community presence and fundraising.' },
              ].map((t, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-6 rounded-2xl bg-white border border-black/10 shadow-sm">
                  <h4 className="font-semibold">{t.title}</h4>
                  <p className="mt-2 text-gray-600">{t.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
