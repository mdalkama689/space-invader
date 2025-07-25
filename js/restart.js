document.getElementById("startBtn").addEventListener("click", function () {
  GAME_STARTED = true;
  this.style.display = "none"; // hide start button
  reset();
  startGameLoop(); // now begin game loop
});

document.getElementById("restartBtn").addEventListener("click", function () {
  if (hero.dead) {
    this.style.display = "none";
    GAME_STARTED = true;
    hero.dead = false;
    reset();

    playerShots = [];
    enemyShots = [];
    enemies = [];

    loadJSON("enemies.json", function (data) {
      loadEnemy({ x: 50, y: 50 }, data.four);
      loadEnemy({ x: 180, y: 50 }, data.zero);
      loadEnemy({ x: 300, y: 50 }, data.four);
    }, function (xhr) {
      console.error(xhr);
    });

    startGameLoop();
  }
});


document.getElementById("restartBtn").addEventListener("click", function () {
  if (hero.dead) {
    // ✅ Hide restart button
    this.style.display = "none";

    // Reset player
    hero.dead = false;
    hero.x = canvas.width / 2;
    hero.y = canvas.height - 64;

    // Clear shots and enemies
    playerShots = [];
    enemyShots = [];
    enemies = [];

    // Reload enemies
    loadJSON(
      "enemies.json",
      function (data) {
        loadEnemy({ x: 50, y: 50 }, data.four);
        loadEnemy({ x: 180, y: 50 }, data.zero);
        loadEnemy({ x: 300, y: 50 }, data.four);
      },
      function (xhr) {
        console.error(xhr);
      }
    );
  }
});
 