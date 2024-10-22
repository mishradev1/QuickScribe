import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ResumeTemplates from './pages/ResumeTemplates'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Tools from './pages/Tools'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Tools />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/resume-templates" element={<ResumeTemplates />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}