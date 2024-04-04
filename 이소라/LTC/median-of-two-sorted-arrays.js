/*
### Approach
- nums1 배열과 nums2 배열을 합치고 정렬합니다.
- 전체 길이가 홀수이면, 정중앙에 위치한 요소를 반환합니다.
- 전체 길이가 짝수이면, 정중앙 이전 요소와 정중앙 요소의 중간값을 반환합니다.

### Complexity
- Time complexity : O(M + N)
- Space complexity : O(M + N)
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let fullsorted;

  if (!nums1.length) {
    fullsorted = nums2;
  } else if (!nums2.length) {
    fullsorted = nums1;
  } else {
    fullsorted = [...nums1, ...nums2];
  }

  fullsorted.sort((a, b) => a - b);

  const midLength = Math.floor(fullsorted.length / 2);

  if (fullsorted.length % 2 === 1) {
    return fullsorted[midLength];
  } else {
    return (fullsorted[midLength - 1] + fullsorted[midLength]) / 2;
  }
};
