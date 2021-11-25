import React from 'react';
import styled from 'styled-components';
import Logo from '../../common/images/loginLogo.png';

const Login = () => {
  return (
    <Wrap>
      <LogoIma src={Logo} />
      <LoginTitle>로그인</LoginTitle>
      <Form>
        <IdInput placeholder="아이디" />
        <PasswordInput placeholder="비밀번호" />
      </Form>
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 16px 0;
  align-items: center;
  justify-content: center;
`;

const LogoIma = styled.img`
  width: 69px;
  height: 69px;
  margin-bottom: 23px;
`;
const LoginTitle = styled.h1`
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 102px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const IdInput = styled.input`
  border-bottom: 1px solid #d5d5d5;
`;

const PasswordInput = styled.input`
  border-bottom: 1px solid #d5d5d5;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MenuButton = styled.button`
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
`;

const LoginButton = styled.button`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  height: 48px;
  background: linear-gradient(91.28deg, #f69738 -0.03%, #f4745f 99.97%);
  box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.14);
  border-radius: 8px;
`;

const MoveHomeBtn = styled.button`
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  text-decoration-line: underline;
  color: #2b2b2b;
`;
