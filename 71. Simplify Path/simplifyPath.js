var simplifyPath = function(path) {
  path = path.split('/')
  const finalPath = []

  for (let i = 0; i<path.length;i++) {
      if (path[i] === '' || path[i] === '.') {
          continue
      } else if(path[i] === '..') {
          finalPath.pop()
      } else {
          finalPath.push(path[i])
      }
  }
  return '/' + finalPath.join('/')
}

var simplifyPath = function(path) {
    path = path.split('/')
    let finalPath = [], escape = 0
    while(path.length) {
        let currentDirectory = path.pop()
        if (currentDirectory === '' || currentDirectory === '.') {
            // remove instances of '//' and './'
            continue
        } else if (currentDirectory === '..') {
            // if doublePeriod, increment escape count
            escape++
        } else if (escape ) {
            // if a directory but escape is not zero
            escape--
        } else {
            finalPath.unshift(currentDirectory)
        }
    }
    return '/' + finalPath.join('/')
};