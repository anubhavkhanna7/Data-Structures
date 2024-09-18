var partition = function(s) {
  let retval = [], subStrings = []
  const checkIfPalindrome = (string) => {
      if (string.length === 1) return true
      for (let i = 0; i< string.length/2; i++) {
          if (string[i] !== string[string.length-1-i]) return false
      }

      return true
  }

  createPartitions = (array, string) => {
      if (string.length === 0) {
          retval.push([...array]);
          return;
      }

      for (let i = 1; i <= string.length; i++) {
          let subString = string.slice(0, i);
          if (checkIfPalindrome(subString)) {
              array.push(subString);
              createPartitions(array, string.slice(i));
              array.pop();
          }
      }
  }

  createPartitions([], s)

  return retval
};

var partition = function(s) {
  let retval = [], subStrings = []
  const checkIfPalindrome = (string) => {
      if (string.length === 1) return true
      for (let i = 0; i< string.length/2; i++) {
          if (string[i] !== string[string.length-1-i]) return false
      }

      return true
  }

  const generateSubStrings = (string = '') => {
      if (string.length === 1) return [string]
      let subStringArr = [] 

      for(let i = 1; i <= string.length; i++) {
          subStringArr.push(string.slice(0,i))
      }

      return subStringArr
  }

  createPartitions = (array, string) => {
      if (string === '') {
          retval.push(array)
          return
      }

      let subStringArr = generateSubStrings(string)
      subStringArr = subStringArr.filter(str => checkIfPalindrome(str))

      for(let i = 0; i< subStringArr.length; i++) {
          array.push(subStringArr[i])
          createPartitions([...array], string.replace(subStringArr[i], ''))
          array.pop()
      }
  }

  createPartitions([], s)

  return retval
};