

// Select all buttons with class 'test'
let buttons = document.querySelectorAll('.test');

let string = ""; // Variable to store the current expression
let inputBox = document.querySelector('.inputbox');

// Convert NodeList to Array and iterate over each button
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML;

        // Handle 'AC' button (Clear)
        if (buttonText === 'AC') {
            string = ""; // Reset the string
        }
        // Handle '=' button (Evaluate)
        else if (buttonText === '=') {
            try {
                // Use eval to compute the result and update the input box
                string = eval(string).toString();
                inputBox.value = string;
            } catch (error) {
                // Handle any errors from eval (e.g., division by zero)
                inputBox.value = 'Error';
                string = "";
            }
        }
        // Handle other buttons (numbers and operators)
        else {
            string += buttonText; // Concatenate button text to the string
            inputBox.value = string; // Update the input box
        }
    });
});
