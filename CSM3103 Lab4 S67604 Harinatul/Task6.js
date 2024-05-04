const container = document.getElementById("container");
const square1 = document.getElementById("square1");
const square2 = document.getElementById("square2");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

let animationId;

function moveSquares() {
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  const squareWidth = square1.clientWidth;
  const squareHeight = square1.clientHeight;

  const newLeft1 = Math.floor(Math.random() * (containerWidth - squareWidth));
  const newTop1 = Math.floor(Math.random() * (containerHeight - squareHeight));

  const newLeft2 = Math.floor(Math.random() * (containerWidth - squareWidth));
  const newTop2 = Math.floor(Math.random() * (containerHeight - squareHeight));

  square1.style.left = `${newLeft1}px`;
  square1.style.top = `${newTop1}px`;

  square2.style.left = `${newLeft2}px`;
  square2.style.top = `${newTop2}px`;

  animationId = requestAnimationFrame(moveSquares);
}

startBtn.addEventListener("click", () => {
  moveSquares();
  startBtn.disabled = true;
  stopBtn.disabled = false;
});

stopBtn.addEventListener("click", () => {
  cancelAnimationFrame(animationId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
});
