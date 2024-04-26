import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// GlobalStyles
import GlobalStyles from './GlobalStyles';

// pages
import Index from './pages/Index';
import About from './pages/About';
import CarbonNeutral from './pages/CarbonNeutral';
import ContactUs from './pages/ContactUs';

const App = () => {

  useEffect(() => {     
    
  },[]);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/carbon-neutral" element={<CarbonNeutral />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;