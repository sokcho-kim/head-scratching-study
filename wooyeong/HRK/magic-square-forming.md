# Intuition

**TC = O(n)**

# Code

```
function formingMagicSquare(s) {

    const patterns = [
        [[8,1,6],[3,5,7],[4,9,2]],
        [[6,1,8],[7,5,3],[2,9,4]],
        [[4,9,2],[3,5,7],[8,1,6]],
        [[2,9,4],[7,5,3],[6,1,8]],
        [[8,3,4],[1,5,9],[6,7,2]],
        [[4,3,8],[9,5,1],[2,7,6]],
        [[6,7,2],[1,5,9],[8,3,4]],
        [[2,7,6],[9,5,1],[4,3,8]],
        ];
        let minCount =Number.MAX_SAFE_INTEGER;

        for(let i = 0; i<patterns.length;i++){
            const pattern = patterns[i];
            let count = 0;
            for(let j = 0; j<3;j++){
                count += Math.abs(pattern[j][0] - s[j][0]);
                count += Math.abs(pattern[j][1] - s[j][1]);
                count += Math.abs(pattern[j][2] - s[j][2]);
            }
            minCount = Math.min(minCount, count);
        }

        return minCount;
}
```
