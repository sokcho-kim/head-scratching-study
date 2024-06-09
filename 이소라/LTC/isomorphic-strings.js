/*
### Approach
- Map 자료구조를 만들고 s의 i번째 문자에 대칭되는 t의 i번째 문자의 관계를 저장합니다.
- Map에 저장된 문자와 t의 해당 순서의 문자가 다르다면 false를 반환합니다.
- Set 자료구조룰 사용하여 Map의 중복된 key 값이 없는지 확인합니다.

### Complexity
- Time complexity : O(N)
- Space complexity : O(N)
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], t[i]);
    } else {
      if (map.get(s[i]) !== t[i]) {
        return false;
      }
    }
  }

  return new Set([...map.values()]).size == map.size;
};
