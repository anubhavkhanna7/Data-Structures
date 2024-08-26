var findRepeatedDnaSequences = function(s) {
  let seen = new Set();
  let repeated = new Set();

  for (let i = 0; i <= s.length - 10; i++) {
      let sequence = s.substring(i, i + 10);
      if (seen.has(sequence)) {
          repeated.add(sequence);
      } else {
          seen.add(sequence);
      }
  }

  return [...repeated];
};