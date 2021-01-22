import styled from 'styled-components';

const Button = styled.button`
  margin: 0px 5px 5px 5px;
  font-family: Varela round;
  position: relative;
  min-width: 100px;
  min-height: 40px;
  padding: 5px 15px 5px 15px;
  border-radius: 30px;
  outline: none;
  border: none;
  color: #f5f5f5;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  background-color: #fd6868;
  cursor: pointer;
  transition: 0.08s;

  &::after {
    content: '';
    border-radius: 30px;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.3);
    transition: 0.08s;
    opacity: 0;
  }
  &:active::after {
    opacity: 1;
  }
  &:hover {
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
    transform: translate(-2px, -2px);
  }
`;

interface Props {
  selection: string;
  algorithmName: string;
}

const SelectionButton = styled(Button)<Props>`
  background-color: ${({ selection, algorithmName }) =>
    selection === algorithmName ? '#3643f8' : '#fd6868'};
`;

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ResetButtonGroup = styled(ButtonGroup)`
  justify-content: flex-end;
  padding-top: 5px;
`;

export { Button, SelectionButton, ButtonGroup, ResetButtonGroup };
