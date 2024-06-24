# Intuition

합이 X가 되는 모든 num^N의 조합을 찾기 위해서 재귀를 사용하여 모든 경우의 수를 검사한다.

# Approach

1. num이 1인 경우부터 num^N을 더한 경우, 더하지않은 경우에 대해 num을 증가하며 재귀탐색한다.
2. 만약 sum이 X와 같거나 커진경우, num이 X의 제곱근보다 커진다면 그 이후에는 해당하는 답이 없으므로, 탐색을 종료하고 현재 sum이 X와 같은지 검사한다.
3. 만약 같다면 1을 아니라면 0을 반환한다.
4. 최종적 dfs의 합에 2를 나누어 반환한다.

# Complexity

**TC = O(n)**

# Code

```
function powerSum(X, N) {
    const maxNum = Math.sqrt(X);

    function dfs(num,sum){
        if(sum >= X|| num > maxNum ){
         return sum === X ? 1: 0
        }
        const temp =  Math.pow(num,N);
        const answer= dfs(num+1,sum) + dfs(num+1, sum + temp);
        return answer
    }
   return  dfs(0,0) / 2
}

```
