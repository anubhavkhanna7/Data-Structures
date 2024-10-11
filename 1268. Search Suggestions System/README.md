# Search Suggestions System
[Source](https://leetcode.com/problems/search-suggestions-system/)

You are given an array of strings products and a string searchWord.

Design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.

Return a list of lists of the suggested products after each character of searchWord is typed.

## Constraints:

 - 1 <= products.length <= 1000
 - 1 <= products[i].length <= 3000
 - 1 <= sum(products[i].length) <= 2 * 10^4
 - All the strings of products are unique.
 - products[i] consists of lowercase English letters.
 - 1 <= searchWord.length <= 1000
 - searchWord consists of lowercase English letters.

## Example 1:
```sh
Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
Output: 2
Explanation: 
Islands in gray are closed because they are completely surrounded by water (group of 1s).
```

## Example 2:
```sh
Input: products = ["havana"], searchWord = "havana"
Output: [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]
Explanation: The only word "havana" will be always suggested while typing the search word.
```