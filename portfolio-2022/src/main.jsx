import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App'
import './index.css'

import DevHomePage from './pages/DevHomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SplashScreen from './components/feature/SplashScreen';

ReactDOM.render(
  <BrowserRouter>
  <Routes>
       <Route path="/" element={<DevHomePage />} />
       <Route path="/about" element={<AboutPage />} />
       <Route path="/contact" element={<ContactPage />} />
       <Route path="/splash" element={<SplashScreen />} />
  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
