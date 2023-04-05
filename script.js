let score = 0;
let clickers = 1;
let autoClickers = 0;

const scoreElement = document.getElementById("score");
const scoreTextElement = document.getElementById("scoreText");
const clickerElement = document.getElementById("clicker");
const autoClickerElement = document.getElementById("auto-clickers");
const buyElement = document.getElementById("buy");
const buyAutoClickerElement = document.getElementById("buy-auto-clicker");

scoreElement.addEventListener("click", () => {
  score += clickers;
  scoreTextElement.innerText = `Score: ${score}`;
});

buyElement.addEventListener("click", () => {
  if (score >= 10) {
    clickers++;
    score -= 10;
    clickerElement.innerText = `x${clickers}`;
    scoreTextElement.innerText = `Score: ${score}`;
  }
});

buyAutoClickerElement.addEventListener("click", () => {
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
});
