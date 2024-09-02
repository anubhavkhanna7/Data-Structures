var singleNonDuplicate = function(nums) {
  let start = 0, end = nums.length - 1;
   
   while (start < end) {
       let mid = Math.floor((start + end) / 2);
       
       // Ensure 'mid' is even for comparison with its next element
       if (mid % 2 === 1) mid--;

       // If the pair is intact, search in the right half
       if (nums[mid] === nums[mid + 1]) {
           start = mid + 2;
       } else {
           // Else search in the left half
           end = mid;
       }
   }
   
   return nums[start];
};