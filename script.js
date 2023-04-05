let score = 0;
let clickers = 1;
let autoClickers = 0;
let menu = false;
let defaultPic = 2;

const scoreElement = document.getElementById("score");
const scoreTextElement = document.getElementById("scoreText");
const clickerElement = document.getElementById("clicker");
const autoClickerElement = document.getElementById("auto-clickers");
const buyElement = document.getElementById("buy");
const buyAutoClickerElement = document.getElementById("buy-auto-clicker");
const nav = document.getElementById("nav");
const root = document.getElementById("root");

function openMenu() {
  if (menu) {
    menu = false;
    nav.style.display = "none";
  } else {
    menu = true;
    nav.style.display = "block";
  }
}

function handleTap() {
  score += clickers;
  scoreTextElement.innerText = `Score: ${score}`;
}

function handleAddStaff() {
  if (score >= 10) {
    clickers++;
    score -= 10;
    clickerElement.innerText = `x${clickers}`;
    scoreTextElement.innerText = `Score: ${score}`;
  }
}

function handleAutoClick() {
  if (score >= 1000) {
    autoClickers++;
    score -= 1000;
    autoClickerElement.innerText = `x${autoClickers}`;

    setInterval(() => {
      score += clickers;
      scoreTextElement.innerText = `Score: ${score}`;
    }, 1000);

    scoreTextElement.innerText = `Score: ${score}`;
  }
}

function handleChangeBackground() {
  if (score >= 10000) {
    score -= 10000;
    if (defaultPic === 1) {
      root.style.backgroundImage = "url('Assets/level1-city.jpg')";
      defaultPic++;
    } else if (defaultPic === 2) {
      root.style.backgroundImage = "url('Assets/level2-city.jpg')";
      defaultPic++;
    } else if (defaultPic === 3) {
      root.style.backgroundImage = "url('Assets/level3-city.jpg')";
      defaultPic = 1;
    }
    scoreTextElement.innerText = `Score: ${score}`;
  }
}
