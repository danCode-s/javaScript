
function buttonClickColor(class_1) {
    const button = document.querySelector(class_1);
    if (!button.classList.contains('is-toggled')) {
  
      // Before turning this button ON, check if there's
      // already a button that's turned ON and turn it OFF.
      turnOffPreviousButton();
  
      button.classList.add('is-toggled');
    } else {
      button.classList.remove('is-toggled');
    }
  }
  
  function turnOffPreviousButton() {
    const previousButton = document.querySelector('.is-toggled');
    if (previousButton) {
      previousButton.classList.remove('is-toggled');
    }
}