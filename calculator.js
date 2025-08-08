// Arithmetic functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    // Handle division by zero
    if (number2 === 0) {
        return "Error: Cannot divide by zero";
    }
    return number1 / number2;
}

// Attach event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get all elements
    const number1Input = document.getElementById('number1');
    const number2Input = document.getElementById('number2');
    const resultSpan = document.getElementById('calculation-result');
    
    // Helper function to get input values as numbers
    const getInputNumbers = () => {
        const number1 = parseFloat(number1Input.value) || 0;
        const number2 = parseFloat(number2Input.value) || 0;
        return [number1, number2];
    };
    
    // Addition button
    document.getElementById('add').addEventListener('click', () => {
        const [num1, num2] = getInputNumbers();
        resultSpan.textContent = add(num1, num2);
    });
    
    // Subtraction button
    document.getElementById('subtract').addEventListener('click', () => {
        const [num1, num2] = getInputNumbers();
        resultSpan.textContent = subtract(num1, num2);
    });
    
    // Multiplication button
    document.getElementById('multiply').addEventListener('click', () => {
        const [num1, num2] = getInputNumbers();
        resultSpan.textContent = multiply(num1, num2);
    });
    
    // Division button
    document.getElementById('divide').addEventListener('click', () => {
        const [num1, num2] = getInputNumbers();
        resultSpan.textContent = divide(num1, num2);
    });
});