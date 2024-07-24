var largestAltitude = function(gain) {
  let maxGain = 0, currMax = 0;
  for(let i = 0; i< gain.length; i++) {
      currMax += gain[i]
      if(currMax > maxGain) {
          maxGain = currMax
      }
  }
  return maxGain
};