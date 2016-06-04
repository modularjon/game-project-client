'use strict';

const api = require('./api');
const ui = require('./ui');
const logic = require('./logic');

const onGetIndexGames = function(event) {
  event.preventDefault();
  api.indexGames()
    .done(ui.success)
    .fail(ui.failure);
};

const onStartGame = function(event) {
  event.preventDefault();

  // logic.playerToken = 'x';
  //
  // logic.gameBoard = ['', '', '', '', '', '', '', '', ''];
  //
  // logic.playCount = 0;
  //
  // logic.gameOver = false;
  //
  // logic.winner = '';

  api.createGame()
    .done(ui.success)
    .fail(ui.failure);
};

const onPlayerMove = function(event) {
  event.preventDefault();

  if (logic.gameOver || !logic.currentUser) {
    return;
  }



  let divID = /\d/.exec($(event.target).attr('id'))[0];

  if (logic.gameBoard[divID] === '') {

    logic.gameBoard[divID] = logic.playerToken;

    $(event.target).text(logic.gameBoard[divID]);

    console.log(logic.gameBoard);

    logic.playerToken = logic.switchPlayer(logic.playerToken);

    $('.game-message').text(logic.playerToken + "\'s turn!");

    logic.playCount++;

    console.log(logic.winner);

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

    console.log(logic.gameOver);
    console.log(logic.winner);
      // let data = {
      //   game: {
      //     cell: {
      //       index: divID,
      //       value: logic.gameBoard[divID]
      //     },
      //     over: false
      //   }
      // };
      // console.log(data);
      //
      // api.updateGame(data)
      //   .done(ui.playerMoveSuccess)
      //   .fail(ui.failure);

  } else {

    console.log('uh oh');

  }

};

const addHandlers = () => {
  $('#index-games').on('click', onGetIndexGames);
  $('#new-game').on('click', onStartGame);
  $('.col-xs-2').on('click', onPlayerMove);
};

module.exports = {
  addHandlers,
};
