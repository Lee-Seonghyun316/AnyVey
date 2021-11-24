import React from 'react';
import styled from 'styled-components';
import Header from '../header/header';
import { theme } from '../../common/styles/theme';
import 'react-circular-progressbar/dist/styles.css';
import MySurvey from '../mySurvey/mySurvey';

const Home = () => {
  const states = [
    {
      id: 1,
      title: '이색 콜라보 식품 구매 경험 및 인식',
      respondent: 82,
      recruitment: 100,
      deadLine: '2021.12.12',
      gift: 'etc',
    },
    {
      id: 2,
      title: '이색 콜라보 식품 구매 경험 및 인식',
      respondent: 50,
      recruitment: 100,
      deadLine: '2021.12.12',
      gift: 'coffee',
    },
    {
      id: 3,
      title: '이색 콜라보 식품 구매 경험 및 인식',
      respondent: 50,
      recruitment: 100,
      deadLine: '2021.12.12',
    },
  ];
  return (
    <HomeContainer>
      <Header />
      <OngoingSurvey>
        <SectionTitleContainer>
          <SectionTitle>진행중인 설문 </SectionTitle>
          <Count>2</Count>
        </SectionTitleContainer>
        <Surveys>
          {states.map((state) => (
            <MySurvey
              key={state.id}
              title={state.title}
              respondent={state.respondent}
              recruitment={state.recruitment}
              deadLine={state.deadLine}
              gift={state.gift}
            />
          ))}
        </Surveys>
      </OngoingSurvey>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.section``;

const OngoingSurvey = styled.section`
  padding: 20px 0;
`;

const SectionTitleContainer = styled.div`
  padding: 0 16px;
`;

const SectionTitle = styled.text`
  font-weight: ${theme.typography.medium};
  font-size: 16px;
`;

const Count = styled.text`
  font-weight: ${theme.typography.medium};
  color: ${theme.colors.orange};
  font-size: 16px;
`;

const Surveys = styled.section`
  display: flex;
  flex-direction: row;
  overflow: scroll;
  padding: 20px 16px;
`;
