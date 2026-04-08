
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


        
        // the code to move the meme image around

         // create a variable to track the current intervl id (returned from the set interval function
        let intervalId = 0;

        // create the function to move the image
        function startImageMove(){
            
            // we are creating a variable that is  shortcut/nickname for our html image element
            let memeImage = document.getElementById("memeImage");

            // set interval allows us to repeadedly run code 
            // function (){} is a anonymour function - a way to run a chunk of code 1 time as a functoin argument
       
            intervalId = setInterval(function(){
                // get a random 
                let topCord = getRandomPixels();
                let leftCord = getRandomPixels();

                memeImage.style.left = leftCord + "px";
                memeImage.style.top = topCord + "px";

            }, 1000); // 1000 miliseconds = 1 second

             // enable the stop button
             document.getElementById("btnStop").disabled = false;

             // disable the stop button
             document.getElementById("btnStart").disabled = true;
        }

        // create the function that stops the image from moving
        function stopImageMove(){
            // call a built in javascript function that stops the set interval from running
            clearInterval(intervalId);

             // disable the stop button
             document.getElementById("btnStop").disabled = true;

             // enable the stop button
             document.getElementById("btnStart").disabled = false;

        }

        // build a function to get a random number
        function getRandomPixels(){
            // im picking 800 as the max number - adjust acordingly based on your screen size
            return Math.floor(Math.random() * 800);
        }

         // this function will add an audio element to the page so we can listen to a sound clip
        function addAudio(){
            let divAudio = document.getElementById("divAudio");

            // create an audio HTML element using JavaScript
            let audioElement = document.createElement("audio");
            // set the atributes of our new HTML elements
            // add an id so we can work more easily with this element
            audioElement.setAttribute("id", "myAudio");

            // add the file name as the source
            // if you are using the sound file provided in the assingment your code will look like this
            // us-lab-background.mp3
            audioElement.setAttribute("src", "us-lab-background.mp3");

            // highly suggested - add controls
            audioElement.setAttribute("controls", "controls");

            // set the audio to 0 by default
            audioElement.volume = .0;

            // add our new HTMl audio element to the div that host it
            divAudio.appendChild(audioElement);

            // disallow the user from clicking the add audio button now that the audio has been added to the page
            document.getElementById("btnAddAudio").hidden = true;

            // make the play and pause buttons appear
            document.getElementById("btnPlayAudio").hidden = false;
            document.getElementById("btnPauseAudio").hidden = false;
        }

        // create the function so we can play the audio
        function playAudio(){
            // create a shortcut to the audio element we created in the add audio fuunctiom
            let myAudio = document.getElementById("myAudio");
            // lets play the sound
            myAudio.play();
        }

        // create the function so that we can stop playing the audio - really pause it
        function pauseAudio(){
            // create a shortcut to the audio element we created in the add audio fuunctiom
            let myAudio = document.getElementById("myAudio");
            // lets pause the sound
            myAudio.pause();
        }