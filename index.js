let player = 0;
document.querySelectorAll(".bgColor").item(player).classList.toggle("bgColor");

document.getElementById("clicked-img").addEventListener("click", (e) => {
  let num = Math.trunc(Math.random() * 6) + 1;
  e.target.src = `./images/img-${num}.png`;
  console.log(e.target.src );
});
