

var gamePattern = [];
var inputNumber = 0;
var gameButtons = ["green","red", "yellow", "blue"];
var levelNumber = 1;

function nextSequence(){
  return Math.floor(Math.random()*4);
}

function playSound(color){
  var sound=new Audio("sounds/"+color+".mp3");
  $("#"+color).addClass("pressed");
  sound.play();
  setTimeout(function(){$("#"+color).removeClass("pressed")}, 250);
}

// game

$(document).on("keypress", startGame);
$(".btn").on("click", buttonClick);

function startGame(){
  inputNumber=0;
  levelNumber=1;
  gamePattern=[];
  //$(".btn").on("click", buttonClick);
  playGame();
}

function buttonClick(){
  var color=$(this).attr("id");
  if(color==gamePattern[inputNumber]){
    playSound(color);
    inputNumber++;
  }else{
    playSound("wrong");
    $("h1").text("Geme over! Press any key to continue.")
    $("body").addClass("game-over");
    //$(".btn").unbind("click");
    setTimeout(function(){$("body").removeClass("game-over")}, 100);
  }
  if(inputNumber==levelNumber){
    levelNumber++;
    inputNumber=0;
    playGame();
  }
}

function playGame(){
    $("#level-title").text("Level "+levelNumber);

    var randomNumber=nextSequence();
    var color = gameButtons[randomNumber];

    gamePattern.push(color);
    setTimeout(function(){playSound(color)},1000);
}
