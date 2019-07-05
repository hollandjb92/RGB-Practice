let colors = randomColors(6);


let squares = document.querySelectorAll(".square")
let answer = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = answer;
let h1 = document.querySelector("h1")
let reset = document.getElementById("reset")

let message = document.querySelector("#message");

for (i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i]

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
  colors = randomColors(6);
  answer = pickColor();
  colorDisplay.textContent = answer


  for (i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i]
  }

  h1.style.backgroundColor = "#232323"
})