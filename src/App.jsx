import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import CV from './pages/CV'
import Writing from './pages/Writing'
export default function App() {
  return (
    <>
      <Nav />
      <div className="punch-strip" />
      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/writing" element={<Writing />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
