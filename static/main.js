const incrButton = document.querySelector('button.increment-button');
const countDisplay = document.querySelector('p.count-display');

function increment() {
    console.log("Increment called.")
}

incrButton.addEventListener('click', increment);