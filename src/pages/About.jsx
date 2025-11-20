import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="grid md:grid-cols-3 gap-10 items-start">
            <div className="md:col-span-1">
              <div className="aspect-square rounded-2xl bg-gray-100 border border-black/10" />
            </div>
            <div className="md:col-span-2">
              <p className="text-sm font-medium px-3 py-1 inline-block rounded-full bg-black text-white">About Me</p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight">Hi, I’m Pratham Soni</h1>
              <p className="mt-4 text-gray-700 leading-relaxed text-lg">
                I’m a student passionate about strategic thinking, education accessibility, community building, and helping younger students grow. Through the Young Minds Chess Initiative, I’ve led sessions, organized tournaments, and raised funds so more students can learn and compete.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-black/10">
                  <h4 className="font-semibold">Interests</h4>
                  <p className="mt-2 text-gray-600">Chess, math, data science, leadership, teaching, and building communities.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-black/10">
                  <h4 className="font-semibold">Future Goals</h4>
                  <p className="mt-2 text-gray-600">Scale the program, create open-source lesson plans, and mentor student leaders.</p>
                </div>
              </div>

              <a href="#" className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-black transition shadow-sm">LinkedIn</a>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
