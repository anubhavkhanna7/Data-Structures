# Shortest Subarray with Sum at Least K
[Source](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/)

Given an integer array nums and an integer k, return the length of the shortest non-empty subarray of nums with a sum of at least k. If there is no such subarray, return -1.

A subarray is a contiguous part of an array.

## Constraints:

 - 1 <= nums.length <= 10^5
 - -10^5 <= nums[i] <= 10^5
 - 1 <= k <= 10^9

## Example 1:
```sh
Input: nums = [1], k = 1
Output: 1
```

## Example 2:
```sh
Input: nums = [1,2], k = 4
Output: -1
```

## Example 3:
```sh
Input: nums = [2,-1,2], k = 3
Output: 3
```