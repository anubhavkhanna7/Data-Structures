/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
  const adj = new Map();
  const visited = new Set();

  for (const [row, col] of stones) {
    const rowKey = `r${row}`;
    const colKey = `c${col}`;
    if (!adj.has(rowKey)) adj.set(rowKey, []);
    if (!adj.has(colKey)) adj.set(colKey, []);
    adj.get(rowKey).push([row, col]);
    adj.get(colKey).push([row, col]);
  }

  const dfs = (stone) => {
    const [row, col] = stone;
    const key = `${row}-${col}`;
    if (visited.has(key)) return;
    visited.add(key);

    for (const nextStone of adj.get(`r${row}`)) dfs(nextStone);
    for (const nextStone of adj.get(`c${col}`)) dfs(nextStone);
  };

  let components = 0;

  for (const stone of stones) {
    const key = `${stone[0]}-${stone[1]}`;
    if (!visited.has(key)) {
      components++;
      dfs(stone);
    }
  }

  return stones.length - components;
};
