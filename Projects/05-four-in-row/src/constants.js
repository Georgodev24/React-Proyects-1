export const TURNS = {
  X: '🔴',
  O: '🔵',
}

export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null)
}
