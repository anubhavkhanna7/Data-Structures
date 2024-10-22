
var HitCounter = function () {
  this.hitList = []
};

/** 
* @param {number} timestamp
* @return {void}
*/
HitCounter.prototype.hit = function (timestamp) {
  this.hitList.push(timestamp)
};

/** 
* @param {number} timestamp
* @return {number}
*/
HitCounter.prototype.getHits = function (timestamp) {
  const minTime = timestamp - 300

  while (this.hitList.length > 0 && this.hitList[0] <= minTime) this.hitList.shift()

  return this.hitList.length
};

/** 
* Your HitCounter object will be instantiated and called as such:
* var obj = new HitCounter()
* obj.hit(timestamp)
* var param_2 = obj.getHits(timestamp)
*/