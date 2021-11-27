import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Header from '../header/header';
import { fields, gifts, targetAges, targetGender } from '../../data/category';
import { Controller, useForm } from 'react-hook-form';

const PREV = 'prev';
const NEXT = 'next';

const CreateSurvey = () => {
  const [curPage, setCurPage] = useState(PREV);
  const { register, handleSubmit, control } = useForm();

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
              {fields.map(({ id, value, text }) => (
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
      ) : null}
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
