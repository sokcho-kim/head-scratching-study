function solution(s) {
  const answer = s
    .split(" ")
    .map((char) => {
      return char.charAt(0).toUpperCase() + char.slice(1).toLowerCase();
    })
    .join(" ");

  return answer;
}
