const choices = ["rock", "paper", "scissors"];

function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();

    if (choices.includes(userInput)) {
        return userInput;
    } else if (userInput === "bomb") {
        return "bomb"; // The secret cheat code
    } else {
        console.log("Invalid choice. Please choose 'rock', 'paper', or 'scissors'.");
        return null;
    }
}

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }

    if (userChoice === "bomb") {
        return "You win! (cheat code)";
    }

    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    }

    return "Computer wins!";
}

function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    console.log(`Your choice: ${userChoice}`);
    console.log(`Computer's choice: ${computerChoice}`);
    console.log(result);

    document.getElementById("result").textContent = result;
}

document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));
document.getElementById("cheat").addEventListener("click", () => playGame("bomb"));
