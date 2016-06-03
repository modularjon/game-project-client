'use strict';

const api = require('./api');
const ui = require('./ui');

let playerToken = 'x';

let gameBoard = ['','','','','','','','',''];

let playCount = 0;

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
      console.log(playCount);


      if (playCount === 9) {
        console.log('DRAW!');
      }


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

};

const addHandlers = () => {
  $('#index-games').on('click', onGetIndexGames);
  $('#new-game').on('click', onStartGame);
  $('.col-xs-2').on('click', onPlayerMove);
};

module.exports = {
  addHandlers,
};
