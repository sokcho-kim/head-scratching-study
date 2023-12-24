function solution(arr) {
  const answer = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

// function solution(arr) {
//   const answer = arr.filter((ele, i) => arr[i + 1] !== ele);
//   return answer;
// }
