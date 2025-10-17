// Fade-in for sections
window.addEventListener("scroll", () => {
  document.querySelectorAll(".section").forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) section.classList.add("visible");
  });
});

// Background typing effect
const codeLines = [
  "import torch",
  "from sklearn.ensemble import RandomForestRegressor",
  "model.fit(X_train, y_train)",
  "def predict(x): return model.predict(x)",
  "class DataPipeline:",
  "lambda x: x**2 + 3",
  "for epoch in range(100): train(model)",
  "AI = True; print('Smart System Ready')"
];

const bg = document.getElementById("background-code");

let lineIndex = 0;
let charIndex = 0;
let currentLine = "";

function typeEffect() {
  if (charIndex < codeLines[lineIndex].length) {
    currentLine += codeLines[lineIndex][charIndex];
    bg.textContent = (bg.textContent + currentLine + "\n").slice(-1500);
    charIndex++;
  } else {
    lineIndex = (lineIndex + 1) % codeLines.length;
    currentLine = "";
    charIndex = 0;
  }
  setTimeout(typeEffect, 100);
}

typeEffect();
