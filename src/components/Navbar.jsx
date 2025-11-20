import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Chess, Sun, Moon, Github, Linkedin } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/story', label: 'The Story' },
  { to: '/teaching', label: 'Teaching' },
  { to: '/tournaments', label: 'Tournaments' },
  { to: '/impact', label: 'Impact' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About Me' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (isDark) root.classList.add('dark')
    else root.classList.remove('dark')
  }, [isDark])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const linkClass = ({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive ? 'text-gray-900 bg-gray-100 dark:text-white/90 dark:bg-white/10' : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 hover:bg-gray-100/70 dark:hover:bg-white/10'
  }`

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/70 dark:bg-black/30 border-b border-black/5 dark:border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 text-white flex items-center justify-center shadow-sm">
              <Chess className="w-5 h-5" />
            </div>
            <span className="font-semibold text-gray-900 dark:text-white">Young Minds Chess</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a href="#" aria-label="LinkedIn" className="hidden sm:inline-flex p-2 text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" aria-label="GitHub" className="hidden sm:inline-flex p-2 text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            <button aria-label="Toggle theme" onClick={() => setIsDark(v => !v)} className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg:white/10 transition">
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-white/10" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden pb-4">
            <div className="grid gap-1">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className={({ isActive }) => `block px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-100 text-gray-900 dark:bg-white/10 dark:text-white' : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10'}`}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
