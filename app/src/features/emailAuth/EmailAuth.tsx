import React, { useState } from 'react';
import styled from 'styled-components';
import ErrorMessage from '../../common/components/ErrorMessage';
import BasicButton from '../../common/components/BasicButton';
import Header from '../header/header';

const EmailAuth = () => {
  const [certificationError, setCertificationError] = useState(false);
  return (
    <Wrap>
      <Header path="back&title" />
      <Content>
        <Form>
          <Explanation>
            <ExplanationText>이메일을 인증해주세요</ExplanationText>
            <DesText>
              해당 주소로 인증메일이 전송되었습니다. <br /> 인증번호를
              입력해주세요.
            </DesText>
          </Explanation>
          <Input placeholder="인증번호" />
          <ErrorMessage
            error={certificationError}
            text="인증번호를 다시 확인해주세요"
            width="70%"
            align={true}
          />
        </Form>
        <BasicButtonContainer>
          {certificationError ? (
            <ReSendButton>재전송</ReSendButton>
          ) : (
            <BasicButton text="인증하기" disable={false} />
          )}
        </BasicButtonContainer>
      </Content>
    </Wrap>
  );
};

export default EmailAuth;

const Wrap = styled.section``;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 16px;
  height: calc(100vh - 50px);
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Input = styled.input`
  font-size: 17px;
  line-height: 23px;
  text-align: center;
  width: 70%;
`;
const BasicButtonContainer = styled.div`
  margin-bottom: 46px;
  display: flex;
  flex-direction: column;
`;
const ReSendButton = styled.button`
  ${({ theme }) => theme.typography.semiBold};
  font-size: 16px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.orange};
  height: 48px;
  box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.14);
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #f69738;
`;
