export function bidirectionalBFS(grid, startNode, endNode) {
  const visitedStart = new Set();
  const visitedEnd = new Set();
  const queueStart = [startNode];
  const queueEnd = [endNode];

  const visitedNodesInOrder = [];

  startNode.fromStart = true;
  endNode.fromStart = false;

  while (queueStart.length && queueEnd.length) {
    if (bfsStep(queueStart, visitedStart, visitedEnd, true, grid, visitedNodesInOrder)) {
      break;
    }
    if (bfsStep(queueEnd, visitedEnd, visitedStart, false, grid, visitedNodesInOrder)) {
      break;
    }
  }

  return visitedNodesInOrder;
}

function bfsStep(queue, visitedThisSide, visitedOtherSide, fromStart, grid, visitedNodesInOrder) {
  const current = queue.shift();
  if (!current || current.isWall || visitedThisSide.has(current)) return false;

  visitedThisSide.add(current);
  visitedNodesInOrder.push(current);

  if (visitedOtherSide.has(current)) {
    return true; // Meet in the middle
  }

  const neighbors = getNeighbors(current, grid);
  for (const neighbor of neighbors) {
    if (!neighbor.isWall && !visitedThisSide.has(neighbor)) {
      neighbor.previousNode = current;
      queue.push(neighbor);
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
