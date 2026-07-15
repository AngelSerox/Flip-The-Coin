const button = document.querySelector("button");
const resultText = document.querySelector("#result-text");
const coin = document.querySelector("#img-coin");

button.addEventListener("click", () => {
    const result = Math.random() < 0.5;

    resultText.textContent = result ? "Heads" : "Tails";
    coin.src = result ? "heads.svg" : "tails.svg";
});