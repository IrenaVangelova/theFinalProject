import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Breakfast from './pages/Breakfast/Breakfast';
import Brunch from './pages/Brunch/Brunch';
import Lunch from './pages/Lunch/Lunch';
import Dinner from './pages/Dinner/Dinner';
import Home from './pages/Home';
import CreateUser from './pages/CreateUser/CreateUser';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Navbar />
          <Routes>
          <Route path='/' element={<Home />} />
            <Route path='/breakfast' element={<Breakfast />} />
            <Route path='/brunch' element={<Brunch />} />
            <Route path='/lunch' element={<Lunch />} />
            <Route path='/dinner' element={<Dinner />} />
            <Route path='/register' element={<CreateUser />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
