import React from 'react';
import styled from 'styled-components';
import Logo from '../../common/images/loginLogo.png';

const Login = () => {
  return (
    <Wrap>
      <LoginTitleContainer>
        <LogoIma src={Logo} />
        <LoginTitle>로그인</LoginTitle>
      </LoginTitleContainer>
      <Input placeholder="아이디" />
      <Input placeholder="비밀번호" />
      <MenuContainer>
        <MenuButton>회원가입</MenuButton>
        <MenuButton>비밀번호 찾기</MenuButton>
      </MenuContainer>
      <LoginButton>로그인</LoginButton>
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
  border-bottom: 1px solid #d5d5d5;
  ${({ theme }) => theme.typography.regular};
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 40px;
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

const LoginButton = styled.button`
  ${({ theme }) => theme.typography.semiBold};
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  height: 48px;
  background: linear-gradient(91.28deg, #f69738 -0.03%, #f4745f 99.97%);
  box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.14);
  border-radius: 8px;
`;

const MoveHomeBtn = styled.button`
  margin-top: 48px;
  ${({ theme }) => theme.typography.regular};
  font-size: 16px;
  line-height: 22px;
  text-decoration-line: underline;
  color: #2b2b2b;
`;
