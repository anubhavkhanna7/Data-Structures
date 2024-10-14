var RandomizedCollection = function () {
  this.map = new Map(); // Map to store value to indices mapping
  this.arr = []; // Array to store elements
};

/** 
* @param {number} val
* @return {boolean}
*/
RandomizedCollection.prototype.insert = function (val) {
  let elementNotPresent = !this.map.has(val);

  if (elementNotPresent) {
    this.map.set(val, []);
  }

  this.map.get(val).push(this.arr.length);
  this.arr.push(val);

  return elementNotPresent; // Return true if it's a new value, false if duplicate
};

/** 
* @param {number} val
* @return {boolean}
*/
RandomizedCollection.prototype.remove = function (val) {
  if (!this.map.has(val)) return false;

  const valIndices = this.map.get(val);
  const indexToRemove = valIndices.pop();
  const lastVal = this.arr.pop();

  if (indexToRemove !== this.arr.length) {
    this.arr[indexToRemove] = lastVal;
    const lastValIndices = this.map.get(lastVal);
    lastValIndices.splice(lastValIndices.indexOf(this.arr.length), 1);
    lastValIndices.push(indexToRemove);
  }

  if (valIndices.length === 0) {
    this.map.delete(val);
  }

  return true;
};

/**
* @return {number}
*/
RandomizedCollection.prototype.getRandom = function () {
  const randomIndex = Math.floor(Math.random() * this.arr.length);
  return this.arr[randomIndex]; // Return a random element
};
