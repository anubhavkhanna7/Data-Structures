var firstUniqChar = function(s) {
    if (s.length === 1) return 0;
    let alreadyTraversed = [];
    for (let i = 0; i<s.length -1; i++) {
        if (s.slice(i+1, s.length+1).indexOf(s[i]) <0 && alreadyTraversed.indexOf(s[i]) <0) {
            return i;
        } else {
            alreadyTraversed.push(s[i]);
        }
    }
    if(alreadyTraversed.indexOf(s[s.length-1]) <0) return s.length-1;
    return -1;
};

var firstUniqChar = function(s) {
    if (s.length === 1) return 0;
    for (let i = 0; i<s.length -1; i++) {
        if (s.slice(i+1, s.length+1).indexOf(s[i]) <0 && s.slice(0, i).indexOf(s[i]) <0) {
            return i;
        }
    }
    if(s.slice(0, s.length-1).indexOf(s[s.length-1]) <0) return s.length-1;
    return -1;
};

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