let numberOfSquares = 6;
let colors = [];
let answer;

let squares = document.querySelectorAll(".square")
let colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = answer;
let h1 = document.querySelector("h1")
let reset = document.getElementById("reset")
let message = document.querySelector("#message");
let gameMode = document.querySelectorAll(".mode");


init();

function init() {
  setButtons();
  setSquares();
  resetGame();
}


function changeAllColors(color) {
  for (i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length)
  return colors[random];
}

function randomColors(num) {
  let arr = [];
  for (i = 0; i < num; i++) {
    arr.push(pickRandom());
  }
  return arr
}

function pickRandom() {
  let red = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}


reset.addEventListener("click", function () {
  resetGame();
})




function resetGame() {
  colors = randomColors(numberOfSquares);
  answer = pickColor();
  colorDisplay.textContent = answer;
  reset.textContent = "New Colors"

  for (i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i]
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue"
  message.textContent = "";
}

function setButtons() {
  for (i = 0; i < gameMode.length; i++) {
    gameMode[i].addEventListener("click", function () {
      gameMode[0].classList.remove("selected");
      gameMode[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
      resetGame();
    })
  }
}

function setSquares() {
  for (i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
      let clickedColor = this.style.backgroundColor
      if (clickedColor === answer) {
        message.textContent = "Correct!"
        changeAllColors(clickedColor)
        h1.style.backgroundColor = clickedColor
        reset.textContent = "Play Again?"
      } else {
        this.style.backgroundColor = "#232323";
        message.textContent = "Try Again!"
      }
    })
  }
}