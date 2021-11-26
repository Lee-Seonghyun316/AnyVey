import React from 'react';
import styled from 'styled-components';
import Header from '../header/header';
import Rectangle from './Rectangle';
import { completeMySurvey, onGoingMySurvey } from '../../data/servey';

const MySurvey = () => {
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
          />
        ))}
      </OnGoing>
    </Wrap>
  );
};

export default MySurvey;

const Wrap = styled.section``;

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
