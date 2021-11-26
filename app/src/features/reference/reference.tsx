import React from 'react';
import styled from 'styled-components';
import BottomBar from '../bottomBar/bottomBar';
import Header from '../header/header';
import search from '../../common/images/search.png';
import BestSurvey from './bestSurvey';
import { bestSurveys, suggestionSurveys } from '../../data/servey';
import RecommendSurvey from './recommendSurvey';

const Reference = () => {
  return (
    <ReferenceContainer>
      <Header headerStyle="thickTitle" title="자료실" />
      <SearchContainer>
        <SearchImg src={search} />
        <SearchForm placeholder="키워드를 입력하세요" />
      </SearchContainer>
      <BestSurveysContainer>
        <Title>
          <StrongTitle>응답률 최고!</StrongTitle> 마일리지로 시간 아끼자
        </Title>
        <Surveys>
          {bestSurveys.map((bestSurvey) => (
            <BestSurvey
              key={bestSurvey.id}
              title={bestSurvey.title}
              recruitmentCount={bestSurvey.recruitmentCount}
            />
          ))}
        </Surveys>
      </BestSurveysContainer>
      <RecommendSurveysContainer>
        <Title>추천 설문</Title>
        {suggestionSurveys.map((item) => (
          <RecommendSurvey
            key={item.id}
            title={item.title}
            recruitment={item.recruitment}
            description={item.description}
            tag={item.tag}
          />
        ))}
      </RecommendSurveysContainer>
    </ReferenceContainer>
  );
};

export default Reference;

const ReferenceContainer = styled.section``;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 16px;
  background: #f1f1f1;
  border-radius: 6px;
`;

const SearchForm = styled.input`
  width: 100%;
  height: 35px;
`;

const SearchImg = styled.img`
  width: 18px;
  height: 18px;
  margin: 8px 14px 9px 16px;
`;

const BestSurveysContainer = styled.section`
  margin-bottom: 45px;
  padding: 20px 16px;
  background: #fff7f5;
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 20px;
`;

const StrongTitle = styled.span`
  font-weight: bolder;
`;

const Surveys = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RecommendSurveysContainer = styled.section`
  padding: 0 16px;
`;
