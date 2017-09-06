var Dice = require('./../js/dice.js').diceModule;
var Player = require('./../js/player.js').playerModule;
var Manager = require('./../js/manager.js').managerModule;

describe('player score add', function(){

  it ('should add each dice roll to player score', function(){
    var newPlayer = new Player("Jonathan", -1);

    newPlayer.rollDice();
    var playerScore = newPlayer.score;

    expect(playerScore).toBeLessThan(7);
    expect(playerScore).not.toBeLessThan(0);

  });

  it('should set player score to zero when player rolls a one', function(){
    var newPlayer = new Player("Jonathan", 0, 0);

    var rollVal = newPlayer.rollDice();
    var playerScore = newPlayer.score;


    if (rollVal === 1)
    {
      expect(playerScore).toEqual(0);
    }
    else {
      expect(playerScore).toBeLessThan(7);
      expect(playerScore).not.toBeLessThan(1);
    }
  });

  it ('should change current players', function(){
    var playerOne = new Player("Jonathan", 0, 0);
    var playerTwo = new Player("Briana", 0, 0);

    var newManager = new Manager(playerOne,playerTwo,1);
    newManager.switchPlayers();
    var currentPlayer = newManager.currentPlayer;
    expect(currentPlayer).toEqual(2);
  });

  it ('should declare a winner when the current player reaches 100 or above', function(){
    var playerOne = new Player("Jonathan", 0, 0);
    var playerTwo = new Player("Briana", 0, 0);

    var newManager = new Manager(playerOne,playerTwo,1);

    while(playerOne.totalScore<100 && playerTwo.totalScore<100){
      playerOne.rollDice();
      playerOne.hold();
      playerTwo.rollDice();
      playerTwo.hold();
    }

    if (playerOne.totalScore >= 100)
    {
      console.log("player ONE wins");
      expect(playerOne.totalScore).not.toBeLessThan(99);
    }
    else if (playerTwo.totalScore >= 100)
    {
      console.log("player TWO wins");
      expect(playerTwo.totalScore).not.toBeLessThan(99);
    }
  });
});
