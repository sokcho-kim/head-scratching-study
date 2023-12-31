/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  const operationStartWith0 = getOperationCount(s, '0');
  const operationStartWith1 = getOperationCount(s, '1');
  return Math.min(operationStartWith0, operationStartWith1);
};

var getOperationCount = (str, flipStr) => {
  let operationCount = 0;

  for (const letter of str) {
    if (letter !== flipStr) {
      operationCount++;
    }
    flipStr = flipStr === '0' ? '1' : '0';
  }

  return operationCount;
};
