var containsDuplicate = function(nums) {
    let set = new Set(nums);
    return set.size !== nums.length;
}
var containsDuplicate = function(nums) {
    let map = new Map();
    let hasDuplicate = false;
    nums.forEach((number) => {
        if(map.get(number)) {
            hasDuplicate = true;
            return;
        } else {
            map.set(number, '1');
        }
    });

    return hasDuplicate;
};

var containsDuplicate = function(nums) {
    let map = new Map();
    let hasDuplicate = false, index = 0;
    while(index !== nums.length) {
        if(!map.get(nums[index])) {
            map.set(nums[index], '1');
        } else {
            hasDuplicate = true;
            break;
        }
        index++;
    }

    return hasDuplicate;
};