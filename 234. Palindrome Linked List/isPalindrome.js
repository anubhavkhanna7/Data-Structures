var isPalindrome = function(head) {
  if (!head || !head.next) return true; // If the list has 0 or 1 node, it's a palindrome

  let fast = head, slow = head;

  // Step 1: Find the midpoint using slow and fast pointers
  while (fast && fast.next) {
      fast = fast.next.next; // Fast moves 2 steps at a time
      slow = slow.next;      // Slow moves 1 step at a time
  }

  // At this point, slow is at the midpoint of the list

  // Step 2: Reverse the second half of the list
  let first = slow, second = slow.next;
  slow.next = null; // Disconnect the first half from the second half
  while (second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
  }
  // Now, `first` points to the head of the reversed second half.

  // Step 3: Compare the first half and the reversed second half
  let start = head;
  while (start !== slow) { // Iterate until you reach the midpoint
      if (start && !first) return false; // If the first half exists but the second doesn't, it's not a palindrome
      if (start.val !== first.val) return false; // Mismatch in values means not a palindrome
      start = start.next;
      first = first.next;
  }

  return true;
};