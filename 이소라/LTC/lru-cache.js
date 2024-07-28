/*
- Approach
- LRUCache 클래스가 Map과 capacity 속성을 갖도록 합니다.
- get 메서드를 구현합니다.
  - Map에 해당 key 값이 없다면, -1을 반환합니다.
  - Map에 해당 key 값이 존재한다면, key에 대한 value를 반환하고 key와 value 쌍의 순서를 마지막으로 바꿔줍니다.
- put 메서드를 구현합니다.
  - Map에 해당 key 값이 존재한다면, key 값을 제거합니다.
  - Map에 key와 value 쌍을 저장합니다.
  - Map의 크기가 capacity 보다 크다면, 가장 오래된 key 값을 제거합니다.

- Complexity
Time complexity : O(1)
Space complexity : O(N)
*/

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

class LRUCache {
  constructor(capacity) {
    this.map = new Map();
    this.capacity = capacity;
  }

  get(key) {
    if (!this.map.has(key)) {
      return -1;
    }
    const value = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.map.has(key)) {
      this.map.delete(key);
    }

    this.map.set(key, value);

    if (this.map.size > this.capacity) {
      this.map.delete(this.map.keys().next().value);
    }
  }
}
