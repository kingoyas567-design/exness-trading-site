// ===============================
// 1. Typing Effect for Main Header
// ===============================
const header = document.querySelector(".header-flex h1");
const headerText = "Upgrade the way you trade";
let i = 0;

function typeEffect() {
  if (i < headerText.length) {
    header.innerHTML = headerText.substring(0, i + 1);
    i++;
    setTimeout(typeEffect, 100); // typing speed
  }
}
typeEffect();
// ===============================
// 2. Button Hover Animation
// ===============================
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("mouseover", () => {
    btn.style.transform = "scale(1.1)";
    btn.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
    btn.style.transition = "0.3s";
  });

  btn.addEventListener("mouseout", () => {
    btn.style.transform = "scale(1)";
    btn.style.boxShadow = "none";
  });
});

// ===============================
// 3. Rotating Market News
// ===============================
const newsArray = [
  "📈 Gold prices are up today",
  "⛽ Oil market sees volatility",
  "🚀 Stocks hit record highs",
  "💰 Crypto market remains steady"
];

let index = 0;
const newsHeader = document.querySelector(".second-body h1");

function changeNews() {
  newsHeader.textContent = newsArray[index];
  index = (index + 1) % newsArray.length;
}

setInterval(changeNews, 3000); // change every 3 seconds

// ===============================
// 4. Dark Mode Toggle
// ===============================
// Add a Dark Mode button in your HTML if you want:
// <button id="darkMode">🌙 Dark Mode</button>

const darkModeBtn = document.querySelector("#darkMode");

if (darkModeBtn) {
  darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}