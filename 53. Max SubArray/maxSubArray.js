var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let value = 0;

    for(let i = 0; i<nums.length; i++) {
        value += nums[i];
        if(maxSum < value) {
            maxSum = value;
        }

        if (value < 0) {
            value = 0;
        }
    }
    return maxSum;
};