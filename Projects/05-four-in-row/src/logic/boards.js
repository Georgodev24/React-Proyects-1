import { WINNER_COMPS } from '../constants.js'
export const checkWinner = (boardToCheck) => {
  for (const comp of WINNER_COMPS) {
    const [a, b, c, d] = comp
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c] &&
      boardToCheck[a] === boardToCheck[d]
    ) {
      return boardToCheck[a]
    }
  }
  return null
}
