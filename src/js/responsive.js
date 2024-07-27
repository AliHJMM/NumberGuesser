// Function to update the text content of the '.info-range' element based on window width
function updateInfoRangeText() {
  // Select the element with the class 'info-range'
  const infoRange = document.querySelector('.info-range');

  // Check if the window width is 570 pixels or less
  if (window.innerWidth <= 570) {
    // Update the text content for smaller screens
    infoRange.textContent = 'Between 1 & 20';
  } else {
    // Update the text content for larger screens
    infoRange.textContent = 'Guess a number between 1 & 20';
  }
}

// Call the function to set the initial text content based on the current window size
updateInfoRangeText();

// Add an event listener to update the text content when the window is resized
window.addEventListener('resize', updateInfoRangeText);
