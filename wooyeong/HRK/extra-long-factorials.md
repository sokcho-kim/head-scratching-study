# Intuition

주어진 n의 n!을 구하는 문제로, 재귀 방식으로 곱셉하여 그 결과를 반환한다.
단, 자바스크립트에서 일반 숫자형의 최대값을 초과하므로 BigInt로 처리한다.

**TC = O(n)**

# Code

```

function extraLongFactorials(n) {
    n = BigInt(n)
    let answer = BigInt(1);


    function factorial(num){
        if(num < 1){
            return BigInt(1);
        }

        return  num * factorial(num - 1n)
    }

     answer = factorial(n).toString();
     console.log(answer)
     return answer;
}

```
