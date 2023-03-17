const screens = document.querySelectorAll(".screen");
const chooseAtributeButtons = document.querySelectorAll(".choose-atribute-btn");
const startButton = document.getElementById("start-btn");
const gameContainer = document.getElementById("game-container");
const timeElement = document.getElementById("time");
const scoreElement = document.getElementById("score");
const message = document.getElementById("message");
const message2 = document.getElementById("message2");
const info = document.getElementById("info");
let promile = 7;
let score = 0;
let selectedAtribute = {};

startButton.addEventListener("click", () => screens[0].classList.add("up"));

const increaseScore = () => {
  score++;
  scoreElement.innerHTML = `Score: ${score}`;
};

const addAtribute = () => {
  setTimeout(createAtribute, Math.random());
};

const catchAtribute = function () {
  increaseScore();
  this.classList.add("caught");
  setTimeout(() => this.remove, 2000);
  addAtribute();
  increasePromile();
};

const getRandomLocation = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;
  return { x, y };
};

const createAtribute = () => {
  const atribute = document.createElement("div");
  atribute.classList.add("atribute");
  const { x, y } = getRandomLocation();
  atribute.style.top = `${y}px`;
  atribute.style.left = `${x}px`;
  atribute.innerHTML = `<img src="${selectedAtribute.src}" 
  alt="${selectedAtribute.alt}" 
  style="transform: rotate(${Math.random() * 360}deg)" />`;
  atribute.addEventListener("click", catchAtribute);
  gameContainer.appendChild(atribute);
};

const increasePromile = () => {
  promile++;
  promile++;
  timeElement.innerHTML = `Promile: ${promile}&#8240;`;
};

const decresePromile = () => {
  promile--;
  timeElement.innerHTML = `Promile: ${promile}&#8240;`;
  if(promile == 0) location.href = 'error.html'; 
  if(promile >= 50) location.href = 'succes.html'; 
  if (promile <= 4) message.classList.add("visible");
  if (promile >= 5) message.classList.remove("visible");

};

const startGame = () => setInterval(decresePromile, 500);




chooseAtributeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const image = button.querySelector("img");
    const src = image.getAttribute("src");
    const alt = image.getAttribute("alt");
    selectedAtribute = { src, alt };
    screens[1].classList.add("up");
    setTimeout(createAtribute, 1000);
    startGame();
  });
});