import React from 'react';
import styled from 'styled-components';
import HeaderContainer from '../../header/HeaderContainer';
import backImage from '../../../common/images/back.png';

const TemporaryStorage = () => {
  return (
    <Wrap>
      <HeaderContainer title="임시저장">
        <Back />
        <TextButton>편집</TextButton>
      </HeaderContainer>
    </Wrap>
  );
};

export default TemporaryStorage;

const Wrap = styled.section``;

const TextButton = styled.button`
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #2b2b2b;
`;
const Back = styled.button`
  height: 20px;
  background-image: url(${backImage});
  background-repeat: no-repeat;
  background-size: cover;
`;
