var deleteAndEarn = function(nums) {
  let max = Math.max(...nums)
  let count = new Array(max+1).fill(0)
  
  for(let num of nums) {
      count[num] += num
  }
  
  let retvalArr = new Array(max+1).fill(0)
  retvalArr[1] = count[1]
  
  for(let i = 2; i<retvalArr.length; i++) {
      retvalArr[i] = Math.max(retvalArr[i-1], count[i]+ retvalArr[i-2])
  }
  
  return retvalArr[retvalArr.length-1]
};