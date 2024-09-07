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

var singleNonDuplicate = function(nums) {
    let start = 0, end = nums.length-1
 
     while (start <= end) {
         let mid = Math.floor((start + end)/2)
 
         if (mid ==0 && nums[mid] !== nums[mid+1]) return nums[mid]
         if (mid == nums.length-1 && nums[mid] !== nums[mid-1]) return nums[mid]
         if (nums[mid] !== nums[mid+1] && nums[mid] !== nums[mid-1]) return nums[mid]
 
 
         if (mid%2 === 0 && nums[mid+1] === nums[mid]) {
             start = mid+1
         } else if (mid%2 === 1 && nums[mid-1] === nums[mid]) {
             start = mid + 1
         } else {
             end = mid-1
         }
     } 
 };