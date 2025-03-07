let player = 0;
let currScore = 0;
let player1bg = document.querySelectorAll(".bgColor").item(0);
let player2bg = document.querySelectorAll(".bgColor").item(1);

player1bg.classList.toggle("bgColor");


document.getElementById("roll-dice").addEventListener("click", (e) => {
  let num = Number(Math.trunc(Math.random() * 6) + 1);
  currScore += num;

  if (currScore >= 100) {
    document.getElementById(`score-${player + 1}`).textContent = currScore;

    document.getElementById("result").textContent = `player-${
      player + 1
    } won the game`;
  } else {
    if (num == 1) {
      player = player == 0 ? 1 : 0;
      currScore = 0;
      player1bg.classList.toggle("bgColor");
      player2bg.classList.toggle("bgColor");
    } else {
      document.getElementById("clicked-img").src = `./images/img-${num}.png`;
      document.getElementById(`score-${player + 1}`).textContent = currScore;
    }
  }
});

document.getElementById("new-game").addEventListener("click", (e) => {
  player = 0;
  currScore = 0;
  document.getElementById(`score-${player + 1}`).textContent = currScore;
  document.getElementById(`score-${player + 2}`).textContent = currScore;
  document.getElementById("result").textContent = "";
});
