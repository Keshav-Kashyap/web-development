let input = document.getElementById('input-box');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
let isResultDisplayed = false; // Flag to track if result is displayed

// Button clicks ko handle karna
arr.forEach(box => {
    box.addEventListener('click', (e) => {
        handleInput(e.target.innerHTML);
    });
});

// Keyboard input ko handle karna
document.addEventListener('keydown', (e) => {
    const key = e.key;

    if (key === 'Enter') {
        handleInput('=');
    } else if (key === 'Backspace') {
        handleInput('DEL');
    } else if (!isNaN(key) || ['+', '-', '*', '/'].includes(key)) {
        handleInput(key);
    } else {
        e.preventDefault();
    }
});

// Input handling function
function handleInput(value) {
    const lastChar = string[string.length - 1];

    if (value === '=') {
        try {
            string = eval(string);
            input.value = string;
            isResultDisplayed = true; // Result display hone par flag set karein
        } catch (error) {
            input.value = 'Error';
            string = ""; // Reset on error
            isResultDisplayed = false; // Reset flag
        }
    } else if (value === 'AC') {
        string = "";
        input.value = string;
        isResultDisplayed = false; // Reset flag
    } else if (value === 'DEL') {
        if (isResultDisplayed) {
            // Agar result display hua hai, toh reset karein
            string = "";
            input.value = string;
            isResultDisplayed = false; // Reset flag
        } else {
            // Agar string mein value hai, toh last character delete karein
            if (string.length > 0) {
                string = string.substring(0, string.length - 1);
            }
            input.value = string;
        }
    } else {
        // Agar last character operator hai aur naya operator aa raha hai, toh ignore karein
        if (['+', '-', '*', '/'].includes(value) && ['+', '-', '*', '/'].includes(lastChar)) {
            return; // Do baar operator nahi aane dena
        }
        string += value;
        input.value = string;
        isResultDisplayed = false; // User input par flag reset karein
    }
}
