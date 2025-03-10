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
  // let play=player==0?1:2
  // console.log(
  //   Number(document.getElementById(`score-${play}`).textContent),
  //   " is the first ",
  //   Number(document.getElementById(`score-${play}`).textContent),
  //   " is the second y"
  // );
  // if (player == 1) {
  //   // if (
  //   //   Number(document.getElementById(`score-${player + 1}`).textContent) >
  //   //   Number(document.getElementById(`score-${player}`).textContent)
  //   // ) {
  //   //   document.getElementById("result").textContent = `player-${
  //   //     player + 1
  //   //   } won the game`;
  //   //   console.log(" came inside the if condition now ");
  //   //   return;
  //   // }
  // }

  if (
    Number(
      document.querySelector(`.player-${player + 1} .second`).textContent
    ) >= 100
  ) {
    document.getElementById(`score-${player + 1}`).textContent = currScore;
    document.getElementById("result").textContent = `player-${
      player + 1
    } won the game`;
    return;
  } else {
    if (num == 1) {
      // if (player == 1) {
      //   player_1_score = Number(
      //     document.querySelector(`.player-${player} .second`).textContent
      //   );
      //   player_2_score = Number(
      //     document.querySelector(`.player-${player + 1} .second`).textContent
      //   );

      //   if (player_1_score < player_2_score) {
      //     document.getElementById(
      //       "result"
      //     ).textContent = `player-${player} won the game`;
      //     // alert(" player 1 won the game ");
      //   } else {
      //     document.getElementById("result").textContent = `player-${
      //       player + 1
      //     } won the game`;
      //     // alert(" player 2 won the game ");
      //   }
      // }

      currScore = 0;
      document.getElementById(`score-${player + 1}`).textContent = currScore;
      player = player == 0 ? 1 : 0;

      player1bg.classList.toggle("bgColor");
      player2bg.classList.toggle("bgColor");
    } else {
      document.getElementById("clicked-img").src = `./images/img-${num}.png`;
      document.getElementById(`score-${player + 1}`).textContent = currScore;
    }
  }
});

// document.getElementById("new-game").addEventListener("click", (e) => {
//   player = 0;
//   currScore = 0;
//   document.getElementById(`score-${player + 1}`).textContent = currScore;
//   document.getElementById(`score-${player + 2}`).textContent = currScore;
//   document.getElementById("result").textContent = "";

// });

document.getElementById("new-game").addEventListener("click", (e) => {
  console.log(player, " is the player ");
  if (player == 1) {
    console.log(" is the player one man ");
    player1bg.classList.add("bgColor");
    player2bg.classList.remove("bgColor");
  }
  player = 0;
  currScore = 0;

  // Reset displayed scores
  document.getElementById(`score-1`).textContent = 0;
  document.getElementById(`score-2`).textContent = 0;

  // Reset total scores
  document.querySelector(`.player-1 .second`).textContent = 0;
  document.querySelector(`.player-2 .second`).textContent = 0;

  document.getElementById("result").textContent = "";

  // Reset backgrounds
});

document.getElementById("hold-dice").addEventListener("click", (e) => {
  let totalScoreElem = document.querySelector(`.player-${player + 1} .second`);
  let currentScoreElem = document.getElementById(`score-${player + 1}`);

  totalScoreElem.textContent =
    Number(totalScoreElem.textContent) + Number(currentScoreElem.textContent);
  currScore = 0;
  currentScoreElem.textContent = 0;

  if (
    Number(
      document.querySelector(`.player-${player + 1} .second`).textContent
    ) >= 100
  ) {
    document.getElementById(`score-${player + 1}`).textContent = currScore;

    document.getElementById("result").textContent = `player-${
      player + 1
    } won the game`;

    setTimeout(() => {
      document.getElementById("new-game").click();
    }, 3000);
    // return;
  }
  // Switch turns
  player1bg.classList.toggle("bgColor");
  player2bg.classList.toggle("bgColor");

  player = player == 0 ? 1 : 0;
});
