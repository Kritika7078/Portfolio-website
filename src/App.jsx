import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import AnimatedBackground from './components/AnimatedBackground';
import Home from './pages/Home';
import Research from './pages/Research';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Leadership from './pages/Leadership';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/leadership" element={<Leadership />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div 
        className="relative min-h-screen w-full overflow-x-hidden"
        style={{
          background: 'linear-gradient(180deg, #FBEFF3 0%, #F3F1FF 40%, #EEF5FF 70%, #FFFFFF 100%)'
        }}
      >
        <div className="absolute inset-0 z-0">
          <AnimatedBackground />
        </div>
        <div className="relative z-10">
          <Navbar />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedRoutes />
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
