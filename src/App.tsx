import React from 'react';
import './App.css';
import Home from './features/home/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reference from './features/reference/reference';
import CreateSurvey from './features/createSurvey/createSurvey';

const App = function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="reference" element={<Reference />} />
        <Route path="createSurvey" element={<CreateSurvey />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
