var pivotIndex = function(nums) {
    let cumalativeSum = 0, index = -1, totalSum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    for (let i = 0; i< nums.length; i++) {
        i > 0 ? cumalativeSum += nums[i-1] : null;
        totalSum -= nums[i];
        index === -1 && cumalativeSum === totalSum ? index = i : null;
    }
    return index;
};

var pivotIndex = function(nums) {
    let i = 0, sum = nums.reduce((acc, val) => acc + val, 0), currsum = 0;
    while(i < nums.length) {
        currsum += nums[i]
        if(currsum === sum) return i
        sum -= nums[i]
        i++
    }

    return -1
};