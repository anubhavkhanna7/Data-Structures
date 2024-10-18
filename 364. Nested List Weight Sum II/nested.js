/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSumInverse = function (nestedList) {
  let queue = [...nestedList], maxDepth = 1

  while (queue.length > 0) {
    let queueLen = queue.length

    for (let i = 0; i < queueLen; i++) {
      const shiftedVal = queue.shift()
      if (!shiftedVal.isInteger()) queue.push(...shiftedVal.getList())
    }
    maxDepth++
  }

  let sum = 0, depth = 1
  while (nestedList.length > 0) {
    let queueLen = nestedList.length

    for (let i = 0; i < queueLen; i++) {
      const shiftedVal = nestedList.shift()
      if (shiftedVal.isInteger()) {
        sum += shiftedVal.getInteger() * (maxDepth - depth)
      } else {
        nestedList.push(...shiftedVal.getList())
      }
    }
    depth++
  }

  return sum
};