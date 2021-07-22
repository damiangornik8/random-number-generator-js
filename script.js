// Define all Variables

// Generate number (button)
const generateBtn = document.getElementById('generateNumBtn');
// Display the generated number (button)
const generatedNumDisplay = document.getElementById('generatedNumDisplay');
// Display the generated number (title)
const generatedNumTitle = document.getElementById('generatedNumTitle');

// Define a variable to store the last generated number 
let lastNumber;

// Add an event listener on the 'Generate' button
generateBtn.addEventListener('click', () => {
  // Get the minimum number of the range 
  let minNum = parseInt(document.getElementById('minNum').value);
  // Get the maximum number of the range 
  let maxNum = parseInt(document.getElementById('maxNum').value);

  // Create a random number within that range
  let randomNumber = Math.floor(Math.random() * ((maxNum-minNum)+1) + minNum);

  // Make the title visible
  generatedNumTitle.innerHTML = `Your number is:`;

  // Display the generated number to the user
  generatedNumDisplay.innerHTML = `${randomNumber}`;

  // If same number was created twice in a row, then try to generate a random number again
  if (lastNumber === randomNumber) {
    let randomNumber = Math.floor(Math.random() * ((maxNum-minNum)+1) + minNum);
  }

  // Make generated number to be the last created number   
  lastNumber = randomNumber;
}, false);
