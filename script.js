// Define all Variables

// Generate button
const generateBtn = document.getElementById('generateNumBtn');
// Generated number display 
const generatedNumDisplay = document.getElementById('generatedNumDisplay');
// Generated number display title
const generatedNumTitle = document.getElementById('generatedNumTitle');

// Define a variable with a last generated number 
let lastNumber;

// Add event listener on 'Generate' button
generateBtn.addEventListener('click', () => {
  // Get the lower number of the range 
  let minNum = parseInt(document.getElementById('minNum').value);
  // Get the upper number of the range 
  let maxNum = parseInt(document.getElementById('maxNum').value);

  // Create a random number within that range
  let randomNumber = Math.floor(Math.random() * ((maxNum-minNum)+1) + minNum);

  // Make generated number display title visible
  generatedNumTitle.innerHTML = `Your number is:`;

  // Display a generated number on the screen 
  generatedNumDisplay.innerHTML = `${randomNumber}`;

  // If same number was created twice in a row, then try to generate a random number again
  if (lastNumber === randomNumber) {
    let randomNumber = Math.floor(Math.random() * ((maxNum-minNum)+1) + minNum);
  }

  // Make generated number a last created number   
  lastNumber = randomNumber;
}, false);