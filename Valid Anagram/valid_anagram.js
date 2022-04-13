var isAnagram = function(s, t) {
  s = s.split('');
  t = t.split('');
  if(s.length !== t.length) {
      return false;
  }
  let map = new Map();
  let map1 = new Map();
  let set = new Set(s);
  let i = 0;
  while(i<s.length) {
    if(map.has(s[i])) {
      map.set(s[i], map.get(s[i]) +1);
    } else {
      map.set(s[i], 1)
    }
    if(map1.has(t[i])) {
      map1.set(t[i], map1.get(t[i]) +1)
    } else {
      map1.set(t[i], 1)
    }
    i++;
  }
  let isAna = true;
  [...set].forEach(value => {
    if(map.has(value) && map1.has(value)) {
      if(map.get(value) !== map1.get(value)) {
        isAna = false;
      }
    } else {
      isAna = false;
    }
  });
  return isAna;
};
