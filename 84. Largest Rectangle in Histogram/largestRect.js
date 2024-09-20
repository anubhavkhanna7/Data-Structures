var largestRectangleArea = function(heights) {
  let stack = [];
  let maxArea = 0;
  let n = heights.length;

  for (let i = 0; i <= n; i++) {
      // Treat heights[n] as 0 to flush out remaining bars in the stack at the end
      let currentHeight = (i == n) ? 0 : heights[i];

      while (stack.length && currentHeight < heights[stack[stack.length - 1]]) {
          let height = heights[stack.pop()];
          let width = stack.length ? i - stack[stack.length - 1] - 1 : i;
          maxArea = Math.max(maxArea, height * width);
      }

      stack.push(i);
  }

  return maxArea;
};