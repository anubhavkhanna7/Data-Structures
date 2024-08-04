var longestConsecutive = function(nums) {
  const numSet = new Set(nums);
  let maxLength = 0;

  for (const num of numSet) {
      // Only start counting if 'num' is the start of a sequence
      if (!numSet.has(num - 1)) {
          let currentNum = num;
          let currentStreak = 1;

          while (numSet.has(currentNum + 1)) {
              currentNum++;
              currentStreak++;
          }

          maxLength = Math.max(maxLength, currentStreak);
      }
  }
  return maxLength;
};