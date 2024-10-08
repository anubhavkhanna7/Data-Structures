# Valid Parenthesis String
[Source](https://leetcode.com/problems/valid-parenthesis-string/)

Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.

The following rules define a valid string:

 - Any left parenthesis '(' must have a corresponding right parenthesis ')'.
 - Any right parenthesis ')' must have a corresponding left parenthesis '('.
 - Left parenthesis '(' must go before the corresponding right parenthesis ')'.
 - '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".

## Constraints:

 - 1 <= s.length <= 100
 - s[i] is '(', ')' or '*'.

## Example 1:
```sh
Input: s = "()"
Output: true
```

## Example 2:
```sh
Input: s = "(*)"
Output: true
```

## Example 3:
```sh
Input: s = "(*))"
Output: true
```