# Find Leaves of Binary Tree
[Source](https://leetcode.com/problems/find-leaves-of-binary-tree/)

Given the root of a binary tree, collect a tree's nodes as if you were doing this:

 - Collect all the leaf nodes.
 - Remove all the leaf nodes.
 - Repeat until the tree is empty.

## Constraints:

 - 1 <= x, y, target <= 10^3

## Example 1:
```sh
Input: root = [1,2,3,4,5]
Output: [[4,5,3],[2],[1]]
Explanation:
[[3,5,4],[2],[1]] and [[3,4,5],[2],[1]] are also considered correct answers since per each level it does not matter the order on which elements are returned.
```

## Example 2:
```sh
Input: root = [1]
Output: [[1]]
```

## Example 3:
```sh
The number of nodes in the tree is in the range [1, 100].
-100 <= Node.val <= 100
```