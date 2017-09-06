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
