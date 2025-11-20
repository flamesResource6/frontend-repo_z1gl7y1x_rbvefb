import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-black/5 dark:border-white/10 bg-white/60 dark:bg-black/30 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">© {year} Pratham Soni</p>
        <div className="flex items-center gap-3">
          <a href="#" className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/10 transition" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
          <a href="#" className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/10 transition" aria-label="GitHub"><Github className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  )
}
