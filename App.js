const p1 = {
  score: 0,
  display: document.querySelector("#p1Display"),
  button: document.querySelector("#p1Button"),
};
const p2 = {
  score: 0,
  display: document.querySelector("#p2Display"),
  button: document.querySelector("#p2Button"),
};
const resetButton = document.querySelector("#reset");
const winningScoreSelet = document.querySelector("#playto");
let winningScore = 3;
let isGameOver = false;

function addScore(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

//Callback has to be function(), cannot call function directly
p1.button.addEventListener("click", function () {
  addScore(p1, p2);
});
p2.button.addEventListener("click", function () {
  addScore(p2, p1);
});

winningScoreSelet.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.display.textContent = 0;
    p.button.disabled = false;
  }
}
//here function is reset, not reset()
resetButton.addEventListener("click", function () {
  reset();
});
