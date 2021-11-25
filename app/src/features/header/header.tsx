import React from 'react';
import styled from 'styled-components';
import typoLogo from '../../common/images/typoLogo.png';
import alarmImage from '../../common/images/alarm.png';
import nextImage from '../../common/images/next.png';
import { theme } from '../../common/styles/theme';

interface Props {
  path?: string;
}

const Header: React.FC<Props> = ({ path }) => (
  <Head>
    {path === 'home' && <Logo src={typoLogo} />}
    {path === 'reference' && <Title>자료실</Title>}
    {path === 'next' && <Next />}
    {false && <Alarm onClick={() => console.log('alarm click')} />}
  </Head>
);

const Head = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 14px 16px;
  border-bottom: 1px solid #f1f1f1;
  height: 50px;
`;

const Logo = styled.img`
  width: 76.13px;
  height: 20px;
`;

const Title = styled.h1`
  font-weight: ${theme.typography.semiBold};
  font-size: 16px;
  line-height: 22px;
`;

const Alarm = styled.button`
  width: 20px;
  height: 20px;
  background-image: url(${alarmImage});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Next = styled.button`
  position: absolute;
  right: 10px;
  width: 20px;
  height: 20px;
  background-image: url(${nextImage});
  background-repeat: no-repeat;
  background-size: cover;
`;

export default Header;
