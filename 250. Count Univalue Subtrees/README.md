# Count Univalue Subtree
[Source](https://leetcode.com/problems/count-univalue-subtrees/)

Given the root of a binary tree, return the number of uni-value subtrees.
A uni-value subtree means all nodes of the subtree have the same value.

## Constraints:

 - The number of the node in the tree will be in the range [0, 1000].
 - -1000 <= Node.val <= 1000

## Example 1:
```sh
Input: root = [5,1,5,5,5,null,5]
Output: 4
```

## Example 2:
```sh
Input: root = []
Output: 0
```

## Example 3:
```sh
Input: root = [5,5,5,5,5,null,5]
Output: 6
```