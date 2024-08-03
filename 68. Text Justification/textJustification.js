var fullJustify = function(words, maxWidth) {
  let arr = [], temp = [], currentCharLen = 0

  while (words.length) {
      // word length + space length + currentCharLen
      // let expectedNewLength = words[0].length + 1 + currentCharLen
      if (words[0].length + currentCharLen + temp.length  <= maxWidth) {
          currentCharLen += words[0].length
          temp.push(words.shift())
      } else {
          let spaceCount = maxWidth - currentCharLen
          if (spaceCount === 0) {
              arr.push(temp.join(''))
          } else {
              let spaceNum = 0, newArr = [], remainderCount = 0
              if (spaceCount >= temp.length-1) {
                  if (temp.length > 1) {
                      spaceNum = Math.floor(spaceCount/(temp.length-1))
                      remainderCount = spaceCount%(temp.length-1)
                  } else {
                      spaceNum = spaceCount
                  }

              } else {
                  spaceNum = spaceCount%(temp.length-1)
              }
              if (temp.length > 1) {
                  temp.forEach((ele, index) => {
                      newArr.push(ele)
                      if(index !== temp.length-1) {
                          newArr.push(' '.repeat(remainderCount > 0 ? spaceNum + 1 : spaceNum))
                          if (remainderCount > 0) {remainderCount--}
                      }
                  })
              } else {
                  newArr.push(...[temp[0], ' '.repeat(spaceNum)])
              }
              arr.push(newArr.join(''))
          }

          temp = []
          currentCharLen = 0
      }
  }

  let spaceCount = maxWidth - currentCharLen - (temp.length -1)
  if (spaceCount > 0) {
      temp[temp.length-1] = temp[temp.length-1] + ' '.repeat(spaceCount)
  } else if (temp.length === 1){
      spaceCount = maxWidth - temp[0].length
      temp[0] = temp[0] + ' '.repeat(spaceCount)
  }
  arr.push(temp.join(' '))
  return arr
};