let targetColor = "";
let time = 30;
let score = 0;
let timer;
let colors = [
  "red",
  "orange",
  "blue",
  "green",
  "black",
  "gray",
  "hotpink",
  "purple",
  "white",
  "yellow",
  "lightgreen",
  "maroon",
  "khaki",
  "brown",
  "navy",
  "indigo",
];

const grid = document.getElementById("grid")
const targetColorDisplay = document.getElementById('target-color')
const scoreDisplay = document.getElementById('score')
const timeDisplay = document.getElementById('time')

// function for random color



function startGame() {
  let time = 30;
  let score = 0;

  scoreDisplay.textContent = score
  timeDisplay.textContent = time
  createGrid()

  
}
