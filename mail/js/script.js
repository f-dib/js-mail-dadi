const mails = ["qualcosa@gmail.com", "qualcosaltro@gmail.com", "ferrari@gmail.com", "hamilton@outlook.it"];
const buttonElement = document.querySelector("#button");
const inputElement = document.querySelector("#floatingInput");

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
            
            console.log("ma bravo")
        
        } else {

            console.log("e tu chi sei")
        
        }
    }

)
