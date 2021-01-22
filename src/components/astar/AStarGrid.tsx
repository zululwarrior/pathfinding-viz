import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Node from './AStarNode';
import { aStar } from '../../algorithms/aStar';
import generateMaze from '../../algorithms/mazeGenerator';
import { createGrid } from '../../helperFunctions';
import { Button, ButtonGroup, ResetButtonGroup } from '../util';

const GridComponent = styled.div`
  border: solid 1px;
`;

const GridCol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
  shortest?: boolean;
}

const AStarGrid: React.FC = () => {
  const [startNodeCoords, setStartNodeCoords] = useState({ x: 7, y: 1 });
  const [endNodeCoords, setEndNodeCoords] = useState({ x: 7, y: 28 });

  const createNode = (x: number, y: number): node => {
    return {
      start: x === startNodeCoords.y && y === startNodeCoords.x,
      end: x === endNodeCoords.y && y === endNodeCoords.x,
      x,
      y,
      weight: 0,
      gScore: Infinity,
      fScore: Infinity,
      previousNode: null,
      visited: false,
      isWall: false,
      shortest: false,
    };
  };

  const [grid, setGrid] = useState(createGrid<node>(createNode));
  const [isClicked, setIsClicked] = useState(false);
  const [isWeight, setIsWeight] = useState(false);
  const [isStart, setIsStart] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [isMaze, setIsMaze] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const [startNode, setStartNode] = useState(
    grid[startNodeCoords.x][startNodeCoords.y]
  );
  const [endNode, setEndNode] = useState(
    grid[endNodeCoords.x][endNodeCoords.y]
  );

  useEffect(() => {
    setStartNode(grid[startNodeCoords.x][startNodeCoords.y]);
    setEndNode(grid[endNodeCoords.x][endNodeCoords.y]);
    if (isMaze) {
      generateMaze(grid);
      setIsMaze(false);
    }
  }, [startNodeCoords, endNodeCoords, grid]);

  const mouseDown = (x: number, y: number, isWeight: boolean) => {
    setIsClicked(true);
    grid[x][y].start ? setIsStart(true) : setIsStart(false);
    grid[x][y].end ? setIsEnd(true) : setIsEnd(false);
    if (grid[x][y].start || grid[x][y].end)
      makeStartOrEndNode(x, y, isStart, isEnd);
    else setNode(x, y, isWeight);
  };

  const mouseEnter = (x: number, y: number, isWeight: boolean) => {
    if (!isClicked) return;
    if (isStart || isEnd) makeStartOrEndNode(x, y, isStart, isEnd);
    else setNode(x, y, isWeight);
  };

  const mouseUp = (x: number, y: number) => {
    setIsClicked(false);
    setIsStart(false);
    setIsEnd(false);
  };

  const mouseLeave = (x: number, y: number, isWeight: boolean) => {
    if (!isClicked) return;
    resetNode(x, y, isStart, isEnd);
  };

  const resetNode = (
    x: number,
    y: number,
    isStart: boolean,
    isEnd: boolean
  ) => {
    const newGrid = [...grid];
    const node = newGrid[x][y];

    if (isStart) {
      if (node.end) return;
      const newNode = { ...node, start: false };
      newGrid[x][y] = newNode;
    }
    if (isEnd) {
      if (node.start) return;
      const newNode = { ...node, end: false };
      newGrid[x][y] = newNode;
    }
    setGrid(newGrid);
  };

  const makeStartOrEndNode = (
    x: number,
    y: number,
    isStart: boolean,
    isEnd: boolean
  ) => {
    const newGrid = [...grid];
    const node = newGrid[x][y];
    if (isStart) {
      if (node.end) return;
      setStartNodeCoords({ x, y });
      const newNode = { ...node, start: true };
      newGrid[x][y] = newNode;
      if (isAnimationComplete) {
        redrawAlgorithm(
          newGrid,
          newNode,
          newGrid[endNodeCoords.x][endNodeCoords.y]
        );
      }
      return;
    }
    if (isEnd) {
      if (node.start) return;
      setEndNodeCoords({ x, y });
      const newNode = { ...node, end: true };
      newGrid[x][y] = newNode;
      if (isAnimationComplete) {
        redrawAlgorithm(
          newGrid,
          newGrid[startNodeCoords.x][startNodeCoords.y],
          newNode
        );
      }
      return;
    }
  };

  const setNode = (x: number, y: number, isWeight: boolean) => {
    const newGrid = [...grid];
    const node = newGrid[x][y];
    if (!isWeight) {
      const newNode = { ...node, isWall: !node.isWall };
      newGrid[x][y] = newNode;
    } else {
      let newNode;
      node.weight > 0
        ? (newNode = { ...node, weight: 0 })
        : (newNode = { ...node, weight: 10 });
      newGrid[x][y] = newNode;
    }
    if (isAnimationComplete) {
      redrawAlgorithm(
        newGrid,
        newGrid[startNodeCoords.x][startNodeCoords.y],
        newGrid[endNodeCoords.x][endNodeCoords.y]
      );
    }
  };

  const toggleWeight = () => {
    setIsWeight(!isWeight);
  };

  const resetGrid = () => {
    setIsAnimationComplete(false);
    setGrid(createGrid<node>(createNode));
  };

  const getClosestPath = (endNode: node) => {
    const closestPath: node[] = [];
    let currNode: node | null = endNode;
    while (currNode !== null) {
      closestPath.unshift(currNode);
      currNode = currNode.previousNode;
    }
    return closestPath;
  };

  const emptyGrid = () => {
    const newGrid = [...grid];
    newGrid.forEach((col) => {
      col.forEach((node) => {
        node.visited = false;
        node.shortest = false;
        node.shortest = false;
        node.fScore = Infinity;
        node.gScore = Infinity;
        node.previousNode = null;
      });
    });
    setGrid(newGrid);
  };

  const animateClosestPath = (closestPath: node[], i: number) => {
    setTimeout(() => {
      for (let j = 0; j < closestPath.length; j++) {
        setTimeout(() => {
          setGrid((grid) => {
            const newGrid = [...grid];
            const node = closestPath[j];
            const newNode = {
              ...node,
              shortest: true,
            };
            newGrid[node.y][node.x] = newNode;
            return newGrid;
          });
        }, 50 * j);
      }
      setIsAnimationComplete(true);
    }, 50 * i);
  };

  const animateAStar = (visitedNodes: node[], i: number) => {
    setTimeout(() => {
      setGrid((grid) => {
        const newGrid = [...grid];
        const node = visitedNodes![i];
        const newNode = {
          ...node,
          visited: true,
        };
        newGrid[node.y][node.x] = newNode;
        return newGrid;
      });
    }, 50 * i);
  };

  const visualiseAStar = () => {
    emptyGrid();
    const visitedNodes = aStar(grid, startNode, endNode);
    const closestPath = getClosestPath(endNode);
    emptyGrid();
    for (let i = 0; i < visitedNodes!.length; i++) {
      if (i === visitedNodes!.length - 1) {
        animateClosestPath(closestPath, i);
      }
      animateAStar(visitedNodes!, i);
    }
  };

  const redrawAlgorithm = (grid: node[][], start: node, end: node) => {
    emptyGrid();
    const visitedNodes = aStar(grid, start, end);
    console.log(grid);
    const closestPath = getClosestPath(end);
    for (let j = 0; j < closestPath!.length; j++) {
      setGrid((currGrid) => {
        const newGrid = [...currGrid];
        const node = closestPath![j];
        const end = {
          ...node,
          shortest: true,
        };
        newGrid[node.y][node.x] = end;
        return newGrid;
      });
    }
  };

  let nodeObjectData: any = {
    mouseDown,
    mouseEnter,
    mouseUp,
    mouseLeave,
    isWeight,
  };

  const createMaze = () => {
    setGrid(createGrid<node>(createNode));
    setIsAnimationComplete(false);
    setIsMaze(true);
  };
  const weightOrWallText = isWeight ? 'weight' : 'wall';

  return (
    <>
      <ButtonGroup>
        <Button onClick={visualiseAStar}>Animate</Button>
        <Button onClick={toggleWeight}>{weightOrWallText}</Button>
        <Button onClick={createMaze}>maze</Button>
      </ButtonGroup>
      <GridComponent>
        {grid.map((col, i) => (
          <GridCol key={i}>
            {col.map((node, j) => {
              nodeObjectData = { ...nodeObjectData, ...node };
              if (node.x === startNode.x && node.y === startNode.y)
                return (
                  <Node data={{ ...nodeObjectData, start: true }} key={j} />
                );

              if (node.x === endNode.x && node.y === endNode.y)
                return <Node data={{ ...nodeObjectData, end: true }} key={j} />;

              return <Node data={nodeObjectData} key={j} />;
            })}
          </GridCol>
        ))}
      </GridComponent>
      <ResetButtonGroup>
        <Button onClick={resetGrid}>reset</Button>
      </ResetButtonGroup>
    </>
  );
};

export default AStarGrid;
