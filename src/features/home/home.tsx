import React from 'react';
import styled from 'styled-components';
import Header from '../header/header';
import { theme } from '../../common/styles/theme';
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './custom.css';

const Home = () => {
  const percentage = 82;

  return (
    <HomeContainer>
      <Header />
      <OngoingSurvey>
        <Title>진행중인 설문 </Title>
        <Count>2</Count>
        <Surveys>
          <Survey>
            <SurveyTitle>이색 콜라보 식품 구매 경험 및 인식</SurveyTitle>
            <GraphContainer>
              <CircularProgressbarWithChildren
                value={percentage}
                styles={buildStyles({
                  pathColor: `${theme.colors.orange}`,
                  trailColor: '#F1F1F1',
                })}
              >
                <GraphText>{percentage}%</GraphText>
              </CircularProgressbarWithChildren>
            </GraphContainer>
          </Survey>
        </Surveys>
      </OngoingSurvey>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.section``;

const OngoingSurvey = styled.section`
  padding: 14px 16px;
`;

const Title = styled.text`
  font-weight: ${theme.typography.medium};
  font-size: 16px;
`;

const Count = styled.text`
  font-weight: ${theme.typography.medium};
  color: ${theme.colors.orange};
  font-size: 16px;
`;

const Surveys = styled.section``;

const Survey = styled.div``;

const SurveyTitle = styled.text`
  font-weight: ${theme.typography.semiBold};
  font-size: 18px;
`;

const GraphContainer = styled.div`
  width: 128px;
  height: 128px;
`;

const GraphText = styled.div`
  color: ${theme.colors.orange};
  font-weight: ${theme.typography.bold};
  font-size: 20px;
`;
