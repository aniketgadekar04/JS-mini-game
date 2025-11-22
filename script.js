let targetColor = "";
let time = 30;
let score = 0;
let timer;
let para = document.getElementById('para')
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

const grid = document.getElementById("grid");
const targetColorDisplay = document.getElementById("target-color");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");

// function for random color

function shuffleArray(colors) {
  for (let i = colors.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [colors[i], colors[j]] = [colors[j], colors[i]];
  }
  return colors;
}

function createGrid() {
  grid.innerHTML = ""; //agar already kuch ho to use khali karo.

  colors = shuffleArray(colors); // array ke andar ke colors ki position change ho isliye.

  console.log(colors);

  targetColor = colors[Math.floor(Math.random() * 16)]; //randomly ek color choose ho isliye isme 0 se 15 ke bich me index ayega aur vo colors[] ke andar store hoga to hame target color milgaya.

  targetColorDisplay.textContent = targetColor;

  colors.forEach((color) => {
    const box = document.createElement("div");
    box.className = "color-box";
    box.style.backgroundColor = color;
    box.addEventListener("click", () => {
      handleClick(color);
    });
    grid.appendChild(box);
  });
}

function handleClick(clickedColor) {
  if (clickedColor === targetColor) {
    score++;
    scoreDisplay.textContent = score;
    createGrid();
  }
}

function startGame() {
  time = 20;
  // let score = 0;

  scoreDisplay.textContent = score;
  timeDisplay.textContent = time;
  createGrid();

  clearInterval(timer);

  timer = setInterval(() => {
    time--;
    timeDisplay.textContent = time;

    if (time === 0) {
      clearInterval(timer);
      // alert("Time's up!! your final score: " + score);
      grid.innerHTML = "";
      para.style.display = "none"
      score = 0;
    }
  }, 1000);
}

// mode

let darkbutton = document.getElementById("dark");
let lightbutton = document.getElementById("light");

lightbutton.addEventListener("click", lightmode);
darkbutton.addEventListener("click", darkmode);

function lightmode() {
  document.body.style.backgroundColor = "#f0f0f0";
  let gc = document.querySelector(".game-container")

  gc.style.backgroundColor = "white"
  gc.style.color = "black"

  document.getElementById('mode').style.boxShadow ="5px 5px 5px black"
}

function darkmode(){
 document.body.style.backgroundColor = "#3333";
  let gc = document.querySelector(".game-container")

  gc.style.backgroundColor = "black"
  gc.style.color = "white"

  document.getElementById('mode').style.boxShadow ="5px 5px 5px white"
}
