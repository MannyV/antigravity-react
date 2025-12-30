import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import FeaturesPage from './pages/FeaturesPage';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--glass-border)', marginTop: '4rem' }}>
          <div className="container" style={{ textAlign: 'center', color: 'var(--text-dim)' }}>
            <p>© 2024 Antigravity. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </Router>
  );
}

export default App;
