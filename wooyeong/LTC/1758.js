/**
 * @param {string} s
 * @return {number}
 */

var minOperations = function (s) {
  const ex = ["0", "1"];
  let counter = 0;

  for (let i = 0; i < s.length; i++) {
    const idx = i % 2;

    if (ex[idx] !== s[i]) {
      counter++;
    }
  }

  return Math.min(counter, s.length - counter);
};
