function solution(s) {
  let answer = "";
  let preword = " ";
  for (let i of s) {
    answer += preword === " " ? i.toUpperCase() : i.toLowerCase();
    preword = i;
  }
  return answer;
}
