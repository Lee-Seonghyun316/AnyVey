import React from 'react';
import './App.css';
import Home from './features/home/home';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Reference from './features/reference/reference';
import CreateSurvey from './features/createSurvey/createSurvey';
import Login from './features/login/login';
import BottomBar from 'features/bottomBar/bottomBar';
import { useState } from 'react';
import SubmitModal from 'common/components/SubmitModal';

const App = function () {
  const location = useLocation();
  console.log(location);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsModalOpen(false);
  };
  const handleConfirm = () => {
    navigate('/createSurvey');
    setIsModalOpen(false);
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="reference" element={<Reference />} />
        <Route path="create-survey" element={<CreateSurvey />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="createSurvey" />
        <Route
          path="/*"
          element={<BottomBar setIsModalOpen={setIsModalOpen} path="" />}
        />
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
