import React from 'react';
import styled from 'styled-components';
import { theme } from '../../common/styles/theme';

const LogoutMySurvey = () => (
  <Wrap>
    <Survey>
      <SurveyTitle>아직 진행 중인 설문이 없어요</SurveyTitle>
      <SurveyDes>
        로그인하고 간편하게 <br />
        설문을 만들어 보아요!
      </SurveyDes>
      <LoginButton>로그인하고 설문지 만들기</LoginButton>
    </Survey>
    <Survey>
      <SurveyTitle>설문 응답하고 마일리지 받자!</SurveyTitle>
      <SurveyDes>
        다른 사용자의 설문에 참여하면
        <br />
        마일리지를 받을 수 있어요
      </SurveyDes>
      <LoginButton>로그인하고 설문지 만들기</LoginButton>
    </Survey>
  </Wrap>
);

export default LogoutMySurvey;

const Wrap = styled.section`
  display: flex;
  flex-direction: row;
  overflow: scroll;
  padding: 20px 16px;
`;

const Survey = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 70px 16px 16px 16px;
  width: 254px;
  margin-right: 11px;
`;

const SurveyTitle = styled.h1`
  font-weight: ${theme.typography.semiBold};
  font-size: 16px;
  margin-bottom: 24px;
`;

const SurveyDes = styled.text`
  font-weight: ${theme.typography.regular};
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 71px;
`;

const LoginButton = styled.button`
  background: linear-gradient(91.28deg, #f69738 -0.03%, #f4745f 99.97%);
  border-radius: 8px;
  height: 50px;
  width: 222px;
`;
