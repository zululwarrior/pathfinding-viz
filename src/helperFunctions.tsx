type createNode<T> = (x: number, y: number) => T;

const createGrid = <T,>(createNode: createNode<T>) => {
  const grid = [];
  for (let y = 0; y < 16; y++) {
    const col = [];
    for (let x = 0; x < 30; x++) {
      col.push(createNode(x, y));
    }
    grid.push(col);
  }
  return grid;
};

export { createGrid };
