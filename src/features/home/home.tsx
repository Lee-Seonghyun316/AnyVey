import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../header/header';
import { theme } from '../../common/styles/theme';
import 'react-circular-progressbar/dist/styles.css';
import MySurvey from './mySurvey';
import more from '../../common/images/more.png';
import coin from '../../common/images/coin.png';
import InterestSurvey from './interestSurvey';
import BottomBar from '../bottomBar/bottomBar';
import LogoutMySurvey from './logoutMySurvey';

const Home = () => {
  const mySurveys = [
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

  const interests = [
    {
      id: 1,
      title: '제로(0kcal)음료에 대한 인식',
      tag: '#20~30대  #일상',
    },
    {
      id: 2,
      title: '‘그린워싱’ 제품 사용 경험에 대한 설문조사',
      tag: '#20~30대  #사회',
      gift: 'etc',
    },
    {
      id: 3,
      title: '헬스케어 플랫폼 설문조사',
      tag: '#20~30대  #IT',
    },
    {
      id: 4,
      title: '코로나19 이후 2030 우울감 정도',
      tag: '#20~30대  #사회',
      gift: 'coffee',
    },
    {
      id: 5,
      title: '코로나19 이후 2030 우울감 정도',
      tag: '#20~30대  #일상',
      gift: 'coffee',
    },
    {
      id: 6,
      title: '코로나19 이후 2030 우울감 정도',
      tag: '#20~30대  #일상',
      gift: 'coffee',
    },
  ];
  const interestsFirst = interests.slice(0, 4);
  const interestsSecond = interests.slice(3);
  const [moreToggle, setMoreToggle] = useState(false);
  const login = true;

  const handleMore = () => {
    setMoreToggle(!moreToggle);
  };

  return (
    <HomeContainer>
      <Header />
      <OngoingSurvey>
        <SectionTitleContainer>
          <SectionTitle>진행중인 설문 </SectionTitle>
          {login && <Count>{mySurveys.length}</Count>}
        </SectionTitleContainer>
        {login && (
          <MySurveys>
            {mySurveys.map((mySurvey) => (
              <MySurvey
                key={mySurvey.id}
                title={mySurvey.title}
                respondent={mySurvey.respondent}
                recruitment={mySurvey.recruitment}
                deadLine={mySurvey.deadLine}
                gift={mySurvey.gift}
              />
            ))}
          </MySurveys>
        )}
        {!login && <LogoutMySurvey />}
      </OngoingSurvey>
      <ResponseGain>
        <GainTitle>설문 응답시 마일리지 지급!</GainTitle>
        <GainContent>
          <GainDes>
            마일리지는 설문조사 작성과 기존 설문 결과 데이터 열람 시 사용할 수
            있어요
          </GainDes>
          <GainImg src={coin} />
        </GainContent>
      </ResponseGain>
      <InterestsTitle>관심분야 설문이 올라왔어요!</InterestsTitle>
      <InterestsContainer>
        {interestsFirst.map((interest) => (
          <InterestSurvey
            key={interest.id}
            title={interest.title}
            tag={interest.tag}
            gift={interest.gift}
          />
        ))}
        {moreToggle &&
          interestsSecond.map((interest) => (
            <InterestSurvey
              key={interest.id}
              title={interest.title}
              tag={interest.tag}
              gift={interest.gift}
            />
          ))}
      </InterestsContainer>
      <MoreButton onClick={handleMore}>
        {!moreToggle && <MoreImg src={more} />}
      </MoreButton>
      <BottomBar />
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

const GainContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GainTitle = styled.div`
  font-weight: ${theme.typography.semiBold};
  font-size: 18px;
  margin-bottom: 8px;
`;

const GainImg = styled.img`
  width: 62px;
  height: 62px;
`;

const GainDes = styled.div`
  font-weight: ${theme.typography.regular};
  font-size: 12px;
  line-height: 16px;
  color: #b4b4b4;
`;

const InterestsContainer = styled.section`
  margin: 0 16px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const InterestsTitle = styled.div`
  padding: 23px 16px 8px 16px;
  font-weight: ${theme.typography.medium};
  font-size: 16px;
  line-height: 22px;
  color: #2b2b2b;
`;

const MoreButton = styled.div`
  margin: 25px 0 33px 0;
  display: flex;
  justify-content: center;
`;

const MoreImg = styled.img`
  width: 24px;
  height: 24px;
`;
