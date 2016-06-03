'use strict';

let playerToken = 'x';

let gameBoard = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'];

let playCount = 0;

let winner = '';

const testColumns = function(board) {

  for (let i = 0; i < 3; i++) {
    if (board[i] === board[i + 3] && board[i] === board[i + 6]) {
      return board[i];
    }
  }
};

const testRows = function(board) {

  for (let i = 0; i < 7; i + 3) {
    if (board[i] === board[i + 1] && board[i] === board[i + 2]) {
      return board[i];
    }
  }
};

const testDiagonals = function(board) {

  if (board[0] === board[4] && board[0] === board[8]) {
    return board[0];

  } else if (board[2] === board[4] && board[2] === board[6]) {
    return board[2];

  } else {
    return;

  }
};

module.exports = {
  playerToken,
  gameBoard,
  playCount,
  winner,
  testColumns,
  testRows,
  testDiagonals,
};
