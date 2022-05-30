import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navbar from './components/Navbar/Navbar';
import Breakfast from './pages/Breakfast/Breakfast';
import Brunch from './pages/Brunch/Brunch';
import Lunch from './pages/Lunch/Lunch';
import Dinner from './pages/Dinner/Dinner';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/breakfast' element={<Breakfast />} />
        <Route path='/brunch' element={<Brunch />} />
        <Route path='/lunch' element={<Lunch />} />
        <Route path='/dinner' element={<Dinner />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
