var findKthLargest = function (nums, k) {
  let heapObj = new MaxPriorityQueue()
  nums.forEach(ele => {
    heapObj.enqueue(ele)
  })

  for (let i = 0; i < k - 1; i++) {
    heapObj.dequeue()
  }

  return heapObj.front().element
};


var findKthLargest = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    let max = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[max]) {
        max = j;
      }
    }
    [nums[i], nums[max]] = [nums[max], nums[i]];

    k--;
    if (k === 0) return nums[i];
  }
};

var findKthLargest = function (nums, k) {
  nums.sort((a, b) => b - a)

  return nums[k - 1]
};
