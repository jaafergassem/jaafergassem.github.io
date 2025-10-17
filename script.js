// ==========================
// 🌟 Fade-in for Sections
// ==========================
window.addEventListener("scroll", () => {
  document.querySelectorAll(".section").forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
});

// ==========================
// 💻 Background Animation — Matrix + Code Lines
// ==========================
const canvas = document.getElementById("background-animation");
const ctx = canvas.getContext("2d");

// Set full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Code characters
const codeChars = [
  "<div>", "</div>", "<html>", "</html>", "<body>", "</body>",
  "function()", "return;", "import", "const", "AI()", "model.fit()", 
  "while(true)", "if(data)", "010101", "console.log()", "Data()", "lambda", "def()", "class", "end"
];

const fontSize = 18;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

// Draw loop
function draw() {
  // Background fade (creates trailing effect)
  ctx.fillStyle = "rgba(10, 25, 47, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Text style
  ctx.fillStyle = "#00ffff"; // bright cyan
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = codeChars[Math.floor(Math.random() * codeChars.length)];
    const x = i * fontSize;
    const y = drops[i] * fontSize;

    ctx.fillText(text, x, y);

    // Reset to top randomly after falling
    if (y > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i] += 0.9; // speed
  }

  requestAnimationFrame(draw);
}

// Handle resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

draw();
