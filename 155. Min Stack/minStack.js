var MinStack = function() {
  this.array = []
};

/** 
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
  const min = this.array.length > 0 ? Math.min(val, this.array[this.array.length-1][1]) : val
  this.array.push([val, min])
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.array.pop()
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.array[this.array.length-1][0]
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.array[this.array.length-1][1]
};
