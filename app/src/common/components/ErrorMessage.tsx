import React from 'react';
import styled from 'styled-components';

interface Props {
  error: boolean;
  text: string;
  width?: string;
  align?: boolean;
}

interface PropsCSS {
  error: boolean;
  width?: string;
  align?: boolean;
}

const ErrorMessage: React.FC<Props> = ({ error, text, width, align }) => (
  <IdErrorMessage error={error} width={width} align={align}>
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
  text-align: ${({ align }) => (align ? 'center' : 'left')};
`;
