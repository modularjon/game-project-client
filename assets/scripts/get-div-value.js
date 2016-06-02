'use strict';

const getDivValue = function(data) {
  console.log(data.id);
  console.log(data.firstChild.data);
};

module.exports = getDivValue;
