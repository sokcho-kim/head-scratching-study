# Intuition

키보드와 드라이브를 중첩으로 순회하며, 모든 키보드와 드라이브의 구매쌍의 모든 경우의 수를 구하고 그 중 예산보다 작으며 합계금액이 가장 큰 금액을 반환한다.
만약, 모든 구매쌍의 금액이 예산보다 크다면 구매가 불가능하므로 이를 고려하여 구매쌍의 가격을 저장할 금액을 -1로 초기화한다.

**TC = O(n)**

# Code

```
function getMoneySpent(keyboards, drives, b) {
    keyboards.sort((a,b)=>a-b);
    drives.sort((a,b)=>a-b);

    const n = keyboards.length;
    const m = drives.length;
    let max = -1;


    for(let i = 0; i <n; i++){
        for(let j = 0; j <m; j++){
            if(keyboards[i]+ drives[j] <= b){
                max = Math.max(max,  keyboards[i]+ drives[j])
            }
        }
    }
       return max;
}

```
