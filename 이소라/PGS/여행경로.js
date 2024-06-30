/*
### Approach
- DFS 알고리즘을 사용하여 갈 수 있는 경로를 탐색합니다.
- 'ICN' 공항에서 출발해서 tickets 배열을 순회하면서 갈 수 있는 공항을 찾습니다.
- tickets 배열을 모두 순회했을 때의 비행기가 거쳐간 경로가 담긴 배열을 반환합니다.

### Complexity
- Time complexity : O(N^2)
- Space complexity : O(N)
*/

function solution(tickets) {
  let isFirstSolution = true;
  const totalTickets = tickets.length;
  const visited = new Array(totalTickets).fill(false);
  let answer;

  tickets.sort();

  const dfs = (airport, usedTicketCount, path) => {
    if (usedTicketCount === totalTickets && isFirstSolution) {
      isFirstSolution = false;
      answer = path;
      return;
    }

    for (let ticketIndex = 0; ticketIndex < totalTickets; ticketIndex++) {
      if (visited[ticketIndex]) {
        continue;
      }

      let [startAirport, endAirport] = tickets[ticketIndex];

      if (airport === startAirport) {
        visited[ticketIndex] = true;
        dfs(endAirport, usedTicketCount + 1, [...path, endAirport]);
        visited[ticketIndex] = false;
      }
    }
  };

  dfs('ICN', 0, ['ICN']);
  return answer;
}
