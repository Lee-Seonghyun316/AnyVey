import React from 'react';
import styled from 'styled-components';
import BottomBar from '../bottomBar/bottomBar';
import Header from '../header/header';

const Reference = () => {
  return (
    <ReferenceContainer>
      <Header />
      <BottomBar />
    </ReferenceContainer>
  );
};

export default Reference;

const ReferenceContainer = styled.section``;
