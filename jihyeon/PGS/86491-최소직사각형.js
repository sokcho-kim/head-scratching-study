function solution(sizes) {
  const maxWidth = sizes.map((x) => Math.max(...x));
  const minHeight = sizes.map((x) => Math.min(...x));
  return Math.max(...maxWidth) * Math.max(...minHeight);
}
