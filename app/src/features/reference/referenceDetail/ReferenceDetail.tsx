import React from 'react';
import styled from 'styled-components';
import Header from '../../header/header';
import BasicButton from '../../../common/components/BasicButton';
import SpeechBubble from '../../../common/images/speechBubble.png';

const ReferenceDetail = () => {
  return (
    <Wrap>
      <Header style="back&title" />
      <Content>
        <Survey>
          <SurveyContainer>
            <Title>스마트 워치 사용자 대상 설문조사</Title>
            <Recruitment>
              <CountImg src={SpeechBubble} />
              <RecruitmentCounter>500</RecruitmentCounter>
            </Recruitment>
          </SurveyContainer>
          <DesText>#20~30대 #IT</DesText>
          <DesText>등록 2021.09.23</DesText>
          <SurveyText>
            스마트 워치 사용자 대상 설문조사 스마트 워치 사용자 대상 설문조사
            스마트 워치 사용자 대상 설문조사 스마트 워치 사용자 대상 설문조사
            스마트 워치 사용자 대상 설문조사 스마트 워치 사용자 대상 설문조사
            스마트 워치 사용자 대상 설문조사 스마트 워치 사용자 대상 설문조사
            스마트 워치 사용자 대상 설문조사 스마트 워치 사용자 대상 설문조사
            스마트 워치 사용자 대상 설문조사
          </SurveyText>
        </Survey>
        <BasicButtonContainer>
          <BasicButton text="인증하기" disable={true} />
        </BasicButtonContainer>
      </Content>
    </Wrap>
  );
};

export default ReferenceDetail;

const Wrap = styled.section``;

const SurveyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 23px 0 10px 0;
`;

const Survey = styled.div`
  padding: 0 16px;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #000000;
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 16px;
  height: calc(100vh - 50px);
`;

const BasicButtonContainer = styled.div`
  margin-bottom: 46px;
  display: flex;
  flex-direction: column;
`;

const DesText = styled.div`
  margin-top: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #b4b4b4;
  margin-bottom: 4px;
`;

const SurveyText = styled.div`
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
  margin-top: 40px;
`;
