// Part 1: Read strings and alert the Nth string
function readStringsAndAlertNth() {
    let strings: string[] = [];
    while (true) {
        const input = prompt("Enter a string (or press Cancel to stop):");
        if (input === null) break;
        strings.push(input);
    }

    const nthStringIndex = parseInt(prompt("Enter the index (N) of the string to alert:") || "0", 10);
    if (nthStringIndex >= 1 && nthStringIndex <= strings.length) {
        alert(`The Nth string is: ${strings[nthStringIndex - 1]}`);
    } else {
        alert("Invalid index!");
    }
}

// Part 2: Read 10 numbers and alert them in ascending order
function readNumbersAndAlertAscending() {
    let numbers: number[] = [];
    for (let i = 0; i < 10; i++) {
        const input = parseFloat(prompt(`Enter number ${i + 1}:`) || "0");
        numbers.push(input);
    }

    // Sorting numbers manually without array methods
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] > numbers[j]) {
                const temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }

    // Alerting the numbers in ascending order
    alert("Numbers in ascending order: " + numbers.join(", "));
}

// Execute the functions
readStringsAndAlertNth();
readNumbersAndAlertAscending();
