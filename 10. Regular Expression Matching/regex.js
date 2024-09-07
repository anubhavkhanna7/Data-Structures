var isMatch = function(s, p) {
  const matchHelper = (s, p) => {
      if (p.length === 0) return s.length === 0;

      // Check if the first characters of s and p match (considering '.' as well)
      let firstMatch = (s.length > 0 && (p[0] === s[0] || p[0] === '.'));

      if (p.length >= 2 && p[1] === '*') {
          // Match 0
          // remove 1 char and try to keep matching more
          return (
              matchHelper(s, p.slice(2)) || (firstMatch && matchHelper(s.slice(1), p))
          );
      } else {
          // Otherwise, proceed with a single character match and continue
          return firstMatch && matchHelper(s.slice(1), p.slice(1));
      }
  };

  return matchHelper(s, p);
};