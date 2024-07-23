# Max Number of K-Sum Pairs
[Source](https://leetcode.com/problems/max-number-of-k-sum-pairs)

Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

## Constraints:

 - 1 <= nums.length <= 10^5
 - 1 <= nums[i] <= 10^9
 - 1 <= k <= 10^9

## Example 1:
```sh
Input: nums = [1,2,3,4], k = 5
Output: 2
Explanation: Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.
```

## Example 2:
```sh
Input: nums = [3,1,3,4,3], k = 6
Output: 1
Explanation: Starting with nums = [3,1,3,4,3]:
- Remove the first two 3's, then nums = [1,4,3]
There are no more pairs that sum up to 6, hence a total of 1 operation.
```
