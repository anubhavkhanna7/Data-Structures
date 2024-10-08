# N-th Tribonacci Number
[Source](https://leetcode.com/problems/n-th-tribonacci-number/)

The Tribonacci sequence Tn is defined as follows: 

T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given n, return the value of Tn.

## Constraints:

 - 0 <= n <= 37
 - The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1.

## Example 1:
```sh
Input: n = 4
Output: 4
Explanation:
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4
```

## Example 2:
```sh
Input: n = 25
Output: 1389537
```