import React from 'react';
import etc from '../../common/images/etc.png';
import styled from 'styled-components';
import { theme } from '../../common/styles/theme';
import coffee from '../../common/images/coffee.png';

interface Props {
  title: string;
  tag: any;
  gift: string | null;
}

const InterestSurvey: React.FC<Props> = ({ title, tag, gift }) => {
  return (
    <Interest>
      {gift && (gift === 'coffee' ? <Gift src={coffee} /> : <Gift src={etc} />)}
      <InterestTitle>{title}</InterestTitle>
      <InterestTag>{tag.join(' ')}</InterestTag>
      <InvolveButton>참여하기</InvolveButton>
    </Interest>
  );
};

export default InterestSurvey;

const Interest = styled.div`
  margin: 12px 0;
  padding: 16px 14px;
  border: 1px solid #e9e9e9;
  border-radius: 8px;
  width: 166px;
  height: 162px;
  position: relative;
`;

const InterestTitle = styled.h1`
  ${({ theme }) => theme.colors.semiBold};
  font-size: 14px;
  line-height: 19px;
  color: #2b2b2b;
  margin-bottom: 8px;
`;

const InterestTag = styled.text`
  ${({ theme }) => theme.typography.regular};
  font-size: 12px;
  line-height: 16px;
  color: #b4b4b4;
`;

const InvolveButton = styled.button`
  ${({ theme }) => theme.typography.regular};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.orange};
  border: 1px solid ${({ theme }) => theme.colors.orange};
  border-radius: 5px;
  position: absolute;
  right: 14px;
  bottom: 14px;
`;

const Gift = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(14px, -16px);
  width: 40px;
  height: 40px;
`;
