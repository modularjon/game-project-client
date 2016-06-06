'use strict';

const app = require('../app.js');
const logic = require('./logic');

const success = (data) => {
  $('.game-message').text('Success!');
};

const failure = (error) => {
  $('.game-message').text("Sorry, it didn\'t work, try again!");
};

const indexGamesSuccess = (data) => {
  app.games = data.games;
  $('#number-played').text(data.games.length);
};

const createGameSuccess = (data) => {
  app.game = data.game;

  $('.col-xs-2').text('');
  $('.game-message').text('Click to start! x goes first!');
  $('#number-played').text('');
};


// Retreiving previous games to be finished in future
// const getPreviousGameSuccess = (data) => {
//   app.game = data.game;
//   logic.gameBoard = data.game.cells;
//
//   $('.col-xs-2').text('x');
//   $('.game-message').text('Click to start! x goes first!');
// };

const updateGameSuccess = (data) => {
  app.game = data.game;
  logic.gameBoard = data.game.cells;
};

module.exports = {
  failure,
  success,
  indexGamesSuccess,
  createGameSuccess,
  updateGameSuccess,
// getPreviousGameSuccess,
};
