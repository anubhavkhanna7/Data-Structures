
class LLNode {
  // setting up values, next node is set by default as null
  constructor(value) {
      this.value = value
      this.next = null
      this.previous = null
  }
}

var LRUCache = function(capacity) {
  // let maxCapacity = capacity, head = null, map = new Map(), currentLength = 0
  this.maxCapacity = capacity
  this.head = null
  this.map = new Map()
  this.currentLength = 0
};

LRUCache.prototype.get = function(key) {
  if (this.map.has(key)) {
      let fetchedValue = this.map.get(key).value

      // if the fetched key is not last used, move it up the order
      if (this.head.value !== fetchedValue) {
          let temp = null, ptr = this.head
          while(ptr.next.value !== fetchedValue) {
              ptr = ptr.next
          }
          temp = ptr.next
          ptr.next = ptr.next.next
          temp.next = this.head
          this.head = temp
      }

      return Number(fetchedValue.split('-')[1])
  } else return -1
};

LRUCache.prototype.put = function(key, value) {
  let node = new LLNode(`${key}-${value}`)
  if (this.map.has(key)) {
      // get old value, navigate to it and remove it 
      let nodeValue = this.map.get(key).value

      if (this.head.value === nodeValue) {
          node.next = this.head.next
          this.head = node
      } else {
          node.next = this.head
          this.head = node
          let temp = this.head


          while (temp.next && temp.next.value !== nodeValue) {
              temp = temp.next
          }
          temp.next = temp.next?.next || null
      }

      this.map.set(key, node)
  } else {
      this.map.set(key, node)

      // if there is capacity to handle new additions
      if (this.currentLength < this.maxCapacity) {
          // add to the head and push the existing ones down
          if (this.head === null) {
              this.head = node
          } else {
              let temp = this.head
              node.next = temp
              this.head = node
          }
          this.currentLength ++

      } else {
          node.next = this.head
          this.head = node

          let temp = this.head
          let keyToBeDeleted = ''
          if (this.maxCapacity === 1) {
              keyToBeDeleted = this.head.next.value.split('-')[0]
              this.head.next = null
          } else {
              while(temp.next.next !== null) {
                  temp = temp.next
              }
              keyToBeDeleted = temp.next.value.split('-')[0]
              temp.next = null
          }
          this.map.delete(Number(keyToBeDeleted))
      }
  }
};