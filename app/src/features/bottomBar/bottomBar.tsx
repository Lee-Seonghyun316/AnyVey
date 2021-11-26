import React from 'react';
import styled from 'styled-components';
import HomeOn from '../../common/images/bottomHomeOn.png';
import Home from '../../common/images/bottomHome.png';
import Reference from '../../common/images/bottomReference.png';
import ReferenceOn from '../../common/images/bottoemReferenceOn.png';
import MySurvey from '../../common/images/bottomMySurvey.png';
import User from '../../common/images/bottomUser.png';
import Plus from '../../common/images/plusButton.png';
import { theme } from '../../common/styles/theme';

interface Props {
  setIsModalOpen?: React.Dispatch<React.SetStateAction<boolean>> | void;
  path: string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

const BottomBar: React.FC<Props> = ({ path, setIsModalOpen = noop }) => {
  return (
    <Wrap>
      <Button>
        {path === 'home' ? <Img src={HomeOn} /> : <Img src={Home} />}홈
      </Button>
      <Button>
        {path === 'reference' ? (
          <Img src={ReferenceOn} />
        ) : (
          <Img src={Reference} />
        )}
        자료실
      </Button>
      <Button
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <PlusImg src={Plus} />
      </Button>
      <Button>
        {path === 'mySurvey' ? <Img src={HomeOn} /> : <Img src={MySurvey} />}
        내설문
      </Button>
      <Button>
        {path === 'User' ? <Img src={HomeOn} /> : <Img src={User} />}마이
      </Button>
    </Wrap>
  );
};

export default BottomBar;

const Wrap = styled.footer`
  border-top: 1px solid #f1f1f1;
  height: 54px;
  display: flex;
  justify-content: space-around;
  position: sticky;
  bottom: 0;
  width: 100vw;
  background-color: white;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-weight: ${theme.typography.medium};
  font-size: 10px;
  line-height: 14px;
  color: #686868;
`;

const Img = styled.img`
  width: 22px;
  height: 22px;
  margin-bottom: 4px;
`;

const PlusImg = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 4px;
  transform: translateY(-7px);
`;
