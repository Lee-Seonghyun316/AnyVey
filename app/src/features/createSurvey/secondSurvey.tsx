import React from 'react';
import styled from 'styled-components';
import { Dropdown } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';
import Delete from '../../common/images/delete.png';
import Drop from '../../common/images/drop.png';

const SecondSurvey = () => (
  <Content>
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
  </Content>
);

const Content = styled.section`
  height: 100vh;
  background: #fff5ea;
`;

const Title = styled.h1``;

const Question = styled.section``;

const QTitle = styled.h2``;

const DropDownContainer = styled.div``;

const DropIcon = styled.img`
  width: 12px;
  height: 12px;
  display: inline-block;
`;

const Button = styled.button`
  width: 22px;
  height: 22px;
  background: #ffffff;
  border: 1px solid #c4c4c4;
`;

const LabelInput = styled.input`
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #d6d6d6;
`;

const DeleteButton = styled.button`
  width: 16px;
  height: 16px;
  background-image: url(${Delete});
  background-repeat: no-repeat;
  background-size: cover;
`;

const PlusButton = styled.button``;

const OptionContainer = styled.div``;

const OptionDrop = styled.div``;

const SectionPlusButton = styled.button``;

export default SecondSurvey;
