import React from 'react';
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';
import { theme } from '../../common/styles/theme';
import styled from 'styled-components';
import coffee from '../../common/images/coffee.png';
import etc from '../../common/images/etc.png';

interface Props {
  title: string;
  respondent: number;
  recruitment: number;
  deadLine: string;
  gift?: string;
}

const MySurvey: React.FC<Props> = ({
  title,
  respondent,
  recruitment,
  deadLine,
  gift,
}) => {
  const percentage = (respondent / recruitment) * 100;

  return (
    <Survey>
      <SurveyTitle>{title}</SurveyTitle>
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
          {recruitment}
        </GraphDes>
      </GraphContainer>
      <SurveyDes>
        <DeadLine>마감 {deadLine}</DeadLine>
        {gift && (
          <Gift>
            보상
            {gift === 'coffee' ? (
              <GiftImg src={coffee} />
            ) : (
              <GiftImg src={etc} />
            )}
          </Gift>
        )}
      </SurveyDes>
    </Survey>
  );
};

export default MySurvey;

const Survey = styled.div`
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 16px 16px 7px 16px;
  width: 254px;
  margin-right: 11px;
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
  white-space: nowrap;
`;

const SurveyDes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: #b4b4b4;
  font-size: 12px;
`;
const DeadLine = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
`;
const Gift = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const GiftImg = styled.img`
  width: 30px;
  height: 30px;
`;
