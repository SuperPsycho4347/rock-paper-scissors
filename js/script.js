function getComputerChoice() {
    const min = Math.ceil(0)
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
let computerChoice = getComputerChoice()
console.log(computerChoice);
