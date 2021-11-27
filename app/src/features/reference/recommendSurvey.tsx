import React from 'react';
import SpeechBubble from '../../common/images/speechBubble.png';
import styled from 'styled-components';

interface Props {
  title: string;
  recruitment: number;
  description: string;
  tag: string;
  onClick: () => void;
}

const RecommendSurvey: React.FC<Props> = ({
  title,
  recruitment,
  description,
  tag,
  onClick,
}) => {
  return (
    <Wrap onClick={onClick}>
      <RecommendTitleContainer>
        <RecommendTitle>{title}</RecommendTitle>
        <Recruitment>
          <CountImg src={SpeechBubble} />
          <RecruitmentCounter>{recruitment}</RecruitmentCounter>
        </Recruitment>
      </RecommendTitleContainer>
      <RecommendDes>{description}</RecommendDes>
      <RecommendTag>{tag}</RecommendTag>
      <Line />
    </Wrap>
  );
};

const Wrap = styled.div``;

const RecommendTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RecommendTitle = styled.h1`
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 8px;
`;

const RecommendDes = styled.text`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #b4b4b4;
`;

const RecommendTag = styled.div`
  margin-top: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
`;

const Recruitment = styled.div`
  width: 50px;
  height: 20px;
  background: #ffffff;
  border: 1px solid #f69738;
  box-sizing: border-box;
  border-radius: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RecruitmentCounter = styled.text`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #f69738;
`;

const CountImg = styled.img`
  width: 13px;
  height: 13px;
  margin-right: 4px;
`;

const Line = styled.div`
  background: #f7f7f7;
  width: 100%;
  height: 1px;
  margin: 16px 0;
`;

export default RecommendSurvey;
