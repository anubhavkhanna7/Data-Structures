var pairSum = function (head) {
  let max = 2, map = new Map(), tot = 0, ctr = 0, iter = head;
  while (iter) {
      iter = iter.next
      ctr++
  }
  tot = ctr - 1;
  ctr = 0;
  iter = head;
  while (iter) {
      if (map.has(ctr)) {
          if((map.get(ctr) + iter.val) > max) {
              max = map.get(ctr) + iter.val
          }
      } else {
          map.set(tot - ctr, iter.val)
      }
      iter = iter.next
      ctr++
  }
  return max
};

var pairSum = function (head) {
  let max = 2, map = new Map(), ctr = 0, iter = head;
  while (iter) {
      map.set(ctr, iter.val)
      iter = iter.next
      ctr++
  }
  for(let i = 0; i<ctr/2; i++) {
      let val = map.get(i) + map.get(ctr - i -1)
      if(val > max) {
          max = val
      }
  }

  return max
}