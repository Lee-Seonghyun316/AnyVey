import React from 'react';
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';
import styled from 'styled-components';
import coffee from '../../common/images/coffee.png';
import hamburger from '../../common/images/hamburger.png';
import etc from '../../common/images/etc.png';

interface Props {
  title: string;
  recruitment: number;
  respondent: number;
  deadline: string;
  gift: string | null;
  onClick: () => void;
}

const Rectangle: React.FC<Props> = ({
  title,
  recruitment,
  respondent,
  gift,
  deadline,
  onClick,
}) => {
  return (
    <Wrap onClick={onClick}>
      <SurveyText>
        <SurveyTitle>{title}</SurveyTitle>
        <SurveyDes>
          <SurveyRecruitment>
            {respondent} / {recruitment}
          </SurveyRecruitment>
          <SurveyDeadline>마감 {deadline}</SurveyDeadline>
        </SurveyDes>
      </SurveyText>
      <SurveyGraph>
        <CircularProgressbarWithChildren
          value={100}
          styles={buildStyles({
            pathColor: `#F69738`,
            trailColor: '#F1F1F1',
          })}
        >
          <GraphText>{100}%</GraphText>
        </CircularProgressbarWithChildren>
      </SurveyGraph>
      {gift &&
        (gift === 'coffee' ? (
          <Gift src={coffee} />
        ) : gift === 'hamburger' ? (
          <Gift src={hamburger} />
        ) : (
          <Gift src={etc} />
        ))}
    </Wrap>
  );
};

export default Rectangle;

const Wrap = styled.div`
  position: relative;
  background: #ffffff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  margin: 0 16px 16px 16px;
`;

const SurveyText = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const SurveyGraph = styled.div`
  width: 82px;
  height: 82px;
  margin-left: 19px;
`;

const SurveyTitle = styled.h2`
  ${({ theme }) => theme.typography.semiBold};
  font-size: 14px;
  line-height: 19px;
  color: #2b2b2b;
`;

const SurveyDes = styled.div``;

const SurveyRecruitment = styled.span`
  ${({ theme }) => theme.typography.regular};
  font-size: 12px;
  line-height: 16px;
  color: #2b2b2b;
  margin-right: 10px;
`;

const SurveyDeadline = styled.span`
  ${({ theme }) => theme.typography.regular};
  font-size: 12px;
  line-height: 16px;
  color: #b4b4b4;
`;

const GraphText = styled.div`
  color: ${({ theme }) => theme.colors.orange};
  ${({ theme }) => theme.typography.bold};
  font-size: 20px;
`;

const Gift = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(14px, -16px);
  width: 30px;
  height: 30px;
`;
