# Valid Mountain Array
[Source](https://leetcode.com/problems/valid-mountain-array/)

Given an array of integers arr, return true if and only if it is a valid mountain array.
Recall that arr is a mountain array if and only if:

 - arr.length >= 3
 - There exists some i with 0 < i < arr.length - 1 such that:
 - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
 - arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

## Constraints:

 - 1 <= arr.length <= 104
 - 0 <= arr[i] <= 104

## Example 1:
```sh
Input: arr = [2,1]
Output: false
```

## Example 2:
```sh
Input: arr = [3,5,5]
Output: false
```

## Example 3:
```sh
Input: arr = [0,3,2,1]
Output: true
```