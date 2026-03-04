import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Toaster } from 'sonner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Membership from './pages/Membership';
import PoolBooking from './pages/PoolBooking';
import Trainers from './pages/Trainers';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import './App.css';
import WhatsAppButton from './components/WhatsappButton';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Refresh ScrollTrigger on route change
    ScrollTrigger.refresh();
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0B0B0D] text-[#F4F6FA]">
        <div className="grain-overlay" />
        <Toaster 
          position="top-right" 
          toastOptions={{
            style: {
              background: '#141419',
              color: '#F4F6FA',
              border: '1px solid rgba(255,255,255,0.1)',
            },
          }}
        />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/pool-booking" element={<PoolBooking />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
                <WhatsAppButton />
          
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
