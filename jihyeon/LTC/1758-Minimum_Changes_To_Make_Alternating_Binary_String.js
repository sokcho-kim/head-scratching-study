/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (n) {
  let count = 0;

  for (let i = 0; i < n.length; i++) {
    const expectedValue = i % 2 === 0 ? "1" : "0";
    if (expectedValue === n[i]) {
      count++;
    }
  }

  return Math.min(count, n.length - count);
};
