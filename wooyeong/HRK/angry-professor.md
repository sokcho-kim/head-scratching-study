# Intuition

1. 시작전에 도착한 학생들의 수를 저장할 변수 onTimeStudent를 선언한다.
2. 학생들의 도착시간을 하나씩 순회하며 도착시간이 0보다 작거나 같은, 즉 시작전에 도착한 학생들의 수를 count한다.
3. 최종적으로 시작전에 도착한 학생들의 수가 임계값 k보다 작으면 NO 아니면 YES를 반환한다.

**TC = O(n)**

# Code

```
function angryProfessor(k, a) {
    let onTimeStudent = 0;
    a.forEach((t)=>{
        if(t <=0) onTimeStudent++;
    });

    return k <= onTimeStudent ? "NO" : "YES"
}

```
