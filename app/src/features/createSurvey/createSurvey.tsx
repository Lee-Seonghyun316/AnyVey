import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Header from '../header/header';
import { Dropdown } from 'react-dropdown-now';
import { Switch } from '@mui/material';
import 'react-dropdown-now/style.css';
import Delete from '../../common/images/delete.png';
import Drop from '../../common/images/drop.png';
import PlusSmall from '../../common/images/plusSmall.png';
import Dot from '../../common/images/dot3.png';
import Plus from '../../common/images/plus.png';

import {
  categories,
  gifts,
  targetAges,
  targetGender,
} from '../../data/category';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import SecondSurvey from './secondSurvey';

const PREV = 'prev';
const NEXT = 'next';

const CreateSurvey = () => {
  const [curPage, setCurPage] = useState(PREV);
  const { register, handleSubmit, control, watch } = useForm();
  const watchTitle = watch('title');
  const watchGForm = watch('gForm');
  const {
    fields,
    append,
    update,
    prepend,
    remove,
    swap,
    move,
    insert,
    replace,
  } = useFieldArray({
    control,
    name: 'gForm',
  });

  const [showOption, setShowOption] = useState(false);
  const handleDropItem = (event: any) => {
    setShowOption(!showOption);
    console.log(event.target.id);
  };
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  return (
    <Wrap>
      <Header
        headerStyle={curPage}
        onClick={() => {
          setCurPage((cur) => [PREV, NEXT].find((v) => v !== cur) || PREV);
        }}
      />
      {curPage === PREV ? (
        <>
          <Content>
            <TitleInput {...register('title')} placeholder="제목" />
            <Contour />
            <DesInput {...register('description')} placeholder="세부 설명" />
            <Contour />
            <Title>관련 분야</Title>
            <ButtonContainer>
              {categories.map(({ id, value, text }) => (
                <Controller
                  key={id}
                  name="category"
                  control={control}
                  render={({ field }) => (
                    <Button
                      onClick={(e) => {
                        if (!field.value) {
                          field.onChange([value]);
                          return;
                        }
                        !field.value.includes(value)
                          ? field.onChange(field.value.concat(value))
                          : field.onChange(
                              field.value.filter(
                                (item: string) => item !== value,
                              ),
                            );
                      }}
                      checked={field.value?.includes(value)}
                    >
                      {text}
                    </Button>
                  )}
                />
              ))}
            </ButtonContainer>
            <Title>타겟 연령대</Title>
            <ButtonContainer>
              {targetAges.map(({ id, value, text }) => (
                <Controller
                  key={id}
                  name="targetAge"
                  control={control}
                  render={({ field }) => (
                    <Button
                      onClick={(e) => {
                        if (!field.value) {
                          field.onChange([value]);
                          return;
                        }
                        !field.value.includes(value)
                          ? field.onChange(field.value.concat(value))
                          : field.onChange(
                              field.value.filter(
                                (item: string) => item !== value,
                              ),
                            );
                      }}
                      checked={field.value?.includes(value)}
                    >
                      {text}
                    </Button>
                  )}
                />
              ))}
            </ButtonContainer>
            <Title>타겟 성별</Title>
            <ButtonContainer>
              {targetGender.map(({ id, value, text }) => (
                <Controller
                  key={id}
                  name="targetGender"
                  control={control}
                  render={({ field }) => (
                    <Button
                      onClick={(e) => {
                        if (!field.value) {
                          field.onChange(value);
                          return;
                        }
                        field.value === value
                          ? field.onChange(null)
                          : field.onChange(value);
                      }}
                      checked={field.value === value}
                    >
                      {text}
                    </Button>
                  )}
                />
              ))}
            </ButtonContainer>
            <Title>목표 응답자 수</Title>
            <CountContainer>
              <CountInput
                placeholder="응답자 수"
                {...register('responderNum')}
              />
              <NoticeText>최대 500명</NoticeText>
            </CountContainer>
          </Content>
          <Title>종료 일정</Title>
          <DeadLine>2021.11.14</DeadLine>
          <Title>보상 제공 여부</Title>
          <MarginContainer>
            <NoticeText>
              보상은 서비스측에서 제공되는 것이 아닌, 작성자 측에서 응답자를
              추첨하여 개인적으로 전달하는 것입니다.
            </NoticeText>
          </MarginContainer>
          <ButtonContainer>
            {gifts.map((value) => (
              <Controller
                key={value}
                name="gift"
                control={control}
                render={({ field }) => (
                  <Button
                    onClick={(e) => {
                      if (!field.value) {
                        field.onChange(value);
                        return;
                      }
                      field.value === value
                        ? field.onChange(null)
                        : field.onChange(value);
                    }}
                    checked={field.value === value}
                  >
                    {value}
                  </Button>
                )}
              />
            ))}
          </ButtonContainer>
        </>
      ) : (
        <Wrap>
          <ContentWrap>
            <Title2>{watchTitle}</Title2>
            {fields.map((item, index) => {
              console.log(item);
              return (
                <Question key={item.id}>
                  <QTitle
                    {...register(`gForm.${index}.title`)}
                    placeholder="질문"
                  />
                  <DropDownContainer>
                    <Controller
                      key={item.id}
                      name={`gForm.${index}.type`}
                      control={control}
                      render={({ field }) => (
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
                          onSelect={(value) => field.onChange(value.value)} // always fires once a selection happens even if there is no change
                          onClose={(closedBySelection) =>
                            console.log(
                              'closedBySelection?:',
                              closedBySelection,
                            )
                          }
                          onOpen={() => console.log('open!')}
                        />
                      )}
                    />
                  </DropDownContainer>
                  <Selections>
                    {watchGForm[index].options.map(
                      (item: string, optionIndex: number) => {
                        return (
                          <Selection key={optionIndex}>
                            <ButtonContainer2>
                              <Button2 />
                              <LabelInput
                                placeholder="옵션"
                                {...register(
                                  `gForm.${index}.options.${optionIndex}`,
                                )}
                              />
                            </ButtonContainer2>
                            <DeleteButton />
                          </Selection>
                        );
                      },
                    )}
                  </Selections>
                  <PlusContainer>
                    <PlusButton
                      src={PlusSmall}
                      onClick={() => {
                        update(index, {
                          ...item,
                          options: watchGForm[index].options.concat(''),
                        });
                      }}
                    />{' '}
                    추가
                  </PlusContainer>
                  <OptionContainer>
                    <OptionDropContainer>
                      <OptionDropButton
                        onClick={() => setShowOption(!showOption)}
                      />
                      {showOption && (
                        <OptionDropBox>
                          <DropItem
                            onClick={() => handleDropItem(event)}
                            id="des"
                          >
                            설명 추가
                          </DropItem>
                          <DropLine />
                          <DropItem
                            onClick={() => handleDropItem(event)}
                            id="delete"
                          >
                            삭제
                          </DropItem>
                        </OptionDropBox>
                      )}
                    </OptionDropContainer>
                    <Switch {...label} defaultChecked color="warning" />
                  </OptionContainer>
                </Question>
              );
            })}
            <SectionPlusButton
              onClick={() => append({ type: 'check', options: [''] })}
            >
              <PlusImg src={Plus} />
            </SectionPlusButton>
          </ContentWrap>
        </Wrap>
      )}
      <Bottom>
        <BottomText>취소</BottomText>
        <BottomText onClick={handleSubmit((data) => console.log(data))}>
          저장
        </BottomText>
      </Bottom>
    </Wrap>
  );
};

export default CreateSurvey;

const Wrap = styled.section``;
const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
const TitleInput = styled.input`
  padding: 14px 0 0 0;
  margin: 0 16px;
`;
const Contour = styled.div`
  height: 1px;
  background: #d6d6d6;
  margin: 10px 16px;
`;
const DesInput = styled.textarea`
  height: 110px;
  border: none;
  margin: 0 16px;
`;
const Title = styled.h2`
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #818181;
  margin: 0 16px 3px 16px;
`;
const ButtonContainer = styled.div`
  margin: 0 11px 27px 11px;
  display: flex;
  flex-wrap: wrap;
`;

type ButtonProps = {
  checked?: boolean;
};
const Button = styled.button<ButtonProps>`
  font-style: normal;
  ${({ checked, theme }) =>
    checked ? theme.typography.bold : theme.typography.regular};
  font-size: 14px;
  line-height: 19px;
  background: #ffffff;
  ${({ checked, theme }) => {
    const color = checked ? theme.colors.orange : '#d6d6d6';

    return css`
      color: ${color};
      border: 1px solid ${color};
    `;
  }};
  border-radius: 6px;
  width: 78px;
  height: 29px;
  margin: 5px;
`;

const CountInput = styled.input`
  border-bottom: 1px solid #e9e9e9;
  width: 76px;
  margin: 0 16px;
  line-height: 19px;
`;

const CountContainer = styled.div`
  display: flex;
  margin: 8px 0 36px 0;
`;
const DeadLine = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #2b2b2b;
  border-bottom: 1px solid #2b2b2b;
  margin: 0 16px 32px 16px;
  width: 76px;
`;
const NoticeText = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #f4745f;
  margin-bottom: 6px;
`;
const MarginContainer = styled.div`
  margin: 0 16px;
`;
const BottomText = styled.button`
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
`;
const Bottom = styled.div`
  border-top: 1px solid #d8d8d8;
  display: flex;
  justify-content: space-between;
  height: 88.1px;
  padding: 0 16px;
  height: 54px;
  position: sticky;
  bottom: 0px;
  background: white;
  z-index: 99999;
`;

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
  &::::placeholder {
    color: #d6d6d6;
  }
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
