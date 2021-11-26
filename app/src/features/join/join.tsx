import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../header/header';
import ErrorMessage from '../../common/components/ErrorMessage';
import BasicButton from '../../common/components/BasicButton';

interface PropsCSS {
  width?: string;
}

const Join = () => {
  const [nicknameError, setNicknameError] = useState(true);
  const [numberError, setNumberError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  return (
    <Wrap>
      <Header path="back&title" title="회원가입" />
      <Content>
        <Form>
          <Explanation>
            <ExplanationText>회원정보를 입력해주세요</ExplanationText>
          </Explanation>
          <NickName>
            <Input placeholder="닉네임" width="80%" />
            <OverlapButton>중복확인</OverlapButton>
          </NickName>
          <ErrorMessage
            error={nicknameError}
            text="이미 존재하는 닉네임입니다"
            width="80%"
          />
          <Input placeholder="전화번호 (숫자만 입력해주세요)" />
          <ErrorMessage
            error={numberError}
            text="올바른 전화번호를 입력해주세요"
          />
          <Input placeholder="이메일" />
          <ErrorMessage
            error={emailError}
            text="올바른 이메일 주소를 입력해주세요"
          />
        </Form>
        <BasicButtonContainer>
          <BasicButton text="확인" disable={false} />
        </BasicButtonContainer>
      </Content>
    </Wrap>
  );
};

export default Join;

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
`;

const Explanation = styled.div`
  height: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ExplanationText = styled.span`
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #2b2b2b;
`;

const NickName = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Input = styled.input<PropsCSS>`
  font-size: 17px;
  line-height: 23px;
  width: ${({ width }) => (width ? width : '100%')};
`;

const OverlapButton = styled.button`
  background: #f69738;
  border-radius: 5px;
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
`;

const BasicButtonContainer = styled.div`
  margin-bottom: 46px;
  display: flex;
  flex-direction: column;
`;
