
var RandomizedSet = function() {
  this.set = new Set()
};

RandomizedSet.prototype.insert = function(val) {
  if (this.set.has(val)) return false
  this.set.add(val)
  return true
};

RandomizedSet.prototype.remove = function(val) {
  if (!this.set.has(val)) return false
  this.set.delete(val)
  return true
};

RandomizedSet.prototype.getRandom = function() {
  let index = Math.floor(Math.random(0,1)*(this.set.size))
  
  return [...this.set][index]
};
