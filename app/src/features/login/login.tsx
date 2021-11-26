import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Logo from '../../common/images/loginLogo.png';
import BasicButton from '../../common/components/BasicButton';
import ErrorMessage from '../../common/components/ErrorMessage';
import { useNavigate } from 'react-router-dom';
import useInput from '../../common/util/useInput';
import { emailCheck, passwordCheck } from '../../common/util/auth';

const Login = () => {
  const [idError, setIdError] = useState(true);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();
  const [loginDisable, setLoginDisable] = useState(false);
  const idInput = useInput('');
  const passwordInput = useInput('');
  const handleLogin = () => {
    if (emailCheck(idInput.value)) {
      if (passwordCheck(passwordInput.value)) {
        setLoginDisable(true);
      }
    }
  };
  useEffect(() => {
    handleLogin();
  }, [idInput.value]);

  return (
    <Wrap>
      <LoginTitleContainer>
        <LogoIma src={Logo} />
        <LoginTitle>로그인</LoginTitle>
      </LoginTitleContainer>
      <Input
        placeholder="아이디"
        type="text"
        value={idInput.value}
        onChange={idInput.onChange}
      />
      <ErrorMessage error={idError} text="가입하지 않은 이용자 입니다" />
      <Input
        placeholder="비밀번호"
        type="text"
        value={passwordInput.value}
        onChange={passwordInput.onChange}
      />
      <ErrorMessage error={passwordError} text="비밀번호를 확인하세요" />
      <MenuContainer>
        <MenuButton>회원가입</MenuButton>
        <MenuButton>비밀번호 찾기</MenuButton>
      </MenuContainer>
      <BasicButton text="로그인" disable={loginDisable} />
      <MoveHomeBtn onClick={() => navigate('/')}>둘러보기</MoveHomeBtn>
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
