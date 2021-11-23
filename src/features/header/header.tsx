import React from 'react';
import styled from 'styled-components';
import typoLogo from '../../common/images/typoLogo.png';
import alarmImage from '../../common/images/alarm.png';

const Header = () => (
  <Head>
    <Logo src={typoLogo} />
    <Alarm onClick={() => console.log('alarm click')} />
  </Head>
);

const Head = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 14px 16px;
  border-bottom: 1px solid #f1f1f1;
`;

const Logo = styled.img`
  width: 76.13px;
  height: 20px;
`;

const Alarm = styled.button`
  width: 20px;
  height: 20px;
  background-image: url(${alarmImage});
  background-repeat: no-repeat;
  background-size: cover;
`;

export default Header;
