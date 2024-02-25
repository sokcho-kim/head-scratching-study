/*
### Approach
- for 문을 순회하면서 해당 인덱스의 숫자와 다음 인덱스의 숫자를 더한 값의 1의 자리수를 구해서 배열에 담습니다.
- 위 연산을 nums 배열의 길이가 1이 될 때까지 재귀적으로 반복한 후 결과를 반환합니다.

### Complexity
- Time complexity : ??
- Space complexity : O(N)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {
  const getTriangularSums = array => {
    if (array.length === 1) {
      return array[0];
    }
    const newNums = [];

    for (let i = 0; i < array.length - 1; i++) {
      newNums[i] = (array[i] + array[i + 1]) % 10;
    }

    return getTriangularSums(newNums);
  };

  return getTriangularSums(nums);
};
