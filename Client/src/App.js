import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';


// Internal imports 

import Home from './components/Home/Home';
import Navbar from './components/layout/Header/Navbar';
import theme from "./Theme/theme"
import English from './components/English/English'
import Hindi from './components/Hindi/hindi'
import Moviedeatails from './components/Moviedetails/Moviedeatails';




function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>

        <Route path='/hindi' element={<Hindi />} />

        <Route path='/english' element={<English />} />

        
        <Route path='/movie/:id' element={<Moviedeatails />}/>

        <Route path='/' element={<Home />} />

      </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
