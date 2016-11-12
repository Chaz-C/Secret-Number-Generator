'use strict';
module.exports = function() {

  var ranNum = 0;
  ranNum = Math.floor(Math.random() * 1000000);

  return function getNum() {

    return ranNum;
  };
};