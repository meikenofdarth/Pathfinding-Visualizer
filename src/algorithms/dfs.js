export function dfs(grid, startNode, endNode) {
  const visitedNodesInOrder = [];
  const found = dfsRecursive(startNode, endNode, grid, visitedNodesInOrder);
  return visitedNodesInOrder;
}

function dfsRecursive(node, endNode, grid, visitedNodesInOrder) {
  if (!node || node.isWall || node.isVisited) return false;

  node.isVisited = true;
  visitedNodesInOrder.push(node);

  if (node === endNode) return true;

  const neighbors = getNeighbors(node, grid);
  for (const neighbor of neighbors) {
    if (!neighbor.isVisited) {
      neighbor.previousNode = node;
      const found = dfsRecursive(neighbor, endNode, grid, visitedNodesInOrder);
      if (found) return true; // stop recursion early if endNode found
    }
  }

  return false;
}

function getNeighbors(node, grid) {
  const neighbors = [];
  const { row, col } = node;
  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  return neighbors;
}
