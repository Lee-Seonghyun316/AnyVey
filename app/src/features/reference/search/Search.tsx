import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../header/header';
import search from '../../../common/images/search.png';
import { suggestionSurveys } from '../../../data/servey';
import RecommendSurvey from '../recommendSurvey';

const Search = () => {
  const [result, setResult] = useState(false);
  return (
    <Wrap>
      <Header headerStyle="back&title" title="검색결과" />
      <SearchContainer>
        <SearchImg src={search} />
        <SearchForm placeholder="키워드를 입력하세요" />
      </SearchContainer>
      {result ? (
        <RecommendSurveysContainer>
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
      ) : (
        <NotfoundContainer>
          <Notfound>검색 결과를 찾을 수 없습니다 :(</Notfound>
          <RecommendTitle>이 설문은 어때요?</RecommendTitle>
          <RecommendSurveysContainer>
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
        </NotfoundContainer>
      )}
    </Wrap>
  );
};

export default Search;

const Wrap = styled.section`
  height: 100vh;
`;

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

const RecommendSurveysContainer = styled.section`
  padding: 0 16px;
`;

const NotfoundContainer = styled.section``;

const Notfound = styled.div`
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  height: 220px;
  color: #2b2b2b;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RecommendTitle = styled.div`
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #2b2b2b;
  margin: 0 0 24px 16px;
`;
