import React, { useState } from 'react';
import styled from 'styled-components';
import { Dropdown } from 'react-dropdown-now';
import { Switch } from '@mui/material';
import 'react-dropdown-now/style.css';
import Delete from '../../common/images/delete.png';
import Drop from '../../common/images/drop.png';
import PlusSmall from '../../common/images/plusSmall.png';
import Dot from '../../common/images/dot3.png';
import Plus from '../../common/images/plus.png';

const SecondSurvey = () => {
  const [showOption, setShowOption] = useState(false);
  const handleDropItem = (event: any) => {
    setShowOption(!showOption);
    console.log(event.target.id);
  };
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return (
    <ContentWrap>
      <Title2>설문지 제목</Title2>
      <Question>
        <QTitle placeholder="질문" />
        <DropDownContainer>
          <Dropdown
            arrowClosed={
              <span className="arrow-opened rdn-control-icon">
                <DropIcon src={Drop} />
              </span>
            }
            arrowOpen={
              <span className="arrow-opened rdn-control-icon">
                <DropIcon src={Drop} />
              </span>
            }
            options={[
              {
                label: '객관식',
                value: 'multiple',
              },
              {
                label: '체크박스',
                value: 'check',
              },
              {
                label: '단답형',
                value: 'short',
              },
              {
                label: '장문형',
                value: 'long',
              },
            ]}
            value="multiple"
            baseClassName="rdn"
            className=""
            onChange={(value) => console.log('change!', value)}
            onSelect={(value) => console.log('selected!', value)} // always fires once a selection happens even if there is no change
            onClose={(closedBySelection) =>
              console.log('closedBySelection?:', closedBySelection)
            }
            onOpen={() => console.log('open!')}
          />
        </DropDownContainer>
        <Selections>
          <Selection>
            <ButtonContainer2>
              <Button2 />
              <LabelInput placeholder="옵션" />
            </ButtonContainer2>
            <DeleteButton />
          </Selection>
          <Selection>
            <ButtonContainer2>
              <Button2 />
              <LabelInput placeholder="옵션" />
            </ButtonContainer2>
            <DeleteButton />
          </Selection>
        </Selections>
        <PlusContainer>
          <PlusButton src={PlusSmall} /> 추가
        </PlusContainer>
        <OptionContainer>
          <OptionDropContainer>
            <OptionDropButton onClick={() => setShowOption(!showOption)} />
            {showOption && (
              <OptionDropBox>
                <DropItem onClick={() => handleDropItem(event)} id="des">
                  설명 추가
                </DropItem>
                <DropLine />
                <DropItem onClick={() => handleDropItem(event)} id="delete">
                  삭제
                </DropItem>
              </OptionDropBox>
            )}
          </OptionDropContainer>
          <Switch {...label} defaultChecked color="warning" />
        </OptionContainer>
      </Question>
      <SectionPlusButton>
        <PlusImg src={Plus} />
      </SectionPlusButton>
    </ContentWrap>
  );
};

const ContentWrap = styled.section`
  height: 100vh;
  background: #fff5ea;
  display: flex;
  flex-direction: column;
`;

const Title2 = styled.h1`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #2b2b2b;
  padding: 19px 0 0 16px;
`;

const Question = styled.section`
  background: #ffffff;
  border: 1px solid #f69738;
  box-sizing: border-box;
  border-radius: 8px;
  margin: 16px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
`;

const QTitle = styled.input`
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #d6d6d6;
  border-bottom: 1px solid #d6d6d6;
  margin: 0 20px;
`;

const DropDownContainer = styled.div`
  margin-top: 10px;
  align-self: flex-end;
  padding: 0 20px;
`;

const DropIcon = styled.img`
  width: 12px;
  height: 12px;
  display: inline-block;
`;

const Selections = styled.ul`
  margin-top: 20px;
  padding: 0 20px;
`;

const Selection = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`;

const ButtonContainer2 = styled.div`
  display: flex;
  align-items: center;
`;

const Button2 = styled.button`
  width: 22px;
  height: 22px;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  border-radius: 50%;
`;

const LabelInput = styled.input`
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  margin-left: 8px;
`;

const DeleteButton = styled.button`
  width: 16px;
  height: 16px;
  background-image: url(${Delete});
  background-repeat: no-repeat;
  background-size: cover;
`;

const PlusContainer = styled.button`
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #818181;
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 24px;
`;

const PlusButton = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 9px;
`;

const OptionContainer = styled.div`
  background: #fff4ea;
  border-top: 1px solid #f69738;
  box-sizing: border-box;
  border-radius: 0 0 8px 8px;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OptionDropContainer = styled.div``;

const OptionDropButton = styled.button`
  width: 24px;
  height: 24px;
  background-image: url(${Dot});
  background-repeat: no-repeat;
  background-size: cover;
`;

const OptionDropBox = styled.ul`
  background: #ffffff;
  box-shadow: 0px 0px 11px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 16px;
  width: 129px;
  height: 94px;
  position: absolute;
  transform: translateY(5px);
`;

const DropLine = styled.div`
  height: 1px;
  background: #f6f6f6;
  width: 100%;
  margin: 12px 0;
`;

const DropItem = styled.div`
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #2b2b2b;
`;

const SectionPlusButton = styled.button`
  padding: 20px 0;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 8px;
  margin: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlusImg = styled.img`
  width: 30px;
  height: 29.63px;
`;

export default SecondSurvey;
