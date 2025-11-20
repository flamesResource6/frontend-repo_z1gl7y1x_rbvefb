import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionHeading from '../components/SectionHeading'
import { motion } from 'framer-motion'

export default function Impact() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Fundraising & Community" title="Impact and Outcomes" subtitle="Transparent use of funds, beneficiaries, and community results. Counters and infographics styled for clarity." />

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[{label:'Raised',value:'$2,500+'},{label:'Scholarships Provided',value:'8+'},{label:'Equipment Purchased',value:'Boards, clocks, books'}].map((i, idx)=>(
              <motion.div key={idx} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:idx*0.05}} className="p-6 rounded-2xl bg-white border border-black/10 shadow-sm text-center">
                <p className="text-3xl font-extrabold tracking-tight">{i.value}</p>
                <p className="mt-2 text-gray-600">{i.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-black/10">
              <h4 className="font-semibold">Where funds went</h4>
              <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
                <li>Chess sets and clocks</li>
                <li>Participation scholarships</li>
                <li>Venue and logistics</li>
                <li>Learning materials and books</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-black/10">
              <h4 className="font-semibold">Community outcomes</h4>
              <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
                <li>Broader access to mentorship</li>
                <li>Greater youth engagement</li>
                <li>Confidence and analytical thinking growth</li>
                <li>Peer leadership and teamwork</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
