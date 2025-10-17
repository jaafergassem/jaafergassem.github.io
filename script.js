// Fade-in for sections
window.addEventListener('scroll', () => {
  document.querySelectorAll('.section').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
});

// Animated background (particles)
const canvas = document.getElementById('background-animation');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 1.8 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }
  draw() {
    ctx.fillStyle = 'rgba(0,188,212,0.4)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function init() {
  particles = [];
  for (let i = 0; i < 180; i++) particles.push(new Particle());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

init();
animate();


// ==========================
// 🔹 Fade-in for Sections
// ==========================
window.addEventListener('scroll', () => {
  document.querySelectorAll('.section').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
});

// ==========================
// 🔹 Background Animation: Code Rain + Binary Stream
// ==========================
const canvas = document.getElementById('background-animation');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Code symbols (HTML-like)
const codeChars = [
  "<div>", "</div>", "<html>", "</html>", "<body>", "</body>", 
  "if()", "for()", "while()", "def()", "print()", "return;", 
  "import", "class", "const", "let", "function", "data()", "AI()", "model.fit()", "010101"
];
const fontSize = 16;
const columns = canvas.width / fontSize;

// Initialize drops (one per column)
let drops = [];
for (let x = 0; x < columns; x++) drops[x] = Math.random() * canvas.height;

// Main animation loop
function draw() {
  // Semi-transparent black overlay to fade trails
  ctx.fillStyle = "rgba(10, 25, 47, 0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Style of code text
  ctx.fillStyle = "#00bcd4"; // cyan text
  ctx.font = fontSize + "px monospace";

  // Draw random code strings in columns
  for (let i = 0; i < drops.length; i++) {
    const text = codeChars[Math.floor(Math.random() * codeChars.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    // Reset drop randomly after it goes off screen
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
  requestAnimationFrame(draw);
}

draw();

// Handle window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

