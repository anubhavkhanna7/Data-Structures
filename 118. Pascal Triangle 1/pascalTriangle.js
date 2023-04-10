var generate = function(numRows) {
    if(numRows === 1) return [[1]]
    const num = []
    for(let i=0;i<=numRows-1;i++){
        num.push(Array(i+1))
        for(let j=0;j<i+1;j++){
            if(j===0 || j===i){
                num[i][j] = 1
            } else {
                num[i][j] = num[i-1][j-1] + num[i-1][j]
            }
        }
    }
    return num;
};