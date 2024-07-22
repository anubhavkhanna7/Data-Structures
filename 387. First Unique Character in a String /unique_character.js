var firstUniqChar = function(s) {
  let array = s.split('');
  let set = new Set(array);
  set = [...set];
  let index = -1, i=0;
  while (i<set.length) {
    let len = array.filter(ele => ele == set[i]).length;
    if(len === 1) {
      index = array.indexOf(set[i]);
      break;
    }
    i++;
  }
  return index;
};