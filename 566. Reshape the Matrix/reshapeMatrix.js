var matrixReshape = function(mat, r, c) {
    if (r*c !== mat.length* mat[0].length ) return mat;
    mat = mat.flat();
    let newArr = [];

    for (let i = 0; i<r; i++) {
        newArr.push(mat.slice(i*c, i*c+c));
    }
    return newArr;
};  