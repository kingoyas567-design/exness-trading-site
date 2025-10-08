let countdownInterval;

function startCountdown() {
  clearInterval(countdownInterval);

  const timeInput = document.getElementById("timeInput").value;
  let timeLeft = parseInt(timeInput);

  const countdownElement = document.getElementById("countdown");

  countdownElement.textContent = timeLeft;

  countdownInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      countdownElement.textContent = "Countdown Completed!";
      return;
    }

    countdownElement.textContent = timeLeft;

    timeLeft--;
  }, 5000);
}
