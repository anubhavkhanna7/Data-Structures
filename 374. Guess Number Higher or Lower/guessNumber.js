var guessNumber = function(n) {
    if (n === 1) return 1;
    if (n === 2) return guess(1) ? 2 : 1;

    let start = 1, end = n;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (guess(mid) === 0) {
            return mid;
        } else if (guess(mid) === -1) {
            end = mid-1;
        } else {
            start = mid+1;
        }
    }
    return start;
};