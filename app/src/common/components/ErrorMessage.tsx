import React from 'react';
import styled from 'styled-components';

interface Props {
  error: boolean;
  text: string;
}

interface PropsCSS {
  error: boolean;
}

const ErrorMessage: React.FC<Props> = ({ error, text }) => (
  <IdErrorMessage error={error}>{error && text}</IdErrorMessage>
);

export default ErrorMessage;

const IdErrorMessage = styled.span<PropsCSS>`
  ${({ theme }) => theme.typography.regular};
  color: ${({ theme }) => theme.colors.coral};
  border-top: 1px solid
    ${({ theme, error }) => (error ? theme.colors.coral : '#d5d5d5')};
  font-size: 17px;
  line-height: 23px;
  margin-bottom: 10px;
  height: 40px;
`;
