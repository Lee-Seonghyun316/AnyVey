export const fields = [
  {
    id: 1,
    value: 'society',
    text: '사회',
  },
  {
    id: 2,
    value: 'economy',
    text: '정치/경제',
  },
  {
    id: 3,
    value: 'life',
    text: '일상',
  },
  {
    id: 4,
    value: 'it',
    text: 'IT',
  },
  {
    id: 5,
    value: 'science',
    text: '과학',
  },
  {
    id: 6,
    value: 'art',
    text: '예술',
  },
  {
    id: 7,
    value: 'sport',
    text: '스포츠',
  },
  {
    id: 8,
    value: 'irrelevant',
    text: '무관',
  },
];

export const targetAges = ['10대', '20대', '30대', '40대', '50대', '전체'].map(
  (text, index) => ({
    id: index + 1,
    value: index !== 5 ? `${index + 1}0` : 'all',
    text,
  }),
);

export const targetGender = ['남성', '여성', '전체'];

export const gifts = ['커피', '햄버거', '기타'];
