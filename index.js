let colors = ["rgb(255, 0, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 0, 255)",
  "rgb(255, 255, 0)",
  "rgb(255, 0, 255)",
  "rgb(0, 255, 255)"
];


let squares = document.querySelectorAll(".square")
let answer = colors[3];
let colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = answer;

for (i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i]

  squares[i].addEventListener("click", function () {
    let clickedColor = this.style.backgroundColor

    if (clickedColor === answer) {
      alert("correct")
    } else {
      alert("WRONG")
    }
  })
}