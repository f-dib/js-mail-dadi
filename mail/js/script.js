const mails = ["qualcosa@gmail.com", "qualcosaltro@gmail.com", "ferrari@gmail.com", "hamilton@outlook.it"];
const buttonElement = document.querySelector("#button");
const inputElement = document.querySelector("#floatingInput");
const resultElement = document.querySelector("#result");

buttonElement.addEventListener('click', 
    
    function() {

        const emailElement = inputElement.value;

        let confirm = false;

        for (let i = 0; i < mails.length; i++) {

            console.log('test');
            if (emailElement == mails[i]) {
                
                confirm = true;
            
            } 
        
        }

        if (confirm === true) {
            
            resultElement.innerHTML = `La tua mail è presente nel nostro registro`
            resultElement.style.color = "red";

        } else {

            resultElement.innerHTML = `La tua mail non è presente nel nostro registro`
            resultElement.style.color = "green";

        }
    }

)
