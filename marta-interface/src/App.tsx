import { useState } from 'react'
import LinesPage from './pages/LinesPage';
import Home from './pages/Home';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  //display linespage
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lines" element={<LinesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
