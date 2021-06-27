// Catch the  letters : 
const letters = "abcdefghijklmnopqrstuvwxyz";

// Get Array From Letters : 
let lettersArray = Array.from(letters);
// console.log(lettersArray);

// Select Letters Container : 
let lettersContainer = document.querySelector('.letters');

// Generate letters : 
lettersArray.forEach(letter => {
    // Create span :
    let span = document.createElement('span');

    // Craete letter text node :
    let theLetter = document.createTextNode(letter);

    // Append the text node to the Span : 
    span.appendChild(theLetter);

    // Add Class On Span :
    span.className = 'letter-box';
    
    // Append Span to The Letters Container :
    lettersContainer.appendChild(span);
});

////////////////////////////////////////////////////

// Object of Words & Categories :

const words = {
    programming: ["PHP", "JavaScript", "HTML", "CSS", "Bootstrap", "go"],
    movies: ["Gladiator", "Captain American", "Inception", "Up"],
    people: ["Albert Einstein", "Cleopatra", "Taha Hussien","Messi", "Ahmed Shawky"],
    countries: ["Egypt", "England", "Spain", "Germany", "Palestine"]
}

// Get Random Property : 
let allKeys = Object.keys(words);

// Random Number Depend on Keys Length :
let randomPropertyNumber = Math.floor(Math.random() * allKeys.length);
// Category Name :
let randomPropertyName = allKeys[randomPropertyNumber];
// Category Words : 
let randomPropertyValue = words[randomPropertyName];


// Random Number Depend on Words : 
let randomValueNumber = Math.floor(Math.random() * randomPropertyValue.length);
// The Chosen Words :
let randomValueName = randomPropertyValue[randomValueNumber];
// console.log(randomValueName);

// Set Category Info : 
document.querySelector('.game-info .category span').innerHTML = randomPropertyName;


////////////////////////////////////////////////////////////////////////

// Select Letters Guess Element : 
let lettersGuessContainer = document.querySelector('.letters-guess');

// Convert Chosen Word To Array : 
let lettersAndSpace = Array.from(randomValueName);

// Create Spans Depend on Word :
lettersAndSpace.forEach(letter => {
    // Create Empty Span : 
    let emptySpan = document.createElement('span');

    // check if letter is Space : 
    if (letter === ' ') {
        // Add class to the span :
        emptySpan.className = 'with-space';
    }

    // Append the span to the letter guess container :
    lettersGuessContainer.appendChild(emptySpan);
});

// Select All Guess spans : 
let guessSpans = document.querySelectorAll('.letters-guess span');

////////////////////////////////////////////////////////////////
// Set Wrong Attempts :
let wrongAttempts = 0;

// Select The Draw Element : 
let theDraw = document.querySelector('.hangman-draw');


/////////////////////////////////////////////////////////////////
// Handle Clicking on Letters :
document.addEventListener('click', (e) => {
    // Set The Choose Status : 
    let theStatus = false;  // The Default Status

    if (e.target.className === 'letter-box') {
        e.target.classList.add("clicked");

        // Get The Clicked Letter :
        let clickedLetter = e.target.innerHTML.toLowerCase();

        // Get The Chosen Word :
        let theChosenWord = Array.from(randomValueName.toLowerCase());

        theChosenWord.forEach((wordLetter, WordIndex) => {
            // Check if the clicked letter is Equal to one of the chosen word letters :
            if (clickedLetter == wordLetter) {
                // Set the Status to Correct :
                theStatus = true;

                // Loop On All Guess Spans : 
                guessSpans.forEach((span, spanIndex) => {
                    if (WordIndex === spanIndex) {
                        span.innerHTML = clickedLetter;
                    }
                });
            }
        });


        // if the letter that has chosen is wrong : 
        if (theStatus !== true) {
            // Increase The Wrong Attemps :
            wrongAttempts++;

            // Add Class Wrong On The Draw Element :
            theDraw.classList.add(`wrong-${wrongAttempts}`);

            // Play Fail Audio : 
            // document.getElementById("fail").play();

            // Check for the number of wrong attemps :
            if (wrongAttempts === 8) {
                endGame();
                lettersContainer.classList.add("finished");
            }  

        } else {
            // Play Success Audio :
            // document.getElementById("success").play();
        }
    }

});



///////////////////////////////////////// End Game Function :
endGame = () => {
    // Create Popup div :
    let div = document.createElement('div');
    
    // Create Text :
    let divText = document.createTextNode(`Game Over, The Word is ${randomValueName}`);

    // Append Text To The Div :
    div.appendChild(divText);

    // Add Class On Div :
    div.className = "popup";

    // Append To The Body :
    document.body.appendChild(div);
}