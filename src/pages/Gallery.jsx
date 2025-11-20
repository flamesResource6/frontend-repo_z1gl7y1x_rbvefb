import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionHeading from '../components/SectionHeading'
import { useState } from 'react'

const images = Array.from({ length: 9 }).map((_, i) => ({ id: i + 1, src: `https://picsum.photos/seed/chess${i}/800/600` }))

export default function Gallery() {
  const [active, setActive] = useState(null)
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Gallery" title="Moments from the initiative" subtitle="Responsive grid with hover and modal viewer. Replace with your photos later." />

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map(img => (
              <button key={img.id} onClick={() => setActive(img.src)} className="group relative overflow-hidden rounded-xl border border-black/10">
                <img src={img.src} alt="Gallery" className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {active && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur flex items-center justify-center p-4" onClick={()=>setActive(null)}>
          <img src={active} alt="Large" className="max-h-[85vh] rounded-xl shadow-2xl" />
        </div>
      )}

      <Footer />
    </div>
  )
}
