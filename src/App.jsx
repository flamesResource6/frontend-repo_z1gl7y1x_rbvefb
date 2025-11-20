import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Story from './pages/Story'
import Teaching from './pages/Teaching'
import Tournaments from './pages/Tournaments'
import Impact from './pages/Impact'
import Gallery from './pages/Gallery'
import About from './pages/About'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/story" element={<Story />} />
      <Route path="/teaching" element={<Teaching />} />
      <Route path="/tournaments" element={<Tournaments />} />
      <Route path="/impact" element={<Impact />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App
