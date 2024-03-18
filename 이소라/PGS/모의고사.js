/*
### Approach
- 수포자 답안지의 배열을 만듭니다.
- answers 배열을 순회하면서 수포자들의 맞춘 문제 갯수를 구합니다.
- 수포자들의 맞춘 문제 갯수의 최댓값을 구합니다.
- 최댓값에 해당하는 수포자들의 인덱스가 담긴 배열을 반환합니다.

### Complexity
- Time complexity : O(N)
- Space complexity : O(N)
*/

function solution(answers) {
  const answer1 = [1, 2, 3, 4, 5];
  const answer2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const answer3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;

  answers.forEach((answer, index) => {
    const index1 = index % answer1.length;
    const index2 = index % answer2.length;
    const index3 = index % answer3.length;
    if (answer1[index1] === answer) {
      count1++;
    }
    if (answer2[index2] === answer) {
      count2++;
    }
    if (answer3[index3] === answer) {
      count3++;
    }
  });

  const highScore = Math.max(count1, count2, count3);
  const result = [
    { person: 1, score: count1 },
    { person: 2, score: count2 },
    { person: 3, score: count3 },
  ].reduce((arr, info) => {
    if (info.score === highScore) {
      arr.push(info.person);
    }
    return arr;
  }, []);

  return result;
}
