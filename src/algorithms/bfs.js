// bfs.js
export function bfs(grid, startNode, endNode) {
    const queue = [startNode];
    startNode.distance = 0;
    const visitedNodesInOrder = [];
    const visited = new Set();
    visited.add(startNode);
  
    while (queue.length > 0) {
      const currentNode = queue.shift();
      visitedNodesInOrder.push(currentNode);
  
      if (currentNode === endNode) {
        return visitedNodesInOrder;
      }
  
      const neighbors = getNeighbors(grid, currentNode);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          neighbor.previousNode = currentNode;
          queue.push(neighbor);
        }
      }
    }
  
    return visitedNodesInOrder; // Return all visited nodes if no path found
  }
  
function getNeighbors(grid, node) {
  const neighbors = [];
  const { row, col } = node;

  if (row > 0 && !grid[row - 1][col].isWall) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1 && !grid[row + 1][col].isWall) neighbors.push(grid[row + 1][col]);
  if (col > 0 && !grid[row][col - 1].isWall) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1 && !grid[row][col + 1].isWall) neighbors.push(grid[row][col + 1]);

  return neighbors;
}

  