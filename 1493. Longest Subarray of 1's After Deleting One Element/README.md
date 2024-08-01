# Longest Subarray of 1's After Deleting One Element
[Source](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element)

Given a binary array nums, you should delete one element from it.

Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

## Constraints:

 - 1 <= nums.length <= 10^5
 - nums[i] is either 0 or 1.

## Example 1:
```sh
Input: nums = [1,1,0,1]
Output: 3
Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
```

## Example 2:
```sh
Input: nums = [0,1,1,1,0,1,1,0,1]
Output: 5
Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
```

## Example 3:
```sh
Input: nums = [1,1,1]
Output: 2
Explanation: You must delete one element.
```