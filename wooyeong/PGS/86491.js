function solution(sizes) {
  const [maxW, maxH] = sizes.reduce(
    ([mw, mh], [a, b]) => {
      if (a > b) {
        return [Math.max(mw, a), Math.max(mh, b)];
      }
      return [Math.max(mw, b), Math.max(mh, a)];
    },

    [0, 0]
  );

  return maxW * maxH;
}

// function solution(sizes) {
//   const sortedSizes = sizes.map(([a, b]) => (b > a ? [b, a] : [a, b]));
//   let maxW = 0;
//   let maxH = 0;

//   for (let i = 0; i < sortedSizes.length; i++) {
//     if (sortedSizes[i][0] > maxW) maxW = sortedSizes[i][0];
//     if (sortedSizes[i][1] > maxH) maxH = sortedSizes[i][1];
//   }

//   return maxW * maxH;
// }
