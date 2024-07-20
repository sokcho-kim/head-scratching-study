/*
### Approach
- Max Heap 자료구조에 matrix 배열을 순회하면서 각 요소를 저장합니다.
- Max Heap의 길이가 k 이상일 때, Heap의 최댓값을 삭제합니다.
- matrix 배열 순회 후, Max Heap의 최상위 요소가 matrix 배열의 k번째 작은 요소가 됩니다.


### Complexity
- Time complexity : O(NlogK)
- Space complexity : O(k)
*/

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const maxHeap = new MaxBinaryHeap();
  const N = matrix.length;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      maxHeap.insert(matrix[i][j]);

      if (maxHeap.size() > k) {
        maxHeap.extractMax();
      }
    }
  }

  return maxHeap.extractMax();
};

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  size() {
    return this.values.length;
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    let parentIdx;
    let parent;

    while (idx > 0) {
      parentIdx = Math.floor((idx - 1) / 2);
      parent = this.values[parentIdx];

      if (element <= parent) break;

      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    let leftChildIdx;
    let rightChildIdx;
    let leftChild;
    let rightChild;
    let swap;

    while (true) {
      leftChildIdx = 2 * idx + 1;
      rightChildIdx = 2 * idx + 2;
      swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}
