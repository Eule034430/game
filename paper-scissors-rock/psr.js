console.log("Connected")

let chosen
function choosePaper() {
  chosen = "paper"
  showButton()
}
function chooseRock() {
  chosen = "rock"
  showButton()
}
function chooseScissors() {
  chosen = "scissors"
  showButton()
}

function showButton() {
  if (chosen) {
    document.getElementById("begin").style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("begin").style.display = "none";
});

