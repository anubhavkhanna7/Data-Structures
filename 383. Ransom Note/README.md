# Ransom Note

[Source](https://leetcode.com/problems/ransom-note/description/)

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

## Constraints:

 - 1 <= ransomNote.length, magazine.length <= 105
 - ransomNote and magazine consist of lowercase English letters.

## Example 1:
```sh
Input: ransomNote = "a", magazine = "b"
Output: false
```

## Example 2:
```sh
Input: ransomNote = "aa", magazine = "ab"
Output: false
```

## Example 3:
```sh
Input: ransomNote = "aa", magazine = "aab"
Output: true
```