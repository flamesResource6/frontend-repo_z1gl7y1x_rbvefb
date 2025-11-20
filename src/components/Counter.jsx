import { useEffect, useRef, useState } from 'react'

export default function Counter({ from = 0, to = 100, duration = 1200, prefix = '', suffix = '' }) {
  const [value, setValue] = useState(from)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const animate = (t) => {
            const progress = Math.min(1, (t - start) / duration)
            const current = Math.floor(from + (to - from) * progress)
            setValue(current)
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      })
    }, { threshold: 0.3 })

    observer.observe(el)
    return () => observer.disconnect()
  }, [from, to, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{value.toLocaleString()}{suffix}
    </span>
  )
}
