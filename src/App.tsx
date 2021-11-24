import React from 'react';
import './App.css';
import Home from './features/home/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reference from './features/reference/reference';

const App = function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="reference" element={<Reference />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
