# Read N Characters Given read4 II - Call Multiple Times
[Source](https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/)

Given a file and assume that you can only read the file using a given method read4, implement a method read to read n characters. Your method read may be called multiple times.

Method read4:

The API read4 reads four consecutive characters from file, then writes those characters into the buffer array buf4.

The return value is the number of actual characters read.

Note that read4() has its own file pointer, much like FILE *fp in C.

### Definition of read4:
```sh
    Parameter:  char[] buf4
    Returns:    int
```

 - buf4[] is a destination, not a source. The results from read4 will be copied to buf4[].

Below is a high-level example of how read4 works:


File file("abcde"); // File is "abcde", initially file pointer (fp) points to 'a'
char[] buf4 = new char[4]; // Create buffer with enough space to store characters
read4(buf4); // read4 returns 4. Now buf4 = "abcd", fp points to 'e'
read4(buf4); // read4 returns 1. Now buf4 = "e", fp points to end of file
read4(buf4); // read4 returns 0. Now buf4 = "", fp points to end of file
 

### Method read:

By using the read4 method, implement the method read that reads n characters from file and store it in the buffer array buf. Consider that you cannot manipulate file directly.

The return value is the number of actual characters read.

### Definition of read:
```sh
    Parameters:	char[] buf, int n
    Returns:	int
```

buf[] is a destination, not a source. You will need to write the results to buf[].

### Note:

 - Consider that you cannot manipulate the file directly. The file is only accessible for read4 but not for read.
 - The read function may be called multiple times.
 - Please remember to RESET your class variables declared in Solution, as static/class variables are persisted across multiple test cases. Please see here for more details.
 - You may assume the destination buffer array, buf, is guaranteed to have enough space for storing n characters.
 - It is guaranteed that in a given test case the same buffer buf is called by read.

## Constraints:

 - n == nums.length
 - 1 <= n <= 5000
 - -5000 <= nums[i] <= 5000
 - All the integers of nums are unique.
 - nums is sorted and rotated between 1 and n times.

## Example 1:
```sh
Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
```

## Example 2:
```sh
Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
```

## Example 3:
```sh
Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 
```
