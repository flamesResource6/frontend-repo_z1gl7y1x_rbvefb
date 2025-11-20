export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  return (
    <div className={`mx-auto ${align === 'center' ? 'text-center' : ''} max-w-3xl`}> 
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-medium shadow-sm">
          {eyebrow}
        </div>
      )}
      {title && <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">{title}</h2>}
      {subtitle && <p className="mt-3 text-gray-600 leading-relaxed">{subtitle}</p>}
    </div>
  )
}
