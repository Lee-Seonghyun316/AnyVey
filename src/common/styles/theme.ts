import { css } from 'styled-components';

const fontFamily = css`
  font-family: Noto Sans KR;
`;

const typography = Object.freeze({
  bold: css`
    ${fontFamily}
    font-weight: 700;
  `,
  semiBold: css`
    ${fontFamily}
    font-weight: 600;
  `,
  medium: css`
    ${fontFamily}
    font-weight: 500;
  `,
  regular: css`
    ${fontFamily}
    font-weight: 400;
  `,
});

const colors = Object.freeze({
  orange: '#F69738',
  coral: '#F4745F',
});

export const theme = {
  typography,
  colors,
};
