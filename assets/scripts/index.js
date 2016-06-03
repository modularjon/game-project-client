'use strict';

const authEvents = require('./auth/events.js');
const playEvents = require('./gamelogic/events.js');

// On document ready
$(() => {
  authEvents.addHandlers();
  playEvents.addHandlers();
});
