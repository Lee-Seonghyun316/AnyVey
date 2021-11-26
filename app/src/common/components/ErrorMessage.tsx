import React from 'react';
import styled from 'styled-components';

interface Props {
  error: boolean;
  text: string;
  width?: string;
}

interface PropsCSS {
  error: boolean;
  width?: string;
}

const ErrorMessage: React.FC<Props> = ({ error, text, width }) => (
  <IdErrorMessage error={error} width={width}>
    {error && text}
  </IdErrorMessage>
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
  width: ${({ width }) => (width ? width : '100%')};
`;
