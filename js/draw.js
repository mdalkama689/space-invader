// Create the canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var SIZE = 32;
var vy = 0;

// Draw everything
var render = function () {
  if (bgReady) {
    ctx.drawImage(bgImage, 0, vy);
    ctx.drawImage(bgImage, 0, bgImage.height - Math.abs(vy));
    if (Math.abs(vy) > bgImage.height) vy = 0;
    vy -= 2;
  }

  // Show start screen if game hasn't started
  if (!GAME_STARTED) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.font = "32px Helvetica";
    ctx.textAlign = "center";
    ctx.fillText("Click 'Start Game' to Play", canvas.width / 2, canvas.height / 2);

    const btn = document.getElementById("restartBtn");
    if (btn) btn.style.display = "none"; // hide restart button on start screen
    return;
  }

  if (heroReady && !hero.dead) {
    ctx.drawImage(heroImage, hero.x, hero.y, SIZE, SIZE);
  }

  for (var i = 0; i < enemies.length; i++) {
    var enemy = enemies[i];
    ctx.drawImage(monsterImage, enemy.x, enemy.y, SIZE, SIZE);
  }

  for (var i = 0; i < enemyShots.length; i++) {
    var shot = enemyShots[i];
    ctx.drawImage(shotRedImage, shot.x, shot.y, SIZE, SIZE);
  }

  for (var i = 0; i < playerShots.length; i++) {
    var shot = playerShots[i];
    ctx.drawImage(shotImage, shot.x, shot.y, SIZE, SIZE);
  }

  if (hero.dead) {
    ctx.fillStyle = "rgb(250, 0, 0)";
    ctx.font = "48px Helvetica";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2);

    const btn = document.getElementById("restartBtn");
    if (btn) btn.style.display = "block"; // show restart button on game over
  } else {
    const btn = document.getElementById("restartBtn");
    if (btn) btn.style.display = "none"; // hide if not dead
  }
};
