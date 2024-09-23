
var TwoSum = function() {
  this.numMap = new Map()
  this.arr = []
};

/** 
* @param {number} number
* @return {void}
*/
TwoSum.prototype.add = function(number) {
  this.arr.push(number)
  this.numMap.set(number, (this.numMap.get(number) || 0) + 1)
};

/** 
* @param {number} value
* @return {boolean}
*/
TwoSum.prototype.find = function(value) {
  if (this.arr.length < 2) return false
  for (let i = 0; i<this.arr.length; i++) {
      if (this.numMap.has(value-this.arr[i])) {
          if (value-this.arr[i] !== this.arr[i]) return true
          if (value-this.arr[i] === this.arr[i] && this.numMap.get(this.arr[i]) > 1) return true
      }
  }
  
  return false
};
