var Dice = require('./../js/dice.js').diceModule;

describe('Dice "roll" method', function(){
  it ('should return a number between and including 1 and 6', function(){
    var newDice = new Dice();
    var rollVal = newDice.roll();
    expect(rollVal).toBeLessThan(7);
    expect(rollVal).not.toBeLessThan(0);

  });
});
