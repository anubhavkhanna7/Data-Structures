# Keyboard Row
[Source](https://leetcode.com/problems/keyboard-row/)

Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

In the American keyboard:

the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm".

## Constraints:

 - 1 <= words.length <= 20
 - 1 <= words[i].length <= 100
 - words[i] consists of English letters (both lowercase and uppercase). 

## Example 1:
```sh
Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]
```

## Example 2:
```sh
Input: words = ["omk"]
Output: []
```

## Example 3:
```sh
Input: words = ["adsdf","sfd"]
Output: ["adsdf","sfd"]
```