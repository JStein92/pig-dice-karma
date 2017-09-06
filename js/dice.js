var Dice = function(){};

Dice.prototype.roll = (function(){
  var randomNum = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  return randomNum;
});

exports.diceModule = Dice;
