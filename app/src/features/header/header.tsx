import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import typoLogo from '../../common/images/typoLogo.png';
import alarmImage from '../../common/images/alarm.png';
import nextImage from '../../common/images/next.png';
import backImage from '../../common/images/back.png';

interface Props {
  headerStyle?: string;
  title?: string;
  onClick?: (event: MouseEvent) => void;
}

interface CSSProps {
  headerStyle?: string;
}

const Header: React.FC<Props> = ({ headerStyle, title, onClick }) => (
  <Wrap headerStyle={headerStyle}>
    {headerStyle === 'back&title' ? (
      <HeadCenterTitle>
        <Back />
        <Title>{title}</Title>
      </HeadCenterTitle>
    ) : (
      <Head>
        {headerStyle === 'home' && <Logo src={typoLogo} />}
        {headerStyle === 'thickTitle' && <TitleThick>{title}</TitleThick>}
        {headerStyle === 'prev' && (
          <Next onClick={(e) => onClick && onClick(e)} />
        )}
        {headerStyle === 'next' && (
          <Back onClick={(e) => onClick && onClick(e)} />
        )}
        {headerStyle === 'next' && <Enroll>등록</Enroll>}

        {false && <Alarm onClick={() => console.log('alarm click')} />}
      </Head>
    )}
  </Wrap>
);

const Wrap = styled.div<CSSProps>`
  position: sticky;
  top: 0;
  background: ${({ headerStyle }) =>
    headerStyle === 'next' ? '#FFF5EB' : 'white'};
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

const Enroll = styled.span`
  position: absolute;
  right: 13px;
  width: 20px;
  font-size: 14px;
  font-style: normal;
  line-height: 19px;
  letter-spacing: 0em;
  white-space: nowrap;
  ${({ theme }) => theme.typography.regular};
  text-align: left;
`;

export default Header;
