const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

// Add event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', () => handleButtonClick(button.dataset.value));
});

// Handle button clicks
function handleButtonClick(value) {
    if (value === 'C') {
        clearDisplay();
    } else if (value === 'DEL') {
        deleteLast();
    } else if (value === '=') {
        calculate();
    } else {
        appendToDisplay(value);
    }
}

// Append value to display
function appendToDisplay(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = '';
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

// Keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (/[0-9+\-*/.]/.test(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});