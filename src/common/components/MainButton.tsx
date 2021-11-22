import styled from 'styled-components';

const MainButton = styled.button<{ theme: any }>`
  padding: 13px 0;
  ${({ typography }) => typography.semiBold};
  background: linear-gradient(
    91.28eg,
    ${({ colors }) => colors.orange} -0.03%,
    ${({ colors }) => colors.coral} 99.97%
  );
`;

export default MainButton;
