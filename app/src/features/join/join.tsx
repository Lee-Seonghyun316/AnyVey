import React from 'react';
import styled from 'styled-components';
import Header from '../header/header';

const Join = () => {
  return (
    <Wrap>
      <Header path="back&title" />
      <Explanation>회원정보를 입력해주세요</Explanation>
      <NickName>
        <Input placeholder="닉네임" />
        <OverlapButton>중복확인</OverlapButton>
      </NickName>
    </Wrap>
  );
};

export default Join;

const Wrap = styled.section``;

const Explanation = styled.span`
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #2b2b2b;
`;

const NickName = styled.div``;

const Input = styled.input``;

const OverlapButton = styled.button`
  background: #f69738;
  border-radius: 5px;
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
`;
