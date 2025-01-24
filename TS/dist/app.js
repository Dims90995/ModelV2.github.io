function calculateRatio() {
    // Prompt the user for two numbers
    var input1 = prompt("Enter the first number:");
    var input2 = prompt("Enter the second number:");
    // Ensure both inputs are not null
    if (input1 === null || input2 === null) {
        alert("Error: Input was canceled.");
        return;
    }
    var num1 = parseFloat(input1);
    var num2 = parseFloat(input2);
    // Validate the input
    if (isNaN(num1) || isNaN(num2)) {
        alert("Error: Please enter valid numbers.");
    }
    else if (num2 === 0) {
        alert("Error: Division by zero is not allowed.");
    }
    else {
        var ratio = num1 / num2;
        alert("The ratio of " + num1 + " / " + num2 + " is: " + ratio);
    }
}
// Call the function
calculateRatio();
