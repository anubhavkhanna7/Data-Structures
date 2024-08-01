var longestSubarray = function(nums) {
    let escapeCount = 1, max = 0, backupIndex = 0, counter = 0;
    if (nums.filter(num => num < 1).length === 0) return nums.length-1

    for(let i = 0; i<nums.length;i++) {
        // if current number is not 1 and element is not deleted yet
        if (!nums[i] && escapeCount) {
            backupIndex = i
            escapeCount = 0
        } else if (!nums[i] && !escapeCount) {
            max = counter < max ? max : counter
            counter = 0
            i = backupIndex
            escapeCount = 1
        } else if (nums[i]) {
            counter++
        }
        max = counter < max ? max : counter
    }

    return max
};