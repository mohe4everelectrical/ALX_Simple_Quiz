// Arithmetic Functions
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
    if (number2 === 0) {
        return "Error: Division by zero!";
    }
    return number1 / number2;
}

// Helper function to get input values
function getInputValues() {
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;
    return { num1, num2 };
}

// Helper function to display result
function displayResult(result) {
    document.getElementById('calculation-result').textContent = result;
}

// Event Listeners
document.getElementById('add').addEventListener('click', function() {
    const { num1, num2 } = getInputValues();
    const result = add(num1, num2);
    displayResult(result);
});

document.getElementById('subtract').addEventListener('click', function() {
    const { num1, num2 } = getInputValues();
    const result = subtract(num1, num2);
    displayResult(result);
});

document.getElementById('multiply').addEventListener('click', function() {
    const { num1, num2 } = getInputValues();
    const result = multiply(num1, num2);
    displayResult(result);
});

document.getElementById('divide').addEventListener('click', function() {
    const { num1, num2 } = getInputValues();
    const result = divide(num1, num2);
    displayResult(result);
});

// Additional feature: Clear inputs on double-click
document.getElementById('number1').addEventListener('dblclick', function() {
    this.value = '';
});

document.getElementById('number2').addEventListener('dblclick', function() {
    this.value = '';
});
