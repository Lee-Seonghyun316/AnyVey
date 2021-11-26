import React from 'react';
import styled from 'styled-components';
import Header from '../../header/header';

const Search = () => {
  return (
    <Wrap>
      <Header path="back&title" title="검색결과" />
    </Wrap>
  );
};

export default Search;

const Wrap = styled.section``;
