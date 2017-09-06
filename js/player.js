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
