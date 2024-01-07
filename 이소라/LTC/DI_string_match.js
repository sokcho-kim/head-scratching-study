/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  const answer = [];
  let countI = 0;
  let countD = s.length;

  for (const letter of s) {
    if (letter === 'I') {
      answer.push(countI);
      countI++;
    } else {
      answer.push(countD);
      countD--;
    }
  }

  answer.push(countD);

  return answer;
};
