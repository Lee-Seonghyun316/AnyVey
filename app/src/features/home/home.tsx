import React, { Suspense, useCallback, useState } from 'react';
import styled from 'styled-components';
import Header from '../header/header';
import { useQuery } from 'react-query';
import ReactLoading from 'react-loading';
import 'react-circular-progressbar/dist/styles.css';
import MySurvey from './mySurvey';
import more from '../../common/images/more.png';
import coin from '../../common/images/coin.png';
import InterestSurvey from './interestSurvey';
import LogoutMySurvey from './logoutMySurvey';
import { interestSurveys } from '../../data/servey';
import axios from 'axios';
import ErrorBoundary from 'common/components/ErrorBoundary';
import { useNavigate } from 'react-router-dom';

type Survey = {
  id: number;
  title: string;
  respondent: number;
  recruitment: number;
  deadLine: string;
  gift: string | null;
};

const Home = () => {
  const interestsFirst = interestSurveys.slice(0, 4);
  const interestsSecond = interestSurveys.slice(3);
  const [moreToggle, setMoreToggle] = useState(false);
  const login = true;
  const handleMore = () => {
    setMoreToggle(!moreToggle);
  };

  // if (error) return null;

  return (
    <ErrorBoundary>
      <Suspense
        fallback={
          <LoadingContainer>
            <ContentWrap>
              <div
                style={{
                  position: 'fixed',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <h2>loading...</h2>
                <ReactLoading
                  type="spin"
                  color="grey"
                  height={'80%'}
                  width={'80%'}
                />
              </div>
            </ContentWrap>
          </LoadingContainer>
        }
      >
        <HomeContainer>
          <Header headerStyle="home" />
          <OngoingSurvey>
            {login && <SurveyList />}
            {!login && <LogoutMySurvey />}
          </OngoingSurvey>
          <ResponseGain>
            <GainTitle>설문 응답시 마일리지 지급!</GainTitle>
            <GainContent>
              <GainDes>
                마일리지는 설문조사 작성과 기존 설문 결과 데이터 열람 시 사용할
                수 있어요
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
        </HomeContainer>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Home;

const SurveyList = () => {
  const navigate = useNavigate();
  const { data: surveys, error } = useQuery(['forms'], async () => {
    const response = await axios.get('http://localhost:8080/surveys');
    return response.data;
  });

  if (error) return null;
  return (
    <>
      <SectionTitleContainer>
        <SectionTitle>진행중인 설문 </SectionTitle>
        <Count>{surveys.length}</Count>
      </SectionTitleContainer>
      <Surveys>
        {surveys.map((mySurvey: Survey) => (
          <MySurvey
            key={mySurvey.id}
            title={mySurvey.title}
            respondent={mySurvey.respondent}
            recruitment={mySurvey.recruitment}
            deadLine={mySurvey.deadLine}
            gift={mySurvey.gift}
            onClick={() => {
              navigate(`/my-survey/${mySurvey.id}`);
            }}
          />
        ))}
      </Surveys>
    </>
  );
};

const ContentWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoadingContainer = styled.div`
  height: 100vh;
`;
const HomeContainer = styled.section``;

const OngoingSurvey = styled.section`
  padding-top: 20px;
`;

const SectionTitleContainer = styled.div`
  padding: 0 16px;
`;

const SectionTitle = styled.text`
  ${({ theme }) => theme.typography.medium};
  font-size: 16px;
`;

const Count = styled.text`
  ${({ theme }) => theme.typography.medium};
  color: ${({ theme }) => theme.colors.orange};
  font-size: 16px;
`;

const Surveys = styled.section`
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
  ${({ theme }) => theme.typography.semiBold};
  font-size: 18px;
  margin-bottom: 8px;
`;

const GainImg = styled.img`
  width: 62px;
  height: 62px;
`;

const GainDes = styled.div`
  ${({ theme }) => theme.typography.regular};
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
  ${({ theme }) => theme.typography.medium};
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
