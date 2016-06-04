'use strict';

const app = require('../app.js');

const success = (data) => {
  $('.game-message').text('Success!');
};

const failure = (error) => {
  $('.game-message').text("Sorry, it didn\'t work, try again!");
};

const indexGamesSuccess = (data) => {
  $('#number-played').text(data.games.length);
  console.log(data);
};

module.exports = {
  failure,
  success,
  indexGamesSuccess,
};
