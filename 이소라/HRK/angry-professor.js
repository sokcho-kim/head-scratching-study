/*
### Approach
- time이 0보다 작거나 같은 학생의 수를 구합니다.
- 위 학생 수가 k보다 작은 경우, YES를 그렇지 않은 경우 NO를 반환합니다.

### Complexity
- Time complexity : O(N)
- Space complexity : O(1)
*/

function angryProfessor(k, a) {
  const lateStudents = a.filter(time => time <= 0).length;
  return lateStudents < k ? 'YES' : 'NO';
}
