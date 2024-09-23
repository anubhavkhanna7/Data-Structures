var ValidWordAbbr = function(dictionary) {
  this.map = new Map()
  this.set = new Set(dictionary)

  for (word of this.set) {
      if (this.map.has(createAbbr(word))) {
          this.map.set(createAbbr(word), false)
      } else {
          this.map.set(createAbbr(word), true)
      }
  }
};

var createAbbr = (word) => {
  let charStr = ''
  if (word.length <=2) {
      charStr = word
  } else {
      charStr = word[0] + (word.length-2) + word[word.length-1]
  }
  
  return charStr
}

ValidWordAbbr.prototype.isUnique = function(word) {
  let charStr = createAbbr(word)

  if (!this.map.has(charStr)) return true
  return this.map.get(charStr) && this.set.has(word)
};
