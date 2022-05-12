const incrButton = document.querySelector('.increment-button');
const countDisplay = document.querySelector('.count-display');

// Define global state
let count = 0;

// Initial render
countDisplay.textContent = count;

function increment() {
    // Change global state
    count += 1;

    // Re-render based on global state
    countDisplay.textContent = count;
}

incrButton.addEventListener('click', increment);