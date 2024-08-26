var findWords = function(words) {
  let retval = []
  let set1 = new Set('qwertyuiop'.split(''))
  let set2 = new Set('asdfghjkl'.split(''))
  let set3 = new Set('zxcvbnm'.split(''))

  for (let word of words) {
      let canAdd = true, selectedSet
      if (set1.has(word[0].toLowerCase())) {
          selectedSet = set1
      } else if (set2.has(word[0].toLowerCase())) {
          selectedSet = set2
      } else {
          selectedSet = set3
      }
      for (let letter of word) {
          if (selectedSet.has(letter.toLowerCase())) continue;
          canAdd = false;
          break;
      }
      if (canAdd) retval.push(word)
  }

  return retval
};