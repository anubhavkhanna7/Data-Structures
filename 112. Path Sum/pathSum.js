var hasPathSum = function(root, targetSum) {
    if(root === null) return false;
    console.log(targetSum);
    if((!root.left) && (!root.right)) {
        if ((targetSum - root.val)  === 0) {
            return true;
        }
        return false;
    }

    if(root.left) {
        if (hasPathSum(root.left, targetSum-root.val)) {
            return true;
        } else if (root.right) {
            return hasPathSum(root.right, targetSum-root.val);
        } else {
            return false;
        }
    } else if (root.right) {
        if (hasPathSum(root.right, targetSum-root.val)) {
            return true;
        } else if (root.left) {
            return hasPathSum(root.right, targetSum-root.val);
        } else {
            return false;
        }
    } else {
        return false;
    }
};

// optimised 
var hasPathSum = function(root, targetSum) {
    if(root === null) return false;
    if((!root.left) && (!root.right)) return root.val === targetSum;

    const left = root.left && hasPathSum(root.left, targetSum-root.val) || false;
    const right = root.right && hasPathSum(root.right, targetSum-root.val) || false;
    return left || right;
};