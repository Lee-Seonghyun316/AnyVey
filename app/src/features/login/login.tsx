import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../../common/images/loginLogo.png';
import BasicButton from '../../common/components/BasicButton';

interface PropsCSS {
  Error: boolean;
}

const Login = () => {
  const [idError, setIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  return (
    <Wrap>
      <LoginTitleContainer>
        <LogoIma src={Logo} />
        <LoginTitle>로그인</LoginTitle>
      </LoginTitleContainer>
      <Input placeholder="아이디" />
      <IdErrorMessage Error={idError}>
        {idError && '가입하지 않은 이용자 입니다'}
      </IdErrorMessage>
      <Input placeholder="비밀번호" />
      <IdErrorMessage Error={passwordError}>
        {passwordError && '비밀번호를 확인하세요'}
      </IdErrorMessage>
      <MenuContainer>
        <MenuButton>회원가입</MenuButton>
        <MenuButton>비밀번호 찾기</MenuButton>
      </MenuContainer>
      <BasicButton text="로그인" disable={true} />
      <MoveHomeBtn>둘러보기</MoveHomeBtn>
    </Wrap>
  );
};

export default Login;

const Wrap = styled.section`
  justify-content: center;
  height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
`;

const LoginTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoIma = styled.img`
  width: 69px;
  height: 69px;
  margin-bottom: 23px;
`;
const LoginTitle = styled.h1`
  ${({ theme }) => theme.typography.semiBold};
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 102px;
`;

const Input = styled.input`
  ${({ theme }) => theme.typography.regular};
  font-size: 16px;
  line-height: 22px;
`;

const IdErrorMessage = styled.span<PropsCSS>`
  ${({ theme }) => theme.typography.regular};
  color: ${({ theme }) => theme.colors.coral};
  border-top: 1px solid
    ${({ theme, Error }) => (Error ? theme.colors.coral : '#d5d5d5')};
  font-size: 17px;
  line-height: 23px;
  margin-bottom: 10px;
  height: 40px;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0 4px 0;
`;

const MenuButton = styled.button`
  ${({ theme }) => theme.typography.regular};
  font-size: 14px;
  line-height: 19px;
`;

const MoveHomeBtn = styled.button`
  margin-top: 48px;
  ${({ theme }) => theme.typography.regular};
  font-size: 16px;
  line-height: 22px;
  text-decoration-line: underline;
  color: #2b2b2b;
`;
