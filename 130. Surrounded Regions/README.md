# Surrounded Regions
[Source](https://leetcode.com/problems/surrounded-regions/)

You are given an m x n matrix board containing letters 'X' and 'O', capture regions that are surrounded:

Connect: A cell is connected to adjacent cells horizontally or vertically.
Region: To form a region connect every 'O' cell.
Surround: The region is surrounded with 'X' cells if you can connect the region with 'X' cells and none of the region cells are on the edge of the board.
A surrounded region is captured by replacing all 'O's with 'X's in the input matrix board.

## Constraints:

 - m == board.length
 - n == board[i].length
 - 1 <= m, n <= 200
 - board[i][j] is 'X' or 'O'.

## Example 1:
```sh
Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
```

## Example 2:
```sh
Input: board = [["X"]]

Output: [["X"]]
```
