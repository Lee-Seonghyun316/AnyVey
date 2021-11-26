import React from 'react';
import styled from 'styled-components';
import typoLogo from '../../common/images/typoLogo.png';
import alarmImage from '../../common/images/alarm.png';
import nextImage from '../../common/images/next.png';
import backImage from '../../common/images/back.png';

interface Props {
  headerStyle?: string;
  title?: string;
}
const Header: React.FC<Props> = ({ headerStyle, title }) => (
  <Wrap>
    {headerStyle === 'back&title' ? (
      <HeadCenterTitle>
        <Back />
        <Title>{title}</Title>
      </HeadCenterTitle>
    ) : (
      <Head>
        {headerStyle === 'home' && <Logo src={typoLogo} />}
        {headerStyle === 'thickTitle' && <TitleThick>{title}</TitleThick>}
        {headerStyle === 'next' && <Next />}
        {false && <Alarm onClick={() => console.log('alarm click')} />}
      </Head>
    )}
  </Wrap>
);

const Wrap = styled.div`
  position: sticky;
  top: 0;
  background: white;
  z-index: 99999;
`;

const Head = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 14px 16px;
  border-bottom: 1px solid #f1f1f1;
  height: 50px;
`;

const HeadCenterTitle = styled.header`
  display: flex;
  justify-content: center;
  padding: 14px 16px;
  border-bottom: 1px solid #f1f1f1;
  height: 50px;
`;

const Logo = styled.img`
  width: 76.13px;
  height: 20px;
`;

const TitleThick = styled.h1`
  ${({ theme }) => theme.typography.semiBold};
  font-size: 16px;
  line-height: 22px;
`;

const Title = styled.h2`
  ${({ theme }) => theme.typography.regular};
  font-size: 15px;
  line-height: 20px;
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

const Back = styled.button`
  position: absolute;
  left: 10px;
  width: 20px;
  height: 20px;
  background-image: url(${backImage});
  background-repeat: no-repeat;
  background-size: cover;
`;

export default Header;
