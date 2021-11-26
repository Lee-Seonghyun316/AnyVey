import React from 'react';
import Header from '../../header/header';
import BasicButton from '../../../common/components/BasicButton';
import styled from 'styled-components';
import { fields, targetAges, targetGender } from '../../../data/category';

const BasicInfo = () => {
  const fieldsExceptIrrelevant = fields.filter((item) => item !== '무관');
  const ageExceptAll = targetAges.filter((item) => item !== '전체');
  const genderExceptAll = targetGender.filter((item) => item !== '전체');
  return (
    <Wrap>
      <Header style="back&title" title="회원가입" />
      <Content>
        <Form>
          <Explanation>
            <ExplanationText>기본정보를 입려해주세요</ExplanationText>
            <DesText>
              설문지를 응답확률이 높은 응답자에게 전달하고,
              <br />내 정보에 맞는 설문을 추천해주기 위함이에요
            </DesText>
          </Explanation>
          <Title>관련 분야</Title>
          <ButtonContainer>
            {fieldsExceptIrrelevant.map((item) => (
              <Button key={item}>{item}</Button>
            ))}
          </ButtonContainer>
          <Title>타겟 연령대</Title>
          <ButtonContainer>
            {ageExceptAll.map((item) => (
              <Button key={item}>{item}</Button>
            ))}
          </ButtonContainer>
          <Title>타겟 성별</Title>
          <ButtonContainer>
            {genderExceptAll.map((item) => (
              <Button key={item}>{item}</Button>
            ))}
          </ButtonContainer>
        </Form>
        <BasicButtonContainer>
          <BasicButton text="완료" disable={false} />
        </BasicButtonContainer>
      </Content>
    </Wrap>
  );
};

export default BasicInfo;

const Wrap = styled.section``;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 50px);
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const Explanation = styled.div`
  height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ExplanationText = styled.span`
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #2b2b2b;
  margin-bottom: 16px;
`;

const DesText = styled.span`
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #2b2b2b;
`;

const BasicButtonContainer = styled.div`
  margin-bottom: 46px;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #818181;
  margin: 0 16px 3px 16px;
`;
const ButtonContainer = styled.div`
  margin: 0 11px 27px 11px;
  display: flex;
  flex-wrap: wrap;
`;
const Button = styled.button`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  background: #ffffff;
  border: 1px solid #d6d6d6;
  border-radius: 6px;
  color: #d6d6d6;
  width: 78px;
  height: 29px;
  margin: 5px;
`;
