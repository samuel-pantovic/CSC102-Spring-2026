
function playDiceGame(){
            // variable to hold our first roll of the die
            let roll1 = getRandomNumber();

            console.log("roll1 =" , roll1);

              // variable to hold our second roll of the die
            let roll2 = getRandomNumber();

            console.log("roll2 =" + roll2);

            // variable to hold the sum of our role
            let rollSum = roll1 + roll2;

            console.log("rollSum=" + rollSum);

            // test for a win - duplicate even numbers = 2, 2 or 4, 4 or 6, 6
            // percent is mudulus - the reslult when using modulus is the remainder 
            // if you divide a number by 2 and there is no remainder, the number is even 
            if (roll1 == roll2 && roll1 % 2 == 0){
                 // update the message div with the good news that the round was a win
                document.getElementById("divMessage").textContent = "You Win!";
            }
            // if the user rolls a 7 or 11, they lost 
            else if(rollSum == 7 || rollSum == 11){
                //update the message div with the good news that the round was lost
                document.getElementById("divMessage").textContent = "sorry, you lose!";
            }
            // else is the catch all - if any other combination of dice roll happened,
            // it was a tie
            else{
                // update the message dv with the good news that the round was a tie
                document.getElementById("divMessage").textContent = "you toed (pushed)!";
            }

            document.getElementById("divRoll1").textContent = "Dice roll 1: " + roll1;
            document.getElementById("divRoll2").textContent = "Dice roll 2: " + roll2;
            document.getElementById("divSum").textContent = "sum=" + rollSum;

        }

        // function will generate a random number between 1 and 6 
        function getRandomNumber(){
            // get a random number between 0 and 1 and multiply by 6
            let number = Math.random() * 6;

            //this will round our number up so we get a number between 1 and 6
            number = Math.ceil(number);

            // returning / passing back the random number
            return number;
        }

         // this function will validate the user input based on the requirements of the 
        // client (assignment requirements)
        function validate(){
            // first name variable
            let firstName = document.getElementById("txtFirstName").value; 

            // show the first name in the console
            console.log("firstName=" + firstName);

             // last name variable
            let lastName = document.getElementById("txtLastName").value; 

            // show the last name in the console
            console.log("lastName=" + lastName);

            // zip code varriable
            let zip = document.getElementById("txtZip").value;

            // show the zip in the console
            console.log("zip=" + zip);

            // create a variable to hold the first name = " " + last name
            let fullName = firstName + " " + lastName;

            console.log("fullName=" + fullName);

            // create a variable to hold the message we will show to the user
            let message = "";

            // we need to make sure the full name does not exceed 20 characters
            if (fullName.length == 1 || fullName.length > 20){
                message = "Please enter a name that is less than 20 characters.";
            }
            // the zip code can only have 5 characters
            else if (zip.length != 5){
                message = "Please enter a 5 digit zip code.";
            }
            // otherwise the user has entered everything correctly. and they get the 
            //secret word
            else{
                message = "The secret word is validation!";
            }

            console.log("message=" + message);

            // display the message on the associate div
            document.getElementById("divMessage").textContent = message;
        }