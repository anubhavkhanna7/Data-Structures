# Hand of Straights
[Source](https://leetcode.com/problems/hand-of-straights/)

Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size groupSize, and consists of groupSize consecutive cards.

Given an integer array hand where hand[i] is the value written on the ith card and an integer groupSize, return true if she can rearrange the cards, or false otherwise.

## Constraints:

 - 1 <= hand.length <= 10^4
 - 0 <= hand[i] <= 10^9
 - 1 <= groupSize <= hand.length

## Example 1:
```sh
Input: hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
Output: true
Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8]
```

## Example 2:
```sh
Input: hand = [1,2,3,4,5], groupSize = 4
Output: false
Explanation: Alice's hand can not be rearranged into groups of 4.
```