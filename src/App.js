import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Registros from './pages/Registros';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/registros' element={<Registros/>}/>
        </Routes>
      </Router>
  );
}

export default App;
