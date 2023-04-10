var addDigits = function(num) {
    let sum = 0;
    while (num > 0) {
        sum += num%10;
        num = Math.floor(num/10);
        if (num <= 0 && sum > 9) {
            num = sum;
            sum = 0
        }
    }
    return sum;
};

var addDigits = function(num) {
    if (num < 10) return num;
    if (num%9 === 0) return 9;
    return num%9;
};