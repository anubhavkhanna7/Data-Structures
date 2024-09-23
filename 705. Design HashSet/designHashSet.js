
var MyHashSet = function() {
  this.obj = {}
};

/** 
* @param {number} key
* @return {void}
*/
MyHashSet.prototype.add = function(key) {
  this.obj[key] = key
};

/** 
* @param {number} key
* @return {void}
*/
MyHashSet.prototype.remove = function(key) {
  delete this.obj[key]
};

/** 
* @param {number} key
* @return {boolean}
*/
MyHashSet.prototype.contains = function(key) {
  return this.obj[key] !== undefined ? true : false
};

/** 
* Your MyHashSet object will be instantiated and called as such:
* var obj = new MyHashSet()
* obj.add(key)
* obj.remove(key)
* var param_3 = obj.contains(key)
*/