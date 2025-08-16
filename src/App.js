import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import CookiePolicy from './pages/CookiePolicy';
import Blog from './pages/Blog';
import Helpdesk from './pages/Helpdesk';
import Calendar from './pages/Calendar';

function App() {
  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        <Navigation />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            {/* <Route path="/portfolio" element={<Portfolio />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:blogId" element={<Blog />} />
            <Route path="/helpdesk" element={<Helpdesk />} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
