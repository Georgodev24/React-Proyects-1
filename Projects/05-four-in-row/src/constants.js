export const TURNS = {
  X: '🔴',
  O: '🔵',
}

export const WINNER_COMPS = []

export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null)
}
