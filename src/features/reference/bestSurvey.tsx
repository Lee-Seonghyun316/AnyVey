import React from 'react';
import SpeechBubble from '../../common/images/speechBubble.png';
import styled from 'styled-components';

interface Props {
  title: string;
  recruitmentCount: number;
}

const BestSurvey: React.FC<Props> = ({ title, recruitmentCount }) => {
  return (
    <Wrap>
      <BestSurveyTitle>{title}</BestSurveyTitle>
      <Recruitment>
        <CountImg src={SpeechBubble} />
        <Count>{recruitmentCount}</Count>
      </Recruitment>
    </Wrap>
  );
};

export default BestSurvey;

const Wrap = styled.div`
  width: 166px;
  height: 164px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background: #ffffff;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BestSurveyTitle = styled.h2`
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
`;

const Recruitment = styled.div`
  width: 134px;
  height: 43px;
  background: #fff2e6;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Count = styled.text`
  font-weight: 600;
  font-size: 19px;
  line-height: 26px;
  color: #f69738;
`;

const CountImg = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;
