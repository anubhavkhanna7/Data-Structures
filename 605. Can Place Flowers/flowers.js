var canPlaceFlowers = function(fb, n) {
  if (n === 0) return true;
  if (fb.length === 1) return fb[0] === 0;

  let i = 0, canPlace = true;
  
  // Length >= 2 for flowerbed
  while(i < fb.length && n > 0) {
      // Found an empty slot in the middle
      if (fb[i] === 0 && i !== 0 && i !== fb.length-1) {
          if (fb[i-1] !== 1 && fb[i+1] !== 1) {
              fb[i] = 1;
              n--;
          }
      } else if (fb[i] === 0 && i === 0 && fb[i+1] !== 1) {
              fb[i] = 1;
              n--;
      } else if (fb[i] === 0 && i === fb.length-1 && fb[i-1] !== 1) {
              fb[i] = 1;
              n--;
      }
      i++;
  }
  if (n > 0 || !canPlace) {
      return false;
  }
  return true;
};