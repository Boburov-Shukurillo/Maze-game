const playAgain = document.querySelector(".playAgain");
var board = {
  width: 800,
  height: 650,
};
var player = {
  x_position: 500,
  y_position: 400,
  width: 50,
  height: 50,
};
var walls = [
  { x_position: 200, y_position: 150, width: 50, height: 250 },
  { x_position: 150, y_position: 150, width: 100, height: 50 },
  { x_position: 200, y_position: 200, width: 250, height: 50 },
  { x_position: 300, y_position: 300, width: 50, height: 250 },
  { x_position: 300, y_position: 350, width: 150, height: 50 },
  { x_position: 500, y_position: 200, width: 50, height: 200 },
  { x_position: 300, y_position: 150, width: 50, height: 100 },
  { x_position: 400, y_position: 200, width: 50, height: 100 },
  { x_position: 500, y_position: 200, width: 250, height: 50 },
  { x_position: 600, y_position: 150, width: 50, height: 150 },
  { x_position: 50, y_position: 50, width: 250, height: 50 },
  { x_position: 400, y_position: 50, width: 300, height: 50 },
  { x_position: 400, y_position: 50, width: 50, height: 100 },
  { x_position: 50, y_position: 50, width: 50, height: 300 },
  { x_position: 50, y_position: 250, width: 100, height: 50 },
  { x_position: 50, y_position: 450, width: 200, height: 50 },
  { x_position: 50, y_position: 450, width: 50, height: 200 },
  { x_position: 0, y_position: 550, width: 100, height: 50 },
  { x_position: 150, y_position: 550, width: 100, height: 50 },
  { x_position: 100, y_position: 400, width: 50, height: 100 },
  { x_position: 400, y_position: 450, width: 50, height: 200 },
  { x_position: 400, y_position: 550, width: 150, height: 50 },
  { x_position: 500, y_position: 450, width: 250, height: 50 },
  { x_position: 250, y_position: 0, width: 250, height: 50 },
  { x_position: 700, y_position: 550, width: 50, height: 100 },
  { x_position: 700, y_position: 300, width: 50, height: 150 },
  { x_position: 500, y_position: 350, width: 150, height: 50 },
  { x_position: 600, y_position: 550, width: 150, height: 50 },
  { x_position: 750, y_position: 350, width: 50, height: 50 },
  { x_position: 450, y_position: 350, width: 50, height: 50 },
  { x_position: 300, y_position: board.height - 100, width: 50, height: 100 },
];

var boardRef = document.getElementById("board");
var playerRef = document.getElementById("player");

//Create Walls
walls.forEach(function (item) {
  var div = document.createElement("div"); //3
  div.style.left = item.x_position + "px";
  div.style.top = item.y_position + "px";
  div.style.width = item.width + "px";
  div.style.height = item.height + "px";
  div.style.position = "absolute";
  div.classList.add("wall");
  boardRef.appendChild(div);
});

boardRef.style.width = board.width + "px";
boardRef.style.height = board.height + "px";

playerRef.style.left = player.x_position + "px";
playerRef.style.top = player.y_position + "px";
playerRef.style.width = player.width + "px";
playerRef.style.height = player.height + "px";

playAgain.addEventListener("click", () => {
  player.x_position = 0;
  player.y_position = 0;
  playerRef.style.left = player.x_position + "px";
  playerRef.style.top = player.y_position + "px";
  playAgain.parentElement.style.display = "none";
});

document.onkeydown = function (event) {
  if (
    event.key == "ArrowRight" &&
    player.x_position < board.width - player.width
  ) {
    player.x_position += 50;
    if (checkMove()) {
      playerRef.style.left = player.x_position + "px";
    } else {
      player.x_position -= 50;
    }
  }
  if (event.key == "ArrowLeft" && player.x_position > 0) {
    player.x_position -= 50;
    if (checkMove()) {
      playerRef.style.left = player.x_position + "px";
    } else {
      player.x_position += 50;
    }
  }
  if (
    event.key == "ArrowDown" &&
    player.y_position < board.height - player.height
  ) {
    player.y_position += 50;
    if (checkMove()) {
      playerRef.style.top = player.y_position + "px";
    } else {
      player.y_position -= 50;
    }
  }
  if (player.x_position === 550 && player.y_position == 600) {
    playAgain.parentElement.style.display = "flex";
  }
  if (event.key == "ArrowUp" && player.y_position > 0) {
    player.y_position -= 50;
    if (checkMove()) {
      playerRef.style.top = player.y_position + "px";
    } else {
      player.y_position += 50;
    }
  }
};

function checkMove() {
  var i,
    len = walls.length,
    resuld;
  for (i = 0; i < len; i++) {
    if (!isCollide(player, walls[i])) {
      resuld = false;
      break;
    } else {
      resuld = true;
    }
  }
  return resuld;
}

function isCollide(a, b) {
  return (
    a.y_position + a.width <= b.y_position ||
    a.y_position >= b.y_position + b.height ||
    a.x_position + a.width <= b.x_position ||
    a.x_position >= b.x_position + b.width
  );
}
