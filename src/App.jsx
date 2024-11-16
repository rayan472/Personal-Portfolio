import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Service from './components/Service';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
       
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
