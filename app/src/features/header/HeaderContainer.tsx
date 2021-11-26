import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
}

const HeaderContainer: React.FC<Props> = ({ children, title }) => {
  return (
    <Wrap>
      <Title>{title}</Title>
      {children}
    </Wrap>
  );
};

export default HeaderContainer;

const Wrap = styled.section`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 14px 16px;
  border-bottom: 1px solid #f1f1f1;
  height: 50px;
`;

const Title = styled.h1`
  ${({ theme }) => theme.typography.regular};
  font-size: 15px;
  line-height: 20px;
  position: absolute;
  left: 50vw;
  top: 25px;
  transform: translate(-50%, -50%);
`;
