/*
### Approach
- two pointer를 사용하여 height 배열 양끝 left, right에서 area를 계산하고 최댓값을 갱신합니다.
- height 배열의 left 요소가 right 요소보다 작다면, left 인덱스에 1을 더해줍니다.
- height 배열의 right 요소가 left 요소보다 작다면, right 인덱스에 1을 빼줍니다.

### Complexity
- Time complexity : O(N)
- Space complexity : O(1)
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let area = 0;

  while (left < right) {
    const heightOfArea = Math.min(height[left], height[right]);
    const widthOfArea = right - left;
    area = Math.max(heightOfArea * widthOfArea, area);

    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return area;
};
