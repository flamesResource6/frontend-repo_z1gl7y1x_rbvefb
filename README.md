# Young Minds Chess Initiative — Impact Portfolio

A premium, fully responsive React + Tailwind website that documents a student-led community initiative: teaching chess, running tournaments, and raising funds — presented as a polished project case study for admissions and scholarship reviewers.

## Features
- Modern, minimal, premium aesthetic (Apple/Notion-inspired)
- Smooth scroll-reveal animations (Framer Motion)
- Parallax-style 3D hero (Spline scene)
- Sections/pages: Home, The Story, Teaching, Tournaments, Impact, Testimonials, Gallery, About, Footer
- Responsive navigation with dark mode toggle
- Modular components and clean structure

## Tech Stack
- React + Vite
- Tailwind CSS
- React Router
- Framer Motion
- Lucide Icons
- Spline 3D

## Quick Start (Local)
1. Install dependencies
   ```bash
   npm install
   ```
2. Start the dev server
   ```bash
   npm run dev
   ```
3. Open http://localhost:3000

## Deploy to Vercel
1. Push this project to a GitHub repository.
2. In Vercel, click "New Project" → Import the repo.
3. Framework preset: Vite.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Optional env vars: none required.

## Personalization
- Replace placeholder numbers, quotes, and images across the sections.
- Update social links (LinkedIn, GitHub) in the header/footer.
- Edit the initiative name anywhere on the site.

## File Structure Overview
- Reusable components for navigation, hero, headings, footer
- Dedicated pages for each section, wired via React Router
- Counter component for animated stats on the Impact page
- Gallery grid with modal viewer
- Testimonials page with auto-rotating slider

## Notes
- Fonts are preloaded (Inter, Manrope, IBM Plex, Geist). You can adjust Tailwind font stacks in `tailwind.config.js`.
- Dark mode toggle switches the `dark` class on the root element. Persisting preference is easy to add on request.
- The Spline hero uses a hosted scene; replace with your own if desired.

## License
MIT
