function solution(s) {
  const strArr = s.split(' ');
  return strArr.map(convertToJadenCase).join(' ');
}

function convertToJadenCase(str) {
  let JadenCaseStr = '';

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (i === 0) {
      JadenCaseStr += letter.toUpperCase();
    } else {
      JadenCaseStr += letter.toLowerCase();
    }
  }

  return JadenCaseStr;
}
