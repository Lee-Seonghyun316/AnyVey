import React from 'react';
import './App.css';
import Home from './features/home/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reference from './features/reference/reference';
import CreateSurvey from './features/createSurvey/createSurvey';
import Login from './features/login/login';
import Join from './features/join/join';
import EmailAuth from './features/join/emailAuth/EmailAuth';
import BasicInfo from './features/join/basicInformation/BasicInfo';
import Search from './features/reference/search/Search';
import ReferenceDetail from './features/reference/referenceDetail/ReferenceDetail';
import MySurvey from './features/mySurvey/MySurvey';
import TemporaryStorage from './features/mySurvey/temporaryStorage/TemporaryStorage';
import SurveyHistory from './features/mySurvey/surveyHistory/SurveyHistory';

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
        <Route path="search" element={<Search />} />
        <Route path="reference-detail" element={<ReferenceDetail />} />
        <Route path="my-survey" element={<MySurvey />} />
        <Route path="temporary-storage" element={<TemporaryStorage />} />
        <Route path="survey-history" element={<SurveyHistory />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
