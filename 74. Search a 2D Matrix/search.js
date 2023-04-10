var searchMatrix = function(matrix, target) {
    let m = matrix.length, n = matrix[0].length, i = 0, j = m-1;
    if(m === 1 && n === 1) return matrix[0][0] === target;
    if (target < matrix[0][0] || target > matrix[m-1][n-1]) { return false; }
    if(i === j) return findInColumn(matrix[0], target);

    while(i < j) {
        let mid = (i+j)%2 === 0 ? (j+i)/2 : (j+i-1)/2;
        if(matrix[mid][0] === target || matrix[mid][n-1] === target) return true;
        if (matrix[mid][0] < target && matrix[mid][n-1] > target) {
            return findInColumn(matrix[mid], target);
        } else if (matrix[mid][0] > target) {
            j = mid;
        } else {
            i = mid+1;
        }
    }
    return findInColumn(matrix[i], target)
};

const findInColumn = (matrix, target) => {
    let len = matrix.length, i = 0, j = len -1;
    if(len === 1) return matrix[0] === target;
    if(matrix[0] === target || matrix[len -1] === target) return true;

    while(i < j) {
        let mid = (i+j)%2 === 0 ? (j+i)/2 : (j+i-1)/2;
        if (matrix[mid] === target) return true;
        if(mid === j) break;
        if (matrix[mid] > target) {
            j = mid;
        } else { // matrix[mid] < target
            i = mid+1;
        }
    }
    return false;
}

var searchMatrix = function(matrix, target) {
    return matrix.flat().indexOf(target) >= 0;
}