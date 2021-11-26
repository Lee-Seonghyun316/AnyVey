import React from 'react';
import './App.css';
import Home from './features/home/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reference from './features/reference/reference';
import CreateSurvey from './features/createSurvey/createSurvey';
import Login from './features/login/login';
import Join from './features/join/join';
import EmailAuth from './features/emailAuth/EmailAuth';
import BasicInfo from './features/basicInformation/BasicInfo';

const App = function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="reference" element={<Reference />} />
        <Route path="create-survey" element={<CreateSurvey />} />
        <Route path="login" element={<Login />} />
        <Route path="join" element={<Join />} />
        <Route path="email-auth" element={<EmailAuth />} />
        <Route path="basic-info" element={<BasicInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
