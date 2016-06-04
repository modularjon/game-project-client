'use strict';

let playerToken = 'x';

let gameBoard = ['', '', '', '', '', '', '', '', ''];

let playCount = 0;

let winner = '';

let gameOver = false;

let currentUser;

const switchPlayer = function(player) {
  if (player === 'x') {
    return 'o';

  } else {
    return 'x';

  }
};

const testColumns = function(board) {

  for (let i = 0; i < 3; i++) {

    if (board[i] !== '' && board[i] === board[i + 3] && board[i] === board[i + 6]) {
      return board[i];
    }
  }

  return;
};

const testRows = function(board) {

  for (let i = 0; i < 7; i += 3) {
    if (board[i] !== '' && board[i] === board[i + 1] && board[i] === board[i + 2]) {
      return board[i];
    }
  }

  return;
};

const testDiagonals = function(board) {

  if (board[0] !== '' && board[0] === board[4] && board[0] === board[8]) {
    return board[0];

  } else if (board[2] !== '' && board[2] === board[4] && board[2] === board[6]) {
    return board[2];
  }
};

const whoIsWinner = function(board) {

  if (testColumns(board) !== '' && testColumns(board) !== undefined) {
    winner = testColumns(board);
    return winner;

  } else if (testRows(board) !== '' && testRows(board) !== undefined) {
    winner = testRows(board);
    return winner;

  } else if (testDiagonals(board) !== '' && testDiagonals(board) !== undefined) {
    winner = testDiagonals(board);
    return winner;
  }
};

module.exports = {
  playerToken,
  gameBoard,
  playCount,
  winner,
  gameOver,
  currentUser,
  switchPlayer,
  whoIsWinner,
};
