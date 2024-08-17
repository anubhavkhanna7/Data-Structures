var snakesAndLadders = function(board) {
  const n = board.length;
  const visited = new Array(n * n + 1).fill(false); // Tracks visited squares
  const queue = [[1, 0]]; // Start from square 1 with 0 moves
  
  while (queue.length > 0) {
      const [curr, moves] = queue.shift();
      
      // Explore all possible moves with a die roll (1 to 6)
      for (let i = 1; i <= 6; i++) {
          let next = curr + i;
          if (next > n * n) break;
          
          const [r, c] = getCoordinates(next, n);
          if (board[r][c] !== -1) next = board[r][c]; // Handle snakes or ladders
          
          // If we've reached the last square, return the number of moves
          if (next === n * n) return moves + 1;
          
          // If not visited, add to queue
          if (!visited[next]) {
              visited[next] = true;
              queue.push([next, moves + 1]);
          }
      }
  }
  
  // If we exhaust the queue without finding the last square, return -1
  return -1;
};

const getCoordinates = (pos, n) => {
  const row = Math.floor((pos - 1) / n);
  const col = (pos - 1) % n;
  const x = n - 1 - row;
  const y = row % 2 === 0 ? col : n - 1 - col;
  return [x, y];
};