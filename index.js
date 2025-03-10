let player = 0;
let currScore = 0;
let player1bg = document.querySelectorAll(".bgColor").item(0);
let player2bg = document.querySelectorAll(".bgColor").item(1);
let player_1_score;
let player_2_score;
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
      if (player == 1) {
        player_1_score = Number(
          document.querySelector(`.player-${player} .second`).textContent
        );
        player_2_score = Number(
          document.querySelector(`.player-${player + 1} .second`).textContent
        );

        if (player_1_score < player_2_score) {
          document.getElementById(
            "result"
          ).textContent = `player-${player} won the game`;
          // alert(" player 1 won the game ");
        } else {
          document.getElementById("result").textContent = `player-${
            player + 1
          } won the game`;
          // alert(" player 2 won the game ");
        }
      }

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

document.getElementById("hold-dice").addEventListener("click", (e) => {
  document.querySelector(`.player-${player + 1} .second`).textContent =
    Number(
      document.querySelector(`.player-${player + 1} .second`).textContent
    ) + Number(document.getElementById(`score-${player + 1}`).textContent) || 0;
  if (player == 0) {
    console.log("player1 is holding");
    currScore = 0;
    document.getElementById(`score-${player + 1}`).textContent = 0;
  } else {
    console.log("player2 is holding");
    currScore = 0;
    document.getElementById(`score-${player + 1}`).textContent = 0;
  }
});
