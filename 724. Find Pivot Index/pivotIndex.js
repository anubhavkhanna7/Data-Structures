var pivotIndex = function(nums) {
    let cumalativeSum = 0, index = -1, totalSum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    for (let i = 0; i< nums.length; i++) {
        i > 0 ? cumalativeSum += nums[i-1] : null;
        totalSum -= nums[i];
        index === -1 && cumalativeSum === totalSum ? index = i : null;
    }
    return index;
};