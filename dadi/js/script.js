const buttonElement = document.querySelector("#button");
let humanDice = document.querySelector("#user");
let computerDice = document.querySelector("#computer");
let resultElement = document.querySelector("#result");


buttonElement.addEventListener('click', 
    function() {
        let computerChoice = Math.floor(Math.random() * 6) + 1;
        let humanChoice = Math.floor(Math.random() * 6) + 1;

        computerDice.innerHTML = `${computerChoice}`;
        humanDice.innerHTML = `${humanChoice}`;

        if (humanChoice == computerChoice) {

            resultElement.innerHTML = "Hai pareggiato";
            resultElement.className = " text-warning";

        } else if (humanChoice > computerChoice){
            
            resultElement.innerHTML = "Hai vinto";
            resultElement.className = " text-success-emphasis";

        } else {
            
            resultElement.innerHTML = "Hai perso";
            resultElement.className = " text-danger";

        }
    }
)