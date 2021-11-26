import React from 'react';
import './App.css';
import Home from './features/home/home';
import { Routes, Route, useNavigate } from 'react-router-dom';
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
        <Route path="temporary-storage" element={<TemporaryStorage />} />
      </Routes>
      <Routes>
        <Route path="create-survey" />
        <Route
          path="/*"
          element={<BottomBar setIsModalOpen={setIsModalOpen} path="" />}
        />
        <Route path="join" element={<Join />} />
        <Route path="email-auth" element={<EmailAuth />} />
      </Routes>
      <SubmitModal
        isOpen={isModalOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
      >
        {'설문작성 시\n1000p가 차감됩니다.\n계속하시겠습니까?'}
      </SubmitModal>
    </>
  );
};

export default App;
