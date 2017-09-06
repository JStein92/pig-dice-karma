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
