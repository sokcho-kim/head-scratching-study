/*
### Approach
- 선물을 주고 받은 관계를 graph 2-D 배열에 저장합니다.
- 친구들의 각 선물 지수를 계산하여 1-D 배열에 저장합니다.
- 자신을 제외한 친구들과 선물 주고 받은 갯수와 선물 지수를 비교하여 다음달 받을 선물 갯수를 계산합니다.
- 다음달 받을 선물 갯수의 최댓값을 반환합니다.

### Complexity
- Time complexity : O(N^2)
- Space complexity : O(N)
*/

function solution(friends, gifts) {
  let answer = 0;
  const totalFriends = friends.length;
  const friendIndiceMap = friends.reduce((map, friend, index) => {
    map.set(friend, index);
    return map;
  }, new Map());
  const graph = Array.from({ length: totalFriends }, () => new Array(totalFriends).fill(0));

  gifts.forEach(giftDetails => {
    const [giver, receiver] = giftDetails.split(' ');
    const giverIndex = friendIndiceMap.get(giver);
    const receiverIndex = friendIndiceMap.get(receiver);
    graph[giverIndex][receiverIndex] += 1;
  });

  const presentIndice = friends.reduce((arr, friend, index) => {
    let givenPresent = 0;
    let receivedPresent = 0;

    for (let i = 0; i !== index, i < totalFriends; i++) {
      givenPresent += graph[index][i];
      receivedPresent += graph[i][index];
    }
    arr.push(givenPresent - receivedPresent);
    return arr;
  }, []);

  for (let i = 0; i < totalFriends; i++) {
    let presentCount = 0;

    for (let j = 0; j !== i, j < totalFriends; j++) {
      if (graph[i][j] > graph[j][i]) {
        presentCount++;
      } else if (graph[i][j] === graph[j][i] && presentIndice[i] > presentIndice[j]) {
        presentCount++;
      }
    }

    answer = Math.max(answer, presentCount);
  }

  return answer;
}
