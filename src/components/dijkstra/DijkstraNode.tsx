import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

interface Props {
  props: node;
}

interface MainProps {
  data: node;
}

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
  mouseDown: (x: number, y: number, w: boolean, s: boolean) => void;
  mouseEnter: (x: number, y: number, w: boolean, s: boolean) => void;
  mouseUp: (x: number, y: number) => void;
  mouseLeave: (x: number, y: number, w: boolean) => void;
  isWeight: boolean;
  shortest?: boolean;
}

const NodeAnimation = keyframes`
  0% {transform:scale(0)}
  20% {transform:scale(0.3)}
  40% {transform:scale(0.6)}
  60% {transform:scale(0.9)}
  80%{transform:scale(1.1)}
  100%{transform:scale(1.0)}
`;

const NodeOutline = styled.div`
  width: 30px;
  height: 30px;
  margin: 1px;
  user-select: none;
  -webkit-user-drag: none;
`;

const NodeComponent = styled.div<Props>`
  position: relative;
  background-color: ${(props) =>
    props.props.start
      ? 'green'
      : props.props.end
      ? 'red'
      : props.props.isWall
      ? 'pink'
      : props.props.shortest
      ? 'blue'
      : props.props.weight > 1 && props.props.visited
      ? 'gold'
      : props.props.weight > 1
      ? 'grey'
      : props.props.visited
      ? 'yellow'
      : 'transparent'};
  width: 100%;
  height: 100%;
  animation: ${(props) =>
    props.props.start || props.props.end
      ? `none`
      : props.props.visited || props.props.shortest
      ? css`
          ${NodeAnimation} 1s linear
        `
      : `none`};
`;

const ShortestNode = styled(NodeComponent)<Props>``;

const Node: React.FC<MainProps> = ({ data }) => {
  const { x, y, isWeight, shortest, start, end } = data;

  return (
    <NodeOutline>
      {(shortest && (
        <ShortestNode
          props={{ ...data }}
          onMouseDown={() => {
            data.mouseDown(y, x, isWeight, start);
          }}
          onMouseEnter={() => {
            data.mouseEnter(y, x, isWeight, start);
          }}
          onMouseUp={() => {
            data.mouseUp(y, x);
          }}
          onMouseLeave={() => {
            data.mouseLeave(y, x, isWeight);
          }}
        />
      )) || (
        <NodeComponent
          props={{ ...data }}
          onMouseDown={() => {
            data.mouseDown(y, x, isWeight, start);
          }}
          onMouseEnter={() => {
            data.mouseEnter(y, x, isWeight, start);
          }}
          onMouseUp={() => {
            data.mouseUp(y, x);
          }}
          onMouseLeave={() => {
            data.mouseLeave(y, x, isWeight);
          }}
        />
      )}
    </NodeOutline>
  );
};

export default Node;
