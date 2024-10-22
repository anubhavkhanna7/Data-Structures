var findReplaceString = function (str, indices, sources, targets) {
  let retval = str.split('');
  let sortingInformation = []

  for (let i = 0; i < indices.length; i++) {
    sortingInformation.push([indices[i], sources[i], targets[i]])
  }

  sortingInformation.sort((a, b) => a[0] - b[0])

  for (let i = indices.length - 1; i >= 0; i--) {
    const [index, source, target] = sortingInformation[i]

    if (str.slice(index, index + source.length) === source) {
      retval.splice(index, source.length, ...target);
    }
  }

  return retval.join('');
};
