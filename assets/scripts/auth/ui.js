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

  console.log(logic.currentUser);
  if (logic.currentUser) {
    $('#sign-up').hide();
    $('#sign-in').hide();
    $('#sign-out').show();
    $('#change-password').show();
    $('#new-game').show();
    $('#index-games').show();
    $('#find-game').show();
    $('#signed-in').text('Signed in as: ' + logic.currentUser.email);
    $('.game-message').text('Click to start! x goes first!');
  }
};

const signOutSuccess = function() {
  app.user = null;
  logic.currentUser = null;

  if (!logic.currentUser) {
    $('#sign-up').show();
    $('#sign-in').show();
    $('#sign-out').hide();
    $('#change-password').hide();
    $('#new-game').hide();
    $('#index-games').hide();
    $('#find-game').hide();
    $('#signed-in').text('');
    $('.game-message').text('Sign in to start!');
  }
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
};
