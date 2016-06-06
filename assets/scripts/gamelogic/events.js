'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');
const logic = require('./logic');
const app = require('../app');

const onGetIndexGames = function(event) {
  event.preventDefault();
  api.indexGames()
    .done(ui.indexGamesSuccess)
    .fail(ui.failure);
};

const onCreateGame = function(event) {
  event.preventDefault();

  logic.gameOver = false;
  logic.playerToken = 'x';
  logic.gameBoard = ['', '', '', '', '', '', '', '', ''];
  logic.playCount = 0;
  logic.winner = '';

  api.createGame()
    .done(ui.createGameSuccess)
    .fail(ui.failure);
};

// Retreiving previous games to be finished in future
// const onGetPreviousGame = function(event) {
//   event.preventDefault();
//
//   let data = $('#find-game-text').text();
//
//   api.getPreviousGame(data)
//     .done(ui.getPreviousGameSuccess)
//     .fail(ui.failure);
// };

const onPlayerMove = function(event) {
  event.preventDefault();

  if (logic.gameOver || !logic.currentUser || !app.game) {
    return;
  }



  let divID = /\d/.exec($(event.target).attr('id'))[0];

  if (logic.gameBoard[divID] === '') {

    logic.gameBoard[divID] = logic.playerToken;

    $(event.target).text(logic.gameBoard[divID]);

    logic.playerToken = logic.switchPlayer(logic.playerToken);

    $('.game-message').text(logic.playerToken + "\'s turn!");

    logic.playCount++;

    if (logic.whoIsWinner(logic.gameBoard) === 'x' || logic.whoIsWinner(logic.gameBoard) === 'o') {
      logic.winner = logic.whoIsWinner(logic.gameBoard);
    }

    if (logic.winner === 'x' || logic.winner === 'o') {
      $('.game-message').text(logic.winner + ' has won the game!');
      logic.gameOver = true;

    } else if (logic.playCount === 9 && logic.winner === '') {
      $('.game-message').text('The game is a draw.');
      logic.gameOver = true;
    }

    let data = {
      "game": {
        "cell": {
          "index": divID,
          "value": $(event.target).text()
        },
        "over": logic.gameOver,
      }
    };

    api.updateGame(data)
      .done(ui.updateGameSuccess)
      .fail(ui.failure);

  }
};

const addHandlers = () => {
  $('#index-games').on('click', onGetIndexGames);
  $('#new-game').on('click', onCreateGame);
  $('.col-xs-2').on('click', onPlayerMove);
  // $('#find-game').on('submit', onGetPreviousGame);
};

module.exports = {
  addHandlers,
};
