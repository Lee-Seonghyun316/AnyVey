import React from 'react';
import styled from 'styled-components';
import BottomBar from '../bottomBar/bottomBar';
import Header from '../header/header';
import search from '../../common/images/search.png';
import BestSurvey from './bestSurvey';
import { bestSurveys } from '../../data/servey';

const Reference = () => {
  return (
    <ReferenceContainer>
      <Header path="reference" />
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
      <BottomBar path="reference" />
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
  padding: 20px 16px;
  background: #fff7f5;
`;

const Title = styled.h1`
  font-weight: 600;
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
