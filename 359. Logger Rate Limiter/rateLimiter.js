
var Logger = function() {
  this.timeStampStorage = new Map()
};

/** 
* @param {number} timestamp 
* @param {string} message
* @return {boolean}
*/
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
  if (this.timeStampStorage.has(message) && this.timeStampStorage.get(message) > timestamp) {
          return false
  } else {
      this.timeStampStorage.set(message, timestamp+10)
      return true
  }
};

/** 
* Your Logger object will be instantiated and called as such:
* var obj = new Logger()
* var param_1 = obj.shouldPrintMessage(timestamp,message)
*/