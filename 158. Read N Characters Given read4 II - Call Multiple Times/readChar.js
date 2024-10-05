/**
 * Definition for read4()
 * 
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function (read4) {
  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Number of characters to read
   * @return {number} The number of actual characters read
   */

  this.start = 0
  this.arr = []
  let count = read4(this.arr)

  while (count > 0) {
    let temp = []
    count = read4(temp)
    this.arr.push(...temp)
  }

  return function (buf, n) {
    if (this.start === this.arr.length) {
      buf.push('')
      return
    }

    if (this.start + n >= this.arr.length) {
      const retval = this.arr.slice(this.start)
      this.start = this.arr.length
      buf.push(retval.join(''))
      return
    }

    const retval = this.arr.slice(this.start, this.start + n)
    this.start += n

    buf.push(retval.join(''))
    return
  };
};