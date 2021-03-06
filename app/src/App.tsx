import React, { useEffect } from 'react';
import './App.css';
import Home from './features/home/home';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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
import BottomBar from 'features/bottomBar/bottomBar';
import { useState } from 'react';
import SubmitModal from 'common/components/SubmitModal';

const App = function () {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsModalOpen(false);
  };
  const handleConfirm = () => {
    navigate('/create-survey');
    setIsModalOpen(false);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="reference" element={<Reference />} />
        <Route path="reference/:id" element={<ReferenceDetail />} />

        <Route path="create-survey" element={<CreateSurvey />} />
        <Route path="login" element={<Login />} />
        <Route path="join" element={<Join />} />
        <Route path="email-auth" element={<EmailAuth />} />
        <Route path="basic-info" element={<BasicInfo />} />
        <Route path="search" element={<Search />} />
        <Route path="reference-detail" element={<ReferenceDetail />} />
        <Route path="join" element={<Join />} />
        <Route path="email-auth" element={<EmailAuth />} />
        <Route path="basic-info" element={<BasicInfo />} />
        <Route path="search" element={<Search />} />
        <Route path="join" element={<Join />} />
        <Route path="my-survey" element={<MySurvey />} />
        <Route path="my-survey/:id" element={<ReferenceDetail />} />
        <Route path="temporary-storage" element={<TemporaryStorage />} />
        <Route path="survey-history" element={<SurveyHistory />} />
      </Routes>
      <Routes>
        <Route path="create-survey" />
        <Route path="login" />
        <Route path="reference-detail" />
        <Route
          path="/*"
          element={<BottomBar setIsModalOpen={setIsModalOpen} />}
        />
        <Route path="join" element={<Join />} />
        <Route path="email-auth" element={<EmailAuth />} />
      </Routes>
      <SubmitModal
        isOpen={isModalOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
      >
        {'???????????? ???\n1000p??? ???????????????.\n?????????????????????????'}
      </SubmitModal>
    </>
  );
};

export default App;
