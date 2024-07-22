var reverse = function(x) {
  let isNegative = x<0;
  if(x<0) {
      isNegative = true;
      x *= -1;
  }
  let number = 0;
  let s = x.toString().split('');;
  for (let i=s.length-1; i>=0; i--){
      console.log(s[i]);
      number = number*10 + parseInt(s[i]);
  }
  if(number> 0x7FFFFFFF) {
      return 0;
  }
  if(isNegative) {number *= -1;}
  return number;
};