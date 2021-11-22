import React from 'react';
import styled from 'styled-components';
import Header from '../header/header';
import { theme } from '../../common/styles/theme';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Home = () => {
  const percentage = 66;

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
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.25,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: 'butt',

                  // Text size
                  textSize: '16px',

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,

                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',

                  // Colors
                  pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                  textColor: '#f88',
                  trailColor: '#d6d6d6',
                  backgroundColor: '#3e98c7',
                })}
              />
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
`;

const Count = styled.text`
  font-weight: ${theme.typography.medium};
  color: ${theme.colors.orange};
`;

const Surveys = styled.section``;

const Survey = styled.div``;

const SurveyTitle = styled.text`
  font-weight: ${theme.typography.semiBold};
`;

const GraphContainer = styled.div`
  width: 128px;
  height: 128px;
`;

const Graph = styled.div`
  width: 128px;
  height: 128px;
  background: linear-gradient(91.28deg, #f69738 -0.03%, #f4745f 99.97%);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HelpGraph = styled.div`
  width: 108px;
  height: 108px;
  background: white;
  border-radius: 50%;
`;

const GraphDes = styled.text``;

const GraphCount = styled.text``;
