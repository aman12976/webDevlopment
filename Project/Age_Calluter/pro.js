// Random number between 1 and 10
let randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    // User input
    let guess = parseInt(document.getElementById("guessInput").value);

    // Validation
    if (isNaN(guess) || guess < 1 || guess > 10) {
        alert("Please enter a number between 1 and 10.");
        return;
    }

    // Compare guessed number with random number
    if (guess > randomNumber) {
        alert("OOPS SORRY!! TRY A SMALLER NUMBER");
    }
    else if (guess < randomNumber) {
        alert("OOPS SORRY!! TRY A LARGER NUMBER");
    }
    else {
        alert("🎉 Congratulations! You guessed the correct number: " + randomNumber);
    }

    // Clear input field
    document.getElementById("guessInput").value = "";
}