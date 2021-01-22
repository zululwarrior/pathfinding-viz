import React, { useState } from 'react';
import styled from 'styled-components';

import DijkstraGrid from './components/dijkstra/DijkstraGrid';
import AStarGrid from './components/astar/AStarGrid';
import { SelectionButton, ButtonGroup } from './components/util';
import { GlobalStyles } from './global';

const MainContainer = styled.div`
  font-family: Georgia, 'Times New Roman', Times, serif;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [currGrid, setCurrGrid] = useState('dijkstra');

  const setDijkstra = () => {
    setCurrGrid('dijkstra');
  };

  const setAStar = () => {
    setCurrGrid('astar');
  };

  return (
    <>
      <GlobalStyles />
      <MainContainer>
        <Container>
          <ButtonGroup>
            <SelectionButton
              selection={currGrid}
              algorithmName='dijkstra'
              onClick={setDijkstra}
            >
              dijkstra
            </SelectionButton>
            <SelectionButton
              selection={currGrid}
              algorithmName='astar'
              onClick={setAStar}
            >
              a*
            </SelectionButton>
          </ButtonGroup>
          {currGrid === 'dijkstra' && <DijkstraGrid />}
          {currGrid === 'astar' && <AStarGrid />}
          <br />
          <h3>
            * Switch between algorithms by clicking on the respective button
            <br />
            * Click the wall button to change to a weight and vice versa
            <br />
            * Click anywhere in the grid to place a wall or weight
            <br />* Click the maze button to generate a maze
            <br />* Click the reset button to reset the grid
          </h3>
        </Container>
      </MainContainer>
    </>
  );
}

export default App;
