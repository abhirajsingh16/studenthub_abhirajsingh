import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import About from './pages/About'; 

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#f5ebf2] dark:bg-[#632753] min-h-screen transition-colors duration-300">
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} /> {}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;