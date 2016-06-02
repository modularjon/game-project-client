'use strict';

let currentGame = {
  "game": {
    "id": null,
    "cells": ["","","","","","","","",""],
    "over": false,
    "player_x": {
      "id": null,
      "email": ""
      },
    "player_o": {
      "id": null,
      "email": ""
    }
  }
};

let currentUser = {
  "user": {
    "id": null,
    "email": ""
  }
};

let playerX = 'x';

let playerO = 'o';

let playCount = 0;

let gameOver = false;

module.exports = {
  currentGame,
  currentUser,
  playerX,
  playerO,
  playCount,
  gameOver,
};
