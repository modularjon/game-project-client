'use strict';

const app = require('../app.js');

const indexGames = () => {
  return $.ajax({
    url: app.host + '/games/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const createGame = () => {
  return $.ajax({
    url: app.host + '/games/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const getPreviousGame = (data) => {
  return $.ajax({
    url: app.host + '/games/' + data,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const updateGame = (data) => {
  return $.ajax({
    url: app.host + '/games/' + app.game.id,
    method: 'PATCH',
    data,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

module.exports = {
  indexGames,
  createGame,
  getPreviousGame,
  updateGame,
};
