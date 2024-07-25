var predictPartyVictory = function(senate) {
  let arr = [], senated = senate, d=0, r=0, i = 0;
  while (i < senated.length && senated.length > 1) {
      if (senated[i] === 'D') {
          if (r > 0) {
              r--;
          } else {
              arr.push(senated[i])
              d++;
          }
      } else {
          if (d > 0) {
              d--;
          } else {
              arr.push(senated[i])
              r++;
          }
      }
      i++;
      if (i > senated.length-1) {
          senated = arr;
          arr = [];
          if(senated.length <2) break;
          if(senated.indexOf('R') === -1 || senated.indexOf('D') === -1) break
          i = 0;
      }
  }

  return senated[0] === 'R' ? 'Radiant' : 'Dire'
};