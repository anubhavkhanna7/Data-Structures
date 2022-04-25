var groupAnagrams = function(arrayOfStrings) {
  let map = new Map();
  arrayOfStrings.forEach(stringValue => {
    let sortedString = stringValue.split('').sort().join('');
    if(map.has(sortedString)) {
      let anagramSet = map.get(sortedString);
      map.set(sortedString, anagramSet.concat([stringValue]));
    } else {
      map.set(sortedString, [stringValue]);
    }
  });
  return [...map.values()];
};