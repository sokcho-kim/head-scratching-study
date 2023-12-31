function solution(arr) {
  let prevNum;
  let answer = [];
  arr.forEach(num => {
    if (num !== prevNum) {
      answer.push(num);
      prevNum = num;
    }
  });
  return answer;
}
