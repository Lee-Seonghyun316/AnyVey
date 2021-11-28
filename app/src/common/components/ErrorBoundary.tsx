import React, { Component, ErrorInfo, ReactNode } from 'react';
import styled from 'styled-components';
import typoLogo from 'common/images/typoLogo.png';
interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Wrapper>
          <Logo src={typoLogo} />
          <Message>
            {'예상치 못한 오류가 발생하였습니다.\n 잠시후 다시 시도해주세요'}
          </Message>
        </Wrapper>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Message = styled.h1`
  margin-top: 30px;
  font-size: 20px;
  font-weight: 400;
  color: black;
  white-space: pre-wrap;
  text-align: center;
`;

const Logo = styled.img`
  width: 152px;
  height: 40px;
`;
