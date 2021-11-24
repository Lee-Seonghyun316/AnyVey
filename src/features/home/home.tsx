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
        <MySurveys>
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
        </MySurveys>
      </OngoingSurvey>
      <ResponseGain>
        <GainTitle>설문 응답시 마일리지 지급!</GainTitle>
        <GainDes>
          마일리지는 설문조사 작성과 기존 설문 결과 데이터 열람 시 사용할 수
          있어요
        </GainDes>
      </ResponseGain>
      <InterestsTitle>관심분야 설문이 올라왔어요!</InterestsTitle>
      <Interests>
        <Interest>
          <InterestTitle>제로(0kcal)음료에 대한 인식</InterestTitle>
          <InterestTag>#20~30대 #일상</InterestTag>
          <InvolveButton>참여하기</InvolveButton>
        </Interest>
      </Interests>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.section``;

const OngoingSurvey = styled.section`
  padding-top: 20px;
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

const MySurveys = styled.section`
  display: flex;
  flex-direction: row;
  overflow: scroll;
  padding: 20px 16px;
`;

const ResponseGain = styled.section`
  background: #fff4f2;
  border-radius: 8px;
  padding: 16px;
  margin: 20px 16px;
`;

const GainTitle = styled.div`
  font-weight: ${theme.typography.semiBold};
  font-size: 18px;
  margin-bottom: 8px;
`;

const GainDes = styled.div`
  font-weight: ${theme.typography.regular};
  font-size: 12px;
  line-height: 16px;
  color: #b4b4b4;
`;

const Interests = styled.section`
  margin: 0 16px;
`;

const InterestsTitle = styled.div`
  padding: 23px 16px 20px 16px;
  font-weight: ${theme.typography.medium};
  font-size: 16px;
  line-height: 22px;
  color: #2b2b2b;
`;

const Interest = styled.div`
  padding: 16px 14px;
  border: 1px solid #e9e9e9;
  border-radius: 8px;
  width: 166px;
  height: 162px;
  position: relative;
`;

const InterestTitle = styled.h1`
  font-weight: ${theme.typography.semiBold};
  font-size: 14px;
  line-height: 19px;
  color: #2b2b2b;
  margin-bottom: 8px;
`;

const InterestTag = styled.text`
  font-weight: ${theme.typography.regular};
  font-size: 12px;
  line-height: 16px;
  color: #b4b4b4;
`;

const InvolveButton = styled.button`
  font-weight: ${theme.typography.semiBold};
  font-size: 12px;
  line-height: 16px;
  color: ${theme.colors.orange};
  border: 1px solid ${theme.colors.orange};
  border-radius: 5px;
  position: absolute;
  right: 14px;
  bottom: 14px;
`;
