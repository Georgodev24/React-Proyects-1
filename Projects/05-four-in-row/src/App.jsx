import { useState } from 'react'
import { Square } from './components/square.jsx'
import { TURNS, DIMENTIONS } from './constants'
/*import { checkWinner } from './logic/boards.js'*/
/*import { WinnerModal } from './components/WinnerModal.jsx'*/
import { saveGameToStorage, resetGameToStorage } from './logic/storage/index.js'
import confetti from 'canvas-confetti'

function App() {
  const initialBoard = Array.from({ length: DIMENTIONS.NumCols }, () =>
    Array(DIMENTIONS.NumRows).fill(null)
  )

  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : initialBoard
  })

  const [turn, setTurn] = useState(() => {
    const turnsFromStorage = window.localStorage.getItem('turn')
    return turnsFromStorage ?? TURNS.X
  })
  /*const [winner, setWinner] = useState(null)*/

  const resetGame = () => {
    setBoard(
      Array(6)
        .fill(null)
        .map(() => Array(7).fill(null))
    )
    setTurn(TURNS.X)
    // setWinner(null)

    resetGameToStorage()
  }

  const updateBoard = (colIndex) => {
    const newBoard = [...board]
    let rowToPlace = -1

    for (let rowIndex = 0; rowIndex < DIMENTIONS.NumRows; rowIndex++) {
      if (newBoard[colIndex][rowIndex] === null) {
        rowToPlace = rowIndex
        break
      }
    }

    if (rowToPlace !== -1) {
      newBoard[colIndex][rowToPlace] = turn
      setBoard(newBoard)
    } else {
      return
    }
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    saveGameToStorage({ board: newBoard, turn: newTurn })

    {
      /*const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }*/
    }
  }

  return (
    <main className='board'>
      <h1>Conecta 4</h1>
      <button onClick={resetGame}>Reset</button>
      <div className='game'>
        {Array.from({ length: DIMENTIONS.NumCols }).map((_, colIndex) => (
          <div
            key={colIndex}
            className='r-square'
            onClick={() => updateBoard(colIndex)}>
            {Array.from({ length: DIMENTIONS.NumRows }).map((_, rowIndex) => (
              <Square key={rowIndex} colIndex={colIndex} rowIndex={rowIndex}>
                <div className='c-square'>
                  {board[colIndex] && board[colIndex][rowIndex]}
                </div>
              </Square>
            ))}
          </div>
        ))}
      </div>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      {/*<WinnerModal resetGame={resetGame} winner={winner} />*/}
    </main>
  )
}

export default App
