(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Dice = function(){};

Dice.prototype.roll = (function(){
  var randomNum = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  return randomNum;
});

exports.diceModule = Dice;

},{}],2:[function(require,module,exports){
var Player = require('./../js/player.js').playerModule;

var Manager = function(playerOne, playerTwo, currentPlayer){
this.playerOne = playerOne;
this.playerTwo = playerTwo;
this.currentPlayer =  currentPlayer;
};

Manager.prototype.switchPlayers = function(){
  if (this.currentPlayer ===1)
  {
    this.currentPlayer = 2;
  } else {
    this.currentPlayer=1;
  }
};

Manager.prototype.checkScore = function(){

  if (this.playerOne.totalScore >= 100)
  {
    this.playerOne.totalScore = 0;
    this.playerTwo.totalScore = 0;
    this.playerOne.score = 0;
    this.playerTwo.score = 0;
    return "p1Win";
  } else if (this.playerTwo.totalScore >=100){
    this.playerOne.totalScore = 0;
    this.playerTwo.totalScore = 0;
    this.playerOne.score = 0;
    this.playerTwo.score = 0;
    return "p2Win";
  }
  else{
    return "";
  }


}

exports.managerModule = Manager;

},{"./../js/player.js":3}],3:[function(require,module,exports){
var Dice = require('./../js/dice.js').diceModule;
var Manager = require('./../js/manager.js').managerModule;

var Player = function(name, score, totalScore){
 this.score = score;
 this.name = name;
 this.totalScore = totalScore;
};

Player.prototype.rollDice = function(){
  var newDice = new Dice();
  var rollVal = newDice.roll();

  if (rollVal===1)
  {
    this.score = 0;
  } else {
    this.score += rollVal;
  }

  return rollVal;
};

Player.prototype.hold = function(){
  this.totalScore+=this.score;
  this.score = 0;
}

Player.prototype.setScoreToZero = function(){
  this.score = 0;
};


exports.playerModule = Player;

},{"./../js/dice.js":1,"./../js/manager.js":2}],4:[function(require,module,exports){
var Player = require('./../js/player.js').playerModule;
var Manager = require('./../js/manager.js').managerModule;

$(function(){

  var playerOne = new Player("Jonathan", 0, 0);
  var playerTwo = new Player("Briana", 0, 0);

  var manager = new Manager(playerOne,playerTwo,1);

  $('#p2Btns').hide();

      $('#p2TotalScore').text(playerTwo.totalScore);
          $('#p1TotalScore').text(playerTwo.totalScore);
              $('#p1Score').text(playerOne.score);
                  $('#p2Score').text(playerOne.score);


  $('#p1Name').text(playerOne.name);
  $('#p2Name').text(playerTwo.name);

  $('#currentPlayer').text(playerOne.name);

  $('#p1Dice').click(function(){
    var rollVal = playerOne.rollDice();
    $('#p1Rolls').prepend('<p>'+rollVal+'</p>');
    if (rollVal === 1)
    {
      manager.switchPlayers();
      $('#p1Btns').hide();
      $('#p2Btns').show();

      $('#currentPlayer').text(playerTwo.name);
    }
    $('#p1Score').text(playerOne.score);
  });

  $('#p2Dice').click(function(){
    var rollVal = playerTwo.rollDice();
    $('#p2Rolls').prepend('<p>'+rollVal+'</p>');

    if (rollVal === 1)
    {
      manager.switchPlayers();
      $('#p2Btns').hide();
      $('#p1Btns').show();

      $('#currentPlayer').text(playerOne.name);
    }
    $('#p2Score').text(playerTwo.score);
  });

  $('#p1Hold').click(function(){
    playerOne.hold();

    manager.switchPlayers();
    $('#p1Btns').hide();
    $('#p2Btns').show();

    $('#currentPlayer').text(playerTwo.name);

    var checkScore = manager.checkScore();
    if (checkScore === "p1Win")
    {
      alert("Player One Win!");
    } else if (checkScore === "p2Win"){
      alert("Player Two Win!");
    }

    $('#p1TotalScore').text(playerOne.totalScore);
    $('#p1Score').text(playerOne.score);
  });

  $('#p2Hold').click(function(){
    playerTwo.hold();

    manager.switchPlayers();
    $('#p2Btns').hide();
    $('#p1Btns').show();
    $('#currentPlayer').text(playerOne.name);

    var checkScore = manager.checkScore();
    if (checkScore === "p1Win")
    {
      alert("Player One Win!");
    } else if (checkScore === "p2Win"){
      alert("Player Two Win!");
    }

    $('#p2TotalScore').text(playerTwo.totalScore);
    $('#p2Score').text(playerTwo.score);
  });



});

},{"./../js/manager.js":2,"./../js/player.js":3}]},{},[4]);
