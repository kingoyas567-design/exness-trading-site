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

const registerBtns = document.querySelectorAll(".reg, .reg-2, .register-btn");
const registerModal = document.getElementById("registerModal");
const closeModal = document.getElementById("closeModal");
const registerForm = document.getElementById("registerForm");

// Show modal on any Register button click
registerBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    registerModal.style.display = "flex";
  });
});

// Close modal
closeModal.addEventListener("click", () => {
  registerModal.style.display = "none";
});

// Save data in localStorage
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  localStorage.setItem("user", JSON.stringify({ username, email, password }));

  alert("Account created successfully!");
  registerModal.style.display = "none";
  registerForm.reset();
});

// Close if clicking outside modal
window.addEventListener("click", (e) => {
  if (e.target === registerModal) {
    registerModal.style.display = "none";
  }
});


// Close if clicking outside modal
window.addEventListener("click", (e) => {
  if (e.target === registerModal) {
    registerModal.style.display = "none";
  }
});

l
// Fetch BTC price from Binance
async function fetchPrice() {
  try {
    let response = await fetch("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT");
    let data = await response.json();
    let price = parseFloat(data.price).toFixed(2);
    document.getElementById("price").innerText = price;

    // Check alert
    if (alertPrice && price >= alertPrice) {
      alert(`🚨 Bitcoin has reached ${alertPrice} USDT!`);
      alertPrice = null; // reset after trigger
    }
  } catch (error) {
    console.error("Error fetching price:", error);
  }
}

// Update price every 5 seconds
setInterval(fetchPrice, 5000);
fetchPrice();

async function fetchRates() {
  try {
    let response = await fetch("https://api.exchangerate.host/latest?base=USD");
    let data = await response.json();

    document.getElementById("usdRate").innerText = "1.00";
    document.getElementById("gbpRate").innerText = data.rates.GBP.toFixed(2);
    document.getElementById("eurRate").innerText = data.rates.EUR.toFixed(2);
    document.getElementById("jpyRate").innerText = data.rates.JPY.toFixed(2);
    document.getElementById("ngnRate").innerText = data.rates.NGN.toFixed(2);
  } catch (error) {
    console.error("Error fetching rates:", error);
  }
}

// Update every 30 seconds
setInterval(fetchRates, 30000);
fetchRates();
document.addEventListener("click", function (e) {
  const toggle = document.getElementById("stocks-toggle");
  const dropdown = document.querySelector(".dropdown");

  // If click happens outside the dropdown, close it
  if (toggle && dropdown && !dropdown.contains(e.target)) {
    toggle.checked = false;
  }
});

