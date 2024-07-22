var kidsWithCandies = function(candies, extraCandies) {
  let maxCand = 0, retVal=[]
  candies.forEach(candy => {
    if(candy > maxCand) {
      maxCand = candy;
    }
  })

  candies.forEach(candy => {
    retVal.push((candy+ extraCandies) >= maxCand)
  })

  return retVal
};