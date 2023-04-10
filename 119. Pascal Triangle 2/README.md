# Pascal's Triangle 2
[Source](https://leetcode.com/problems/pascals-triangle-ii/description/)

Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it

## Note:

Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.

## Constraints:

 - 0 <= rowIndex <= 33

## Example 1:
```sh
Input: rowIndex = 3
Output: [1,3,3,1]
```

## Example 2:
```sh
Input: rowIndex = 0
Output: [1]
```

## Example 3:
```sh
Input: rowIndex = 1
Output: [1,1]
```