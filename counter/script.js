const textInput = document.getElementById('text-input');
const charCount = document.getElementById('char-count');

textInput.addEventListener('input', function () {
    // Check the length of the input
    if (textInput.value.length > 50) {
        // Trim to the first 50 characters
        textInput.value = textInput.value.substring(0, 50);
    }

    // Update character count
    charCount.textContent = `Character Count: ${textInput.value.length}/50`;

    // Change text color based on count
    if (textInput.value.length === 50) {
        charCount.classList.add('red');
    } else {
        charCount.classList.remove('red');
    }
});
