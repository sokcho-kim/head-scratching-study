/*
### Approach
- 문자열 2개를 비교하여 변형 가능 여부를 반환하는 isMutable 함수를 만듭니다.
- queue 내의 문자열과 bank 배열 내 문자열을 비교하여 변형 가능한 문자열을 queue에 넣습니다.
- endGene 문자열을 꺼냈을 때의 mutationCount를 반환합니다.

### Complexity
- Time complexity : O(N^2)
- Space complexity : O(N)
*/

/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (startGene, endGene, bank) {
  const isMutable = (str1, str2) => {
    let letterCount = 0;

    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        letterCount++;
      }
    }

    return letterCount === 1;
  };

  let mutationCount = 0;
  const queue = [startGene];
  const visited = new Array(bank.length).fill(false);

  while (queue.length) {
    const queueLength = queue.length;

    for (let i = 0; i < queueLength; i++) {
      const gene = queue.shift();

      if (gene === endGene) {
        return mutationCount;
      }

      bank.forEach((candidate, i) => {
        if (!visited[i] && isMutable(gene, candidate)) {
          queue.push(candidate);
          visited[i] = true;
        }
      });
    }

    mutationCount++;
  }

  return -1;
};
