let counter = 0;

const counterText = document.getElementById("counter");
const increaseButton = document.getElementById("increaseButton");

increaseButton.addEventListener("click", function () {
  counter = counter + 1;
  counterText.textContent = counter;
});
