import { useState } from 'react'
import styled from 'styled-components';
import Board from './components/board'

function App() {
  const [board, setBoard] = useState(Array(9).fill(''))
  const [xIsNext, setXIsNext] = useState(true);
  const calculateWinner = (cells) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let index = 0; index < lines.length; index++) {
      const [a, b, c] = lines[index];
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a];
      }
    }

    return null;
  }

  const winner = calculateWinner(board);
  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;

    boardCopy[index] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXIsNext((xIsNext) => !xIsNext)
  }

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }
  return (
    <Game>
      <Title>X vs O</Title>
      <Result>{winner ? `Winnder is ${xIsNext ? "O" : "X"}` : ""}</Result>
      <Board value={board} onClick={handleClick} />
      <ResetButton onClick={handleReset}>Reset</ResetButton>
    </Game>
  )
}

const Game = styled.div`
  max-width : 500px;
  margin : 0 auto;
`

const Title = styled.h1`
  text-align: center;
  padding : 30px;
`

const Result = styled.h3`
  text-align : center;
  padding-bottom: 5px;
`

const ResetButton = styled.button`
  background-color: black;
  padding: 11px 32px;
  color : white;
  border-radius: 6px;
  cursor: pointer;
  margin-left: 200px;
  margin-top: 10px;
`
export default App
