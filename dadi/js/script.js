const buttonElement = document.querySelector("#button");
const numberElement = document.querySelector("#inputNumber");


buttonElement.addEventListener('click', 
    function() {
        const computerChoice = Math.floor(Math.random() * 6) + 1;
        const humanChoice = Math.floor(Math.random() * 6) + 1;

        console.log(computerChoice);
        console.log(humanChoice);

        if (humanChoice == computerChoice) {
            console.log("pareggio")
        } else if (humanChoice > computerChoice){
            console.log("hai vinto")
        } else {
            console.log("hai perso")
        }
    }
)