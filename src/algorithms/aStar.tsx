interface node {
  start: boolean;
  end: boolean;
  x: number;
  y: number;
  weight: number;
  gScore: number;
  fScore: number;
  previousNode: node | null;
  visited: boolean;
  isWall: boolean;
}

type grid = node[][];

const aStar = (grid: grid, start: node, end: node) => {
  start.start = true;
  end.end = true;
  const openSet = new Set<node>();
  const visitedNodes: node[] = [];
  start.gScore = 0;
  start.fScore = shortestDistance(grid, start, end);
  openSet.add(start);
  const closedSet = new Set<node>();

  while (openSet.size > 0) {
    const currentNode = sortNodesByClosest(Array.from(openSet)).shift();
    if (currentNode === end) return visitedNodes;
    currentNode!.visited = true;
    visitedNodes.push(currentNode!);
    openSet.delete(currentNode!);
    closedSet.add(currentNode!);
    const neighbours = getNeighbours(currentNode!, grid);
    neighbours.forEach((neighbour) => {
      if (neighbour.isWall || closedSet.has(neighbour)) {
        return;
      }
      const tenativeGScore =
        currentNode?.gScore! +
        shortestDistance(grid, currentNode!, neighbour) +
        neighbour.weight;
      if (tenativeGScore < neighbour.gScore || !openSet.has(neighbour)) {
        neighbour.previousNode = currentNode!;
        neighbour.gScore = tenativeGScore;
        neighbour.fScore =
          neighbour.gScore + shortestDistance(grid, neighbour, end);
        if (!openSet.has(neighbour)) openSet.add(neighbour);
      }
    });
  }
  return visitedNodes;
};

const getNeighbours = (node: node, grid: grid) => {
  const neighbours: node[] = [];
  const { x, y } = node;

  if (y < grid.length - 1) neighbours.push(grid[y + 1][x]);
  if (y > 0) neighbours.push(grid[y - 1][x]);
  if (x < grid[0].length - 1) neighbours.push(grid[y][x + 1]);
  if (x > 0) neighbours.push(grid[y][x - 1]);
  return neighbours;
};

const sortNodesByClosest = (nodes: node[]) => {
  return nodes.sort((a, b) => {
    return a.fScore - b.fScore;
  });
};

const shortestDistance = (grid: grid, start: node, end: node) => {
  var currNode = start;
  var totalDist = 0;
  while (currNode !== end) {
    if (currNode.x > end.x) {
      currNode = grid[currNode.y][currNode.x - 1];
      totalDist += 1;
    } else if (currNode.x < end.x) {
      currNode = grid[currNode.y][currNode.x + 1];
      totalDist += 1;
    }
    if (currNode.y > end.y) {
      currNode = grid[currNode.y - 1][currNode.x];
      totalDist += 1;
    } else if (currNode.y < end.y) {
      currNode = grid[currNode.y + 1][currNode.x];
      totalDist += 1;
    }
  }
  return totalDist;
};

export { aStar };
