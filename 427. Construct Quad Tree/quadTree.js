/**
 * // Definition for a QuadTree node.
 * function _Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {_Node}
 */
var construct = function (grid) {
  const isHomogeneous = (x1, y1, length) => {
    let firstValue = grid[x1][y1];
    for (let i = x1; i < x1 + length; i++) {
      for (let j = y1; j < y1 + length; j++) {
        if (grid[i][j] !== firstValue) return false;
      }
    }
    return true;
  };

  const buildQuadTree = (x1, y1, length) => {
    if (length === 1 || isHomogeneous(x1, y1, length)) {
      return new Node(grid[x1][y1] === 1, true, null, null, null, null);
    }

    const half = Math.floor(length / 2);

    const topLeft = buildQuadTree(x1, y1, half);
    const topRight = buildQuadTree(x1, y1 + half, half);
    const bottomLeft = buildQuadTree(x1 + half, y1, half);
    const bottomRight = buildQuadTree(x1 + half, y1 + half, half);

    if (topLeft.isLeaf && topRight.isLeaf && bottomLeft.isLeaf && bottomRight.isLeaf &&
      topLeft.val === topRight.val && topRight.val === bottomLeft.val && bottomLeft.val === bottomRight.val) {
      return new Node(topLeft.val, true, null, null, null, null);
    }

    return new Node(false, false, topLeft, topRight, bottomLeft, bottomRight);
  };

  return buildQuadTree(0, 0, grid.length);
};