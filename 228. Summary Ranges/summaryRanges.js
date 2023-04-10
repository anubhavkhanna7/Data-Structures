var summaryRanges = function(nums) {
    if(nums.length === 0) return [];

    let start = -1, summary = [],i = 0;
    for (i = 0; i<nums.length-1; i++) {
        if(start === -1 && nums[i+1] !== nums[i]+1) {
            summary.push(`${nums[i]}`);
        } else if(nums[i+1] !== nums[i]+1) {
            summary.push(`${nums[start]}->${nums[i]}`);
            start = -1;
        } else if (start === -1){
            start = i;
        }
    }
    if(start === -1) {
        summary.push(`${nums[i]}`);
    } else {
        summary.push(`${nums[start]}->${nums[i]}`);
    }
    return summary;
};