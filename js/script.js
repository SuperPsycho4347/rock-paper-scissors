// Gets computer choice
function getComputerChoice() {
    // rounds up the arguement added
    const min = Math.ceil(0)
    // rounds down the arguement added
    const max = Math.floor(3)
    let computedChoice = Math.floor(Math.random() * (max - min) + min)
    if (computedChoice === 0) {
        return "Rock"
    }
    else if (computedChoice === 1) {
        return "Paper"
    }
    else if (computedChoice === 2) {
        return "Scissors"
    }
}

// Variable for buttons
const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");
const btnContainer = document.getElementById("btns")

// Loop counter variable
let i = 0

// Variable for scores
let humanScore = 0, computerScore = 0
const gameScore = document.querySelector(".score-para");

// Variable for round count
let roundCount = 0;

// Variable for computer & human choice
let computerChoice = ""
let humanChoice
const gameOutcome = document.querySelector(".outcome")

// Event listener for container
btnContainer.addEventListener("click", (event) => {
    let target = event.target;

    switch(target.id) {
        case "rock":
            console.log("Rock was clicked.")
            humanChoice = "Rock"
            computerChoice = getComputerChoice();
            playGame(humanChoice, computerChoice)
            break;
        case "paper":
            console.log("Paper was clicked.")
            humanChoice = "Paper";
            computerChoice = getComputerChoice();
            playGame(humanChoice, computerChoice)
            break;
        case "scissors":
            console.log("Scissors was clciked.")
            computerChoice = getComputerChoice();
            humanChoice = "Scissors";
            playGame(humanChoice, computerChoice)
            break;
    }
});

function checkScore() {
    if (humanScore > computerScore) {
        console.log("Congratulations! You're the winner!");
        alert("Congrats, you won.")
    }
    else {
        console.log("Welp, you lost!");
        alert("Womp, womp! You lost.")
    }
}

function playGame(humanChoice, computerChoice) {
        
    function playRound(humanChoice, computerChoice) {
        let gameChecker
        // Checks if parameters are valid
        if(humanChoice.localeCompare("Rock", 'en', { sensitivity: 'base' }) === 0 || humanChoice.localeCompare("Paper", 'en', { sensitivity: 'base' }) === 0 || humanChoice.localeCompare("Scissors", 'en', { sensitivity: 'base' }) === 0 ) {
            gameChecker = 0
        }
        else {
            gameChecker = 1
        }
        
        // Actual game logic
    
        // If rock is picked
        if (humanChoice.localeCompare("Rock", 'en', { sensitivity: 'base' }) === 0 ) {
            // console.log(`You picked ${humanChoice}`);
            gameOutcome.textContent = `You picked ${humanChoice}`
    
            if (computerChoice === "Rock") {
                console.log("Tied!");
            }
            else if (computerChoice === "Paper") {
                console.log("You lose!");
                computerScore++
            }
            else if (computerChoice === "Scissors") {
                console.log("You win!");
                humanScore++
            }
        }
        // If paper is picked 
        else if (humanChoice.localeCompare("Paper", 'en', { sensitivity: 'base' }) === 0) {
            // console.log(`You picked ${humanChoice}`);
            gameOutcome.textContent = `You picked ${humanChoice}`
    
            if (computerChoice === "Rock") {
                console.log("You win!")
                humanScore++
            }
            else if (computerChoice === "Paper") {
                console.log("Tied!");
            }
            else if (computerChoice === "Scissors") {
                console.log("You lose!");
                computerScore++
            }
        }
        // If scissors is picked
        else if (humanChoice.localeCompare("Scissors", 'en', { sensitivity: 'base' }) === 0) {
            // console.log(`You picked ${humanChoice}`);
            gameOutcome.textContent = `You picked ${humanChoice}`
    
            if (computerChoice === "Rock") {
                console.log("You lose!");
                computerScore++
            }
            else if (computerChoice === "Paper") {
                console.log("You win!");
                humanScore++
            }
            else if (computerChoice === "Scissors") {
                console.log("Tied!");
            }
        }
    }

    playRound(humanChoice, computerChoice)
    roundCount = roundCount + 1;
    gameScore.textContent = `Your score: ${humanScore}`
    
    if(roundCount == 5) {
        checkScore();
    }
}