function greedy(grid, startNode, endNode) {
  const openSet = [startNode];
  const visitedNodesInOrder = [];

  startNode.heuristicDistance = manhattanDistance(startNode, endNode);

  while (openSet.length > 0) {
    openSet.sort((a, b) => a.heuristicDistance - b.heuristicDistance);
    const currentNode = openSet.shift();

    if (currentNode.isWall) continue;

    currentNode.isVisited = true;
    visitedNodesInOrder.push(currentNode);

    if (currentNode === endNode) return visitedNodesInOrder;

    const neighbors = getNeighbors(currentNode, grid);
    for (const neighbor of neighbors) {
      if (!neighbor.isVisited && !openSet.includes(neighbor)) {
        neighbor.heuristicDistance = manhattanDistance(neighbor, endNode);
        neighbor.previousNode = currentNode;
        openSet.push(neighbor);
      }
    }
  }

  return visitedNodesInOrder;
}

function getNeighbors(node, grid) {
  const neighbors = [];
  const { row, col } = node;
  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  return neighbors;
}

function manhattanDistance(nodeOne, nodeTwo) {
  return Math.abs(nodeOne.row - nodeTwo.row) + Math.abs(nodeOne.col - nodeTwo.col);
}

export default greedy;
