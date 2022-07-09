import React, { useState } from 'react';
import styled from 'styled-components';
import Square from './components/Square';

function App() {
  const [xPlayer, setXPlayer] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null));
  const handlePlay = (index) => {
    const temp = board.slice()
    if (xPlayer) {
      temp[index] = "X";
    } else {
      temp[index] = "O";
    }
    setBoard(temp);
    setXPlayer(!xPlayer);
  }

  const winner = caculateWinner(board);

  return (
    <Container>
      {winner ? <h2>{winner} is win.</h2> : null}
      <Board>
        {board.map((item, index) => <Square handlePlay={() => handlePlay(index)} value={item} />)}
      </Board>
    </Container>
  );
}

const caculateWinner = (board) => {
  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < win.length; i++) {
    const [a, b, c] = win[i];
    if (board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
    return null;
  }
}

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  margin: auto;
  max-width: 250px;
`


const Container = styled.div`
  text-align: center;
`;

const Text = styled.div`
  background-color: ${props => props.theme === "Light" ? "White" : "Black"};
`;

export default App;
