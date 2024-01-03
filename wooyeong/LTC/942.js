/**
 * @param {string} s
 * @return {number[]}
 */
// Todo : two pointer
// var diStringMatch = function (s) {
//   let i = 0;
//   let samples = Array.from({ length: s.length + 1 }, () => i++);
//   const result = [];
//   for (let char of s) {
//     if (char === "I") {
//       const min = samples.shift();
//       result.push(min);
//     } else {
//       const max = samples.pop();
//       result.push(max);
//     }
//   }
//   return [...result, ...samples];
// };

var diStringMatch = function (s) {
  let i = 0;
  let samples = Array.from({ length: s.length + 1 }, () => i++);

  let lpt = 0;
  let rpt = samples.length - 1;

  const result = [];
  for (let char of s) {
    if (char === "I") {
      result.push(samples[lpt++]);
    } else {
      result.push(samples[rpt--]);
    }
  }
  return [...result, samples[lpt]];
};
