import React from 'react';
import styled from 'styled-components';
import Header from '../header/header';

const MySurvey = () => {
  return (
    <Wrap>
      <Header style="thickTitle" title="내설문" />
    </Wrap>
  );
};

export default MySurvey;

const Wrap = styled.section``;
