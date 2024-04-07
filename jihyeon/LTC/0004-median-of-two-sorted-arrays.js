/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const length = nums1.length + nums2.length;
  const arr = nums1.concat(...nums2).sort((a, b) => a - b);
  return length % 2 === 1 ? arr[Math.floor(length / 2)] : (arr[length / 2] + arr[length / 2 - 1]) / 2;
};

/**
# Intuition

# Approach

두 배열을 합치고 정렬하여 중앙값을 찾는다.

1. 두 배열 nums1과 nums2를 합친다.
2. 합친 배열을 정렬한다.
3. 정렬된 배열의 길이가 홀수인 경우, 중앙값은 정확히 중간에 위치한 값이고 길이가 짝수인 경우, 중앙에 위치한 두 값의 평균이 중앙값이 된다.
4. 계산된 중앙값을 반환한다.

# Complexity

- Time complexity: \(O((m+n)\log(m+n))\)
- Space complexity: \(O(m+n)\)

 */
