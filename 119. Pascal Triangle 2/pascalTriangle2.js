var getRow = function(rowIndex) {
    if (rowIndex === 0) {
        return [1];
    }

    let arr = [1,1];
    for (let i=0; i<rowIndex-1; i++) {
        for (let j=0; j<arr.length-1; j++) {
            arr[j] += arr[j+1];
        }
        arr.unshift(1);
    }
    return arr;
};