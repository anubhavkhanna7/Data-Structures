# Remove Invalid Parentheses
[Source](https://leetcode.com/problems/remove-invalid-parentheses/)

Given a string s that contains parentheses and letters, remove the minimum number of invalid parentheses to make the input string valid.

Return a list of unique strings that are valid with the minimum number of removals. You may return the answer in any order.

## Constraints:

 - 1 <= s.length <= 25
 - s consists of lowercase English letters and parentheses '(' and ')'.
 - There will be at most 20 parentheses in s.

## Example 1:
```sh
Input: s = "()())()"
Output: ["(())()","()()()"]
```

## Example 2:
```sh
Input: s = "(a)())()"
Output: ["(a())()","(a)()()"]
```

## Example 3:
```sh
Input: s = ")("
Output: [""]
```
