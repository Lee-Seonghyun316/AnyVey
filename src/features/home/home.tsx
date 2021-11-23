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
  const respondent = 82;
  const Recruitment = 100;
  const percentage = (respondent / Recruitment) * 100;

  return (
    <HomeContainer>
      <Header />
      <OngoingSurvey>
        <TitleContainer>
          <Title>진행중인 설문 </Title>
          <Count>2</Count>
        </TitleContainer>
        <Surveys>
          <Survey>
            <SurveyTitle>이색 콜라보 식품 구매 경험 및 인식</SurveyTitle>
            <GraphContainer>
              <GraphSize>
                <CircularProgressbarWithChildren
                  value={percentage}
                  styles={buildStyles({
                    pathColor: `${theme.colors.orange}`,
                    trailColor: '#F1F1F1',
                  })}
                >
                  <GraphText>{percentage}%</GraphText>
                </CircularProgressbarWithChildren>
              </GraphSize>
              <GraphDes>
                <GraphDesTitle>응답현황</GraphDesTitle> <br /> {percentage}/
                {Recruitment}
              </GraphDes>
            </GraphContainer>
            <SurveyDes>
              <DeadLine>마감 2021.12.12</DeadLine>
              <Gift>보상</Gift>
            </SurveyDes>
          </Survey>
        </Surveys>
      </OngoingSurvey>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.section``;

const OngoingSurvey = styled.section`
  padding: 20px 16px;
`;

const TitleContainer = styled.div`
  margin-bottom: 20px;
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

const Survey = styled.div`
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 16px;
  width: 254px;
`;

const SurveyTitle = styled.div`
  font-weight: ${theme.typography.semiBold};
  font-size: 18px;
`;

const GraphContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 30px 0;
`;

const GraphSize = styled.div`
  width: 128px;
  height: 128px;
  margin-right: 16px;
`;

const GraphText = styled.div`
  color: ${theme.colors.orange};
  font-weight: ${theme.typography.bold};
  font-size: 20px;
`;

const GraphDes = styled.div`
  line-height: 16.34px;
  font-size: 12px;
`;

const GraphDesTitle = styled.text`
  color: #b4b4b4;
`;

const SurveyDes = styled.div`
  display: flex;
  justify-content: space-between;
  color: #b4b4b4;
  font-size: 12px;
`;
const DeadLine = styled.div``;
const Gift = styled.div``;
