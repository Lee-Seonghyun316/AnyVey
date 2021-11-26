import React from 'react';
import styled from 'styled-components';
import HeaderContainer from '../../header/HeaderContainer';
import backImage from '../../../common/images/back.png';
import { temporarySurvey } from '../../../data/servey';

const TemporaryStorage = () => {
  return (
    <Wrap>
      <HeaderContainer title="임시저장">
        <Back />
        <TextButton>편집</TextButton>
      </HeaderContainer>
      <Content>
        {temporarySurvey.map((item) => (
          <Survey key={item.id}>
            <Title>{item.title}</Title>
            <Date>등록 {item.deadLine}</Date>
          </Survey>
        ))}
      </Content>
    </Wrap>
  );
};

export default TemporaryStorage;

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

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

const Content = styled.div`
  margin-top: 8px;
`;

const Survey = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #2b2b2b;
  margin-bottom: 9px;
`;

const Date = styled.span`
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #b4b4b4;
`;
