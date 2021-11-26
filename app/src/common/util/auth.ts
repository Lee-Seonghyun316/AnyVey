export const emailCheck = (email: string) => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let errorText = '';
  if (email === '') {
    errorText = '이메일 주소를 입력해주세요';
    return [false, errorText];
  } else if (!email.includes('@') || !email.includes('.')) {
    errorText = '이메일 주소가 잘못되었습니다.';
    return [false, errorText];
  } else if (!emailRegex.test(email)) {
    errorText = '이메일 주소가 잘못되었습니다.';
    return [false, errorText];
  } else return [true];
};

export const passwordCheck = (password: string) => {
  let errorText = '';
  if (password === '') {
    errorText = '비밀번호를 입력해 주세요.';
    return [false, errorText];
  } else if (password.length < 8 || password.length > 16) {
    errorText = '비밀번호가 잘못 입력되었습니다. ';
    return [false, errorText];
  } else return true;
};
