import LinesPage from './pages/LinesPage';
import Home from './pages/Home';
import About from './pages/About';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  //display linespage
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lines/:color" element={<LinesPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
