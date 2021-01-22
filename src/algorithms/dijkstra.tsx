interface node {
  start: boolean;
  end: boolean;
  x: number;
  y: number;
  weight: number;
  distance: number;
  previousNode: node | null;
  visited: boolean;
  isWall: boolean;
}

type grid = node[][];

export const dijkstra = (grid: grid, start: node, end: node) => {
  start.distance = 0;
  start.start = true;
  end.end = true;
  const visitedNodes: node[] = [];
  const unvisitedNodes = grid.flat();

  while (!!unvisitedNodes) {
    const closestNode = sortNodesByClosest(unvisitedNodes).shift();
    if (closestNode !== undefined) {
      if (closestNode.isWall) continue;
      if (closestNode.distance === Infinity) return visitedNodes;
      closestNode.visited = true;
      visitedNodes.push(closestNode);
      if (closestNode === end) return visitedNodes;
      const neighbours = getNeighbours(closestNode, grid);
      neighbours
        .filter((neighbour) => !neighbour.visited)
        .forEach((neighbour) => {
          neighbour.distance = closestNode.distance + neighbour.weight;
          neighbour.previousNode = closestNode;
        });
    }
  }
};

const sortNodesByClosest = (nodes: node[]) => {
  return nodes.sort((a, b) => {
    return a.distance - b.distance;
  });
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
