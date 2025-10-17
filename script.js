// 🌟 Fade-in for Sections
window.addEventListener("scroll", () => {
  document.querySelectorAll(".section").forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) section.classList.add("visible");
  });
});

// 💻 Background Animation — Matrix + Code Lines
const canvas = document.getElementById("background-animation");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const codeChars = [
  "<div>", "</div>", "<html>", "import", "lambda", "AI()", "010101", 
  "const", "def()", "return;", "if(data)", "model.fit()", "while(true)"
];
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

function draw() {
  ctx.fillStyle = "rgba(10, 25, 47, 0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00ffff";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = codeChars[Math.floor(Math.random() * codeChars.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
  requestAnimationFrame(draw);
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
draw();
