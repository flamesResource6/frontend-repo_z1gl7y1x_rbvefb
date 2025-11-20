import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[82vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UGnf9D1Hp3OG8vSG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }} className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-medium shadow-sm">
            Impact Portfolio
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            The Young Minds Chess Initiative
          </h1>
          <p className="mt-5 text-lg md:text-xl text-gray-600 leading-relaxed">
            A student-led community program teaching chess, leadership, and strategic thinking to young learners.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/story" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-black transition shadow-sm">
              Read the Story
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="#teaching" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-gray-900 border border-black/10 hover:bg-gray-50 transition shadow-sm">
              Explore Teaching
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
