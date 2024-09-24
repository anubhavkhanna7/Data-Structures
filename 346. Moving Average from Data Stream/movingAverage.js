/**
 * @param {number} size
 */
var MovingAverage = function(size) {
  this.list = []
  this.maxSize = size
  this.sum = 0
};

/** 
* @param {number} val
* @return {number}
*/
MovingAverage.prototype.next = function(val) {
  if (this.list.length >= this.maxSize) {
      this.sum -= this.list.shift()
  }
  
  this.list.push(val)
  this.sum+= val
      
  return this.sum/this.list.length
};
