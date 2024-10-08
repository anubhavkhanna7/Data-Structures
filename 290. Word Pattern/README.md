# Word Pattern
[Source](https://leetcode.com/problems/word-pattern/)

Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

## Constraints:

 - 1 <= pattern.length <= 300
 - pattern contains only lower-case English letters.
 - 1 <= s.length <= 3000
 - s contains only lowercase English letters and spaces ' '.
 - s does not contain any leading or trailing spaces.
 - All the words in s are separated by a single space.

## Example 1:
```sh
Input: pattern = "abba", s = "dog cat cat fish"
Output: false
```

## Example 2:
```sh
Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
```