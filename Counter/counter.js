let counter = 0;

// Update the display
function updateDisplay() {
    document.getElementById('counterDisplay').textContent = counter;
}

// Increase the counter
function increaseCounter() {
    counter++;
    updateDisplay();
    showMessage('Counter increased!', 'success');
}

// Decrease the counter
function decreaseCounter() {
    counter--;
    updateDisplay();
    showMessage('Counter decreased!', 'success');
}

// Reset the counter
function resetCounter() {
    counter = 0;
    updateDisplay();
    showMessage('Counter reset to 0!', 'info');
}

// Save the counter to localStorage
function saveCounter() {
    localStorage.setItem('counterValue', counter);
    showMessage('Counter saved successfully!', 'success');
}

// Load the counter from localStorage
function loadCounter() {
    const savedValue = localStorage.getItem('counterValue');
    if (savedValue !== null) {
        counter = parseInt(savedValue);
        updateDisplay();
        showMessage('Counter loaded: ' + counter, 'info');
    } else {
        showMessage('No saved counter found!', 'error');
    }
}

// Show message to user
function showMessage(text, type) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = text;
    messageElement.className = 'message show ' + type;
    
    setTimeout(() => {
        messageElement.classList.remove('show');
    }, 2000);
}

// Initialize display
updateDisplay();