import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// GlobalStyles
import GlobalStyles from './GlobalStyles';

// pages
import Index from './pages/Index';

const App = () => {

  useEffect(() => {     
    
  },[]);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Index />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;