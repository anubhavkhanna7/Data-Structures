var RangeModule = function () {
  this.rangeList = [];
};

/** 
* @param {number} left 
* @param {number} right
* @return {void}
*/
RangeModule.prototype.addRange = function (left, right) {
  const newRange = [];
  let merged = false;

  for (let [start, end] of this.rangeList) {
    if (end < left) {
      newRange.push([start, end]);
    } else if (right < start) {
      if (!merged) {
        newRange.push([left, right]);
        merged = true;
      }
      newRange.push([start, end]);
    } else {
      left = Math.min(left, start);
      right = Math.max(right, end);
    }
  }

  if (!merged) newRange.push([left, right]);

  this.rangeList = newRange;
};

/** 
* @param {number} left 
* @param {number} right
* @return {boolean}
*/
RangeModule.prototype.queryRange = function (left, right) {
  for (let [start, end] of this.rangeList) {
    if (start <= left && end >= right) return true;
  }
  return false;
};

/** 
* @param {number} left 
* @param {number} right
* @return {void}
*/
RangeModule.prototype.removeRange = function (left, right) {
  const newRange = [];

  for (let [start, end] of this.rangeList) {
    if (end <= left || start >= right) {
      newRange.push([start, end]);
    } else {
      if (start < left) newRange.push([start, left]);
      if (end > right) newRange.push([right, end]);
    }
  }

  this.rangeList = newRange;
};
