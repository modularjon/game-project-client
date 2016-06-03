'use strict';

const getFormFields = require('../../../lib/get-form-fields');
// const model = require('../gamelogic/model');
// const logic = require('../gamelogic/model')
const api = require('./api');
const ui = require('./ui');

let playerToken = 'x';

let gameBoard = ['','','','','','','','',''];

let playCount = 0;

const onSignUp = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
    .done(ui.success)
    .fail(ui.failure);
};

const onSignIn = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.failure);
};

const onSignOut = function(event) {
  event.preventDefault();
  api.signOut()
    .done(ui.signOutSuccess)
    .fail(ui.failure);
};

const onChangePassword = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
    .done(ui.success)
    .fail(ui.failure);
};

const onGetIndexGames = function(event) {
  event.preventDefault();
  api.indexGames()
    .done(ui.success)
    .fail(ui.failure);
};

const onStartGame = function(event) {
  event.preventDefault();
  api.createGame()
    .done(ui.success)
    .fail(ui.failure);
};

const onPlayerMove = function(event) {
  event.preventDefault();

  let divID = /\d/.exec($(event.target).attr('id'));

  if (gameBoard[divID] === '') {

      gameBoard[divID] = playerToken;

      $(event.target).text(gameBoard[divID]);

      if (playerToken === 'x') {
        playerToken = 'o';
      } else {
        playerToken = 'x';
      }

      playCount ++;

      let data = {
        game: {
          cell: {
            index: divID,
            value: gameBoard[divID]
          },
          over: false
        }
      };
      console.log(data);

      api.updateGame(data)
        .done(ui.playerMoveSuccess)
        .fail(ui.failure);

  } else {
    console.log('uh oh');
  }
  //
  // if (playCount === 9) {
  //   future function that displays a draw;
  // }

};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  $('#index-games').on('click', onGetIndexGames);
  $('#new-game').on('click', onStartGame);
  $('.col-xs-2').on('click', onPlayerMove);
};

module.exports = {
  addHandlers,
};
