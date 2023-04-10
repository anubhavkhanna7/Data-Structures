// Using Regex
var hammingWeight = function(n) {
    return (n.toString(2).match(/1/g) || []).length;
};

var hammingWeight = function(n) {
    let count = 0;
    n.toString(2).split('').forEach((digit) => {
        if(digit === '1') {
            count++;
        }
    })
    return (count);
};

// Brian Kernighan’s Algorithm
var hammingWeight = function(n) {
    let count = 0;
    while(n!=0){
        count++;
        n&=n-1
    }
    return count;
};