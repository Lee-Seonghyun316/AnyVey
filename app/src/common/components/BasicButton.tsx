import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
  disable: boolean;
}

interface PropsCSS {
  disable: boolean;
}

const BasicButton: React.FC<Props> = ({ text, disable }) => (
  <Wrap disable={disable}>{text}</Wrap>
);

const Wrap = styled.button<PropsCSS>`
  ${({ theme }) => theme.typography.semiBold};
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  height: 48px;
  background: ${({ disable }) =>
    disable
      ? 'linear-gradient(91.28deg, #f69738 -0.03%, #f4745f 99.97%)'
      : 'linear-gradient(0deg, #C4C4C4, #C4C4C4), #B8B8B8'};
  box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.14);
  border-radius: 8px;
`;

export default BasicButton;
