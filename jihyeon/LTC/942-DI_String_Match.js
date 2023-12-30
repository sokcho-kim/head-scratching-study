/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  const stack = [];
  let low = 0;
  let high = s.length;
  for (const x of s) {
    if (x === "I") {
      stack.push(low);
      low++;
    }
    if (x === "D") {
      stack.push(high);
      high--;
    }
  }
  return stack.concat(low);
};
