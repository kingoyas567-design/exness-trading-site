const choices = ["rock", "paper", "scissors"]
const playerDisplay = document.getElementById("playerDisplay")
const computerDisplayDisplay = document.getElementById("computerDisplay")
const resultDisplay = document.getElementById("resultDisplay")

function playGame(playerChoice) {

    const computerDisplay = choices[Math.floor(Math.random() * 3)];

    if (computerDisplay === playerDisplay) {
        result = "ITS A TIE !!🤝 ";
    }
    else {
        switch (playerDisplay) {
            case "rock":

                result = (computerDisplay === "scissors") ? "YOU WIN !! 🏆" : "YOU LOOSE !! 🤣"
                break;

            case "rock":

                result = (computerDisplay === "rock") ? "YOU WIN !! 🏆" : "YOU LOOSE !! 🤣"
                break;

            case "rock":

                result = (computerDisplay === "paper") ? "YOU WIN !! 🏆" : "YOU LOOSE !! 🤣"
                break;


        }
    }
    playerDisplay.textContent = 'PLAYER:  (playerDisplay)';
    computerDisplay.textContent = 'COMPUTER: $(computerDisplay)';
    resultDisplay.textContent = result;
}
console.log