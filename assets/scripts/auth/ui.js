'use strict';

const app = require('../app.js');
const logic = require('../gamelogic/logic.js');

const success = (data) => {
  $('.game-message').text('Success!');
};

const failure = (error) => {
  $('.game-message').text("Sorry, it didn\'t work, try again!");
};

const signInSuccess = function(data) {
  app.user = data.user;
  logic.currentUser = data.user;

  if (logic.currentUser) {
    $('#sign-in').hide();
  }
};

const signOutSuccess = function() {
  app.user = null;
  console.log(app);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
};
