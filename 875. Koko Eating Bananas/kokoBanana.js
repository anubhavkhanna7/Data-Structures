var minEatingSpeed = function (piles, h) {
    let min = 1;
    let max = Math.max(...piles);
    let absMin = max;

    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        let hours = 0;

        for (let pileCount of piles) {
            hours += Math.ceil(pileCount / mid);
        }

        if (hours <= h) {
            absMin = mid;
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }

    return absMin;
};