function solution(sizes) {
  let maxSizes = [];
  let minSizes = [];
  sizes.map(([w, h]) => {
    maxSizes.push(Math.max(w, h));
    minSizes.push(Math.min(w, h));
  });
  return Math.max(...maxSizes) * Math.max(...minSizes);
}
