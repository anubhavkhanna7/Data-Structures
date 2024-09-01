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

var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};