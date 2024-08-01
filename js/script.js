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


// Function for getting your choice
function getHumanChoice() {
    let humanChoice = prompt("Enter your choice (Rock, Paper, Scissors):")
    return humanChoice
}

// Loop counter variable
let i = 0

// Variable for scores
let humanScore, computerScore = 0

while(i < 5) {
    // Stores your choice
    let humanChoice = getHumanChoice()

    // Variable for computer's choice
    let computerChoice = getComputerChoice()

    playGame(humanChoice, computerChoice)
    i++   
}

if (humanScore > computerScore) {
    console.log("Congratulations! You're the winner!");
}
else {
    console.log("Welp, you lost!");
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
            console.log(`You picked ${humanChoice}`);
    
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
            console.log(`You picked ${humanChoice}`);
    
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
            console.log(`You picked ${humanChoice}`);
    
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
}