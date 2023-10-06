export const checkWinner = (row, column, ch) => {
  // [row + x][colum] = up-down
  // [row - x][column] = down-up
  // [row][column + x] = right
  // [row][column - x] = left
  // [row + x][column + x] = diagonal down-right
  // [row + x][column - x] = diagonal down-left
  // [row - x][column + x] = diagonal upper-right
  // [row - x][column - x] = diagonal upper-left

  try {
    if (board[row + 1][column] === ch) {
      if (board[row + 2][column] === ch) {
        if (board[row + 3][column] === ch) {
          return true
        }
      }
    }
  } catch (e) {
    console.log(e)
  }

  try {
    if (board[row - 1][column] === ch) {
      if (board[row - 2][column] === ch) {
        if (board[row - 3][column] === ch) {
          return true
        }
      }
    }
  } catch (e) {
    console.log(e)
  }

  try {
    if (board[row][column + 1] === ch) {
      if (board[row][column + 2] === ch) {
        if (board[row][column + 3] === ch) {
          return true
        }
      }
    }
  } catch (e) {
    console.log(e)
  }

  try {
    if (board[row][column - 1] === ch) {
      if (board[row][column - 2] === ch) {
        if (board[row][column - 3] === ch) {
          return true
        }
      }
    }
  } catch (e) {
    console.log(e)
  }

  try {
    if (board[row + 1][column + 1] === ch) {
      if (board[row + 2][column + 2] === ch) {
        if (board[row + 3][column + 3] === ch) {
          return true
        }
      }
    }
  } catch (e) {
    console.log(e)
  }

  try {
    if (board[row + 1][column - 1] === ch) {
      if (board[row + 2][column - 2] === ch) {
        if (board[row + 3][column - 3] === ch) {
          return true
        }
      }
    }
  } catch (e) {
    console.log(e)
  }

  try {
    if (board[row - 1][column + 1] === ch) {
      if (board[row - 2][column + 2] === ch) {
        if (board[row - 3][column + 3] === ch) {
          return true
        }
      }
    }
  } catch (e) {
    console.log(e)
  }

  try {
    if (board[row + 1][column + 1] === ch) {
      if (board[row + 2][column + 2] === ch) {
        if (board[row + 3][column + 3] === ch) {
          return true
        }
      }
    }
  } catch (e) {
    console.log(e)
  }
}
