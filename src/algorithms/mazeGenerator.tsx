type node = any;

interface cell {
  bottomWall: boolean;
  rightWall: boolean;
  id: number;
}

type grid = node[][];

const generateMaze = (grid: grid) => {
  let numCols = grid[0].length;
  let numRows = grid.length;
  let currRow: cell[] = [];
  let amountInSet = new Map<number, number>();
  const newGrid = [...grid];

  for (let i = 0; i < numCols; i++) {
    amountInSet.set(i, 0);
    currRow.push({ rightWall: false, bottomWall: true, id: -1 });
  }

  for (let i = 0; i < numRows; i += 2) {
    for (let j = 0; j < currRow.length; j += 3) {
      createUniqueSet(amountInSet, currRow[j]);
    }

    for (let j = 0; j < currRow.length; j += 3) {
      if (j === currRow.length - 1) {
        break;
      }
      if (currRow[j].id === currRow[j + 1].id) {
        currRow[j].rightWall = true;
      } else {
        const createWall = Math.random() >= 0.5;
        currRow[j].rightWall = createWall;
        if (!createWall)
          mergeSets(currRow[j].id, currRow[j + 1].id, amountInSet, currRow);
      }
    }

    for (let j = 0; j < currRow.length; j++) {
      let removeBottomWall = Math.random() >= 0.5;
      if (amountInSet.get(currRow[j].id) === 1) removeBottomWall = true;
      currRow[j].bottomWall = !removeBottomWall;
      if (!removeBottomWall) {
        amountInSet.set(currRow[j].id, amountInSet.get(currRow[j].id)! - 1);
      }
    }
    if (i !== numRows - 1) {
      amountInSet.forEach((amount) => {
        amount = 0;
      });
      for (let j = 0; j < currRow.length; j++) {
        updateGrid(newGrid, i, j, currRow[j]);
        currRow[j].rightWall = false;
        if (currRow[j].bottomWall) currRow[j].id = -1;
        else
          amountInSet.set(currRow[j].id, amountInSet.get(currRow[j].id)! + 1);
        currRow[j].bottomWall = true;
      }
    }
  }
  return newGrid;
};

const updateGrid = (grid: grid, x: number, y: number, cell: cell) => {
  if (x < grid.length) {
    if (cell.bottomWall) {
      console.log(grid[x + 1][y].start);
      if (!grid[x + 1][y].start && !grid[x + 1][y].end)
        grid[x + 1][y].isWall = true;
    }
  }
  if (y < grid[0].length) {
    if (cell.rightWall) {
      if (
        !grid[x][y + 1].start &&
        !grid[x][y + 1].end &&
        !grid[x + 1][y + 1].start &&
        !grid[x + 1][y + 1].end
      ) {
        grid[x][y + 1].isWall = true;
        grid[x + 1][y + 1].isWall = true;
      }
    }
  }
};

const mergeSets = (
  leftId: number,
  rightId: number,
  amountInSet: Map<number, number>,
  cells: cell[]
) => {
  for (let i = 0; i < amountInSet.size - 1; i++) {
    if (cells[i].id === rightId) {
      cells[i].id = leftId;
      amountInSet.set(leftId, amountInSet.get(leftId)! + 1);
      amountInSet.set(rightId, amountInSet.get(rightId)! - 1);
    }
    if (amountInSet.get(rightId) === 0) {
      break;
    }
  }
};

const createUniqueSet = (amountsInSet: Map<number, number>, cell: cell) => {
  if (cell.id >= 0) return;

  for (let i = 0; i < amountsInSet.size - 1; i++) {
    if (amountsInSet.get(i) === 0) {
      cell.id = i;
      amountsInSet.set(i, amountsInSet.get(i)! + 1);
      break;
    }
  }
};
export default generateMaze;
