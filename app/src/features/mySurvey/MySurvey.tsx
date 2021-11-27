import React from 'react';
import styled from 'styled-components';
import Header from '../header/header';
import Rectangle from './Rectangle';
import { completeMySurvey, onGoingMySurvey } from '../../data/servey';
import { useNavigate } from 'react-router-dom';

const MySurvey = () => {
  const navigate = useNavigate();
  const handleSurveyClick = (id: number) => {
    navigate(`/my-survey/${id}`);
  };
  return (
    <Wrap>
      <Header headerStyle="thickTitle" title="내설문" />
      <Closed>
        <Title>설문이 마감되었어요</Title>
        {completeMySurvey.map((item) => (
          <Rectangle
            key={item.id}
            title={item.title}
            respondent={item.recruitment}
            recruitment={item.recruitment}
            deadline={item.deadLine}
            gift={item.gift}
            onClick={() => {
              handleSurveyClick(item.id);
            }}
          />
        ))}
      </Closed>
      <OnGoing>
        <Title>
          응답 진행중 <SurveyCount>2</SurveyCount>
        </Title>
        {onGoingMySurvey.map((item) => (
          <Rectangle
            key={item.id}
            title={item.title}
            respondent={item.recruitment}
            recruitment={item.recruitment}
            deadline={item.deadLine}
            gift={item.gift}
            onClick={() => {
              handleSurveyClick(item.id);
            }}
          />
        ))}
      </OnGoing>
      <ButtonContainer>
        <Button>임시저장</Button>
        <Button>설문 내역</Button>
      </ButtonContainer>
    </Wrap>
  );
};

export default MySurvey;

const Wrap = styled.section`
  height: 100vh;
`;

const Closed = styled.div`
  margin-bottom: 40px;
`;

const OnGoing = styled.div``;

const Title = styled.h1`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
  margin: 20px 16px;
`;

const SurveyCount = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #f69738;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 16px;
`;

const Button = styled.button`
  width: 165px;
  height: 47px;
  background: #f7f7f7;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #2b2b2b;
`;
