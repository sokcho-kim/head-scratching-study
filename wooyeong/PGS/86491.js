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
