# Subarray Sum Equals K
[Source](https://leetcode.com/problems/subarray-sum-equals-k/)

Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

## Constraints:

 - 1 <= nums.length <= 2 * 10^4
 - -1000 <= nums[i] <= 1000
 - -10^7 <= k <= 10^7

## Example 1:
```sh
Input: nums = [1,1,1], k = 2
Output: 2
```

## Example 2:
```sh
Input: nums = [1,2,3], k = 3
Output: 2
```

## Example 3:
```sh
Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
```