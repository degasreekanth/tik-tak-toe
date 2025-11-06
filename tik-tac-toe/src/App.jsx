import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay, boardId }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares, boardId);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function MultiBoardGame() {
  // Create state for 6 boards
  const [boards, setBoards] = useState([
    { squares: Array(9).fill(null), xIsNext: true },
    { squares: Array(9).fill(null), xIsNext: true },
    { squares: Array(9).fill(null), xIsNext: true },
    { squares: Array(9).fill(null), xIsNext: true },
    { squares: Array(9).fill(null), xIsNext: true },
    { squares: Array(9).fill(null), xIsNext: true },
  ]);

  function handlePlay(nextSquares, boardId) {
    setBoards(
      boards.map((board, index) => {
        if (index === boardId) {
          return {
            squares: nextSquares,
            xIsNext: !board.xIsNext,
          };
        }
        return board;
      })
    );
  }

  function resetBoard(boardId) {
    setBoards(
      boards.map((board, index) => {
        if (index === boardId) {
          return {
            squares: Array(9).fill(null),
            xIsNext: true,
          };
        }
        return board;
      })
    );
  }

  function resetAllBoards() {
    setBoards([
      { squares: Array(9).fill(null), xIsNext: true },
      { squares: Array(9).fill(null), xIsNext: true },
      { squares: Array(9).fill(null), xIsNext: true },
      { squares: Array(9).fill(null), xIsNext: true },
      { squares: Array(9).fill(null), xIsNext: true },
      { squares: Array(9).fill(null), xIsNext: true },
    ]);
  }

  // Calculate winners for each board
  const boardResults = boards.map((board, index) => {
    const winner = calculateWinner(board.squares);
    return {
      boardId: index,
      winner: winner,
      isDraw: !winner && board.squares.every((square) => square !== null),
    };
  });

  return (
    <div className="multi-board-game">
      <h1>Multi-Board Tic-Tac-Toe</h1>
      <div className="results-summary">
        <h2>Game Results</h2>
        <div className="results-grid">
          {boardResults.map((result) => (
            <div key={result.boardId} className="result-item">
              <span>Board {result.boardId + 1}: </span>
              {result.winner ? (
                <span className="winner">Winner: {result.winner}</span>
              ) : result.isDraw ? (
                <span className="draw">Draw</span>
              ) : (
                <span className="in-progress">In Progress</span>
              )}
            </div>
          ))}
        </div>
        <button className="reset-all-button" onClick={resetAllBoards}>
          Reset All Boards
        </button>
      </div>

      <div className="boards-container">
        {boards.map((board, index) => (
          <div key={index} className="board-wrapper">
            <h3>Board {index + 1}</h3>
            <div className="game-board">
              <Board
                xIsNext={board.xIsNext}
                squares={board.squares}
                onPlay={handlePlay}
                boardId={index}
              />
            </div>
            <button className="reset-button" onClick={() => resetBoard(index)}>
              Reset Board
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
