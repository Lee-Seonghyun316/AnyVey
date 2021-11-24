import React from 'react';
import styled from 'styled-components';
import BottomBar from '../bottomBar/bottomBar';
import Header from '../header/header';
import search from '../../common/images/search.png';

const Reference = () => {
  return (
    <ReferenceContainer>
      <Header path="reference" />
      <SearchContainer>
        <SearchImg src={search} />
        <SearchForm placeholder="키워드를 입력하세요" />
      </SearchContainer>
      <BottomBar path="reference" />
    </ReferenceContainer>
  );
};

export default Reference;

const ReferenceContainer = styled.section``;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 16px;
  background: #f1f1f1;
  border-radius: 6px;
`;

const SearchForm = styled.input`
  width: 100%;
  height: 35px;
`;

const SearchImg = styled.img`
  width: 18px;
  height: 18px;
  margin: 8px 14px 9px 16px;
`;
