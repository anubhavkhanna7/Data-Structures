# Regular Expression Matching
[Source](https://leetcode.com/problems/regular-expression-matching/)

Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).


## Constraints:

 - 1 <= s.length <= 20
 - 1 <= p.length <= 20
 - s contains only lowercase English letters.
 - p contains only lowercase English letters, '.', and '*'.
 - It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.

## Example 1:
```sh
Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
```

## Example 2:
```sh
Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
```

## Example 3:
```sh
Input: s = "ab", p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
```