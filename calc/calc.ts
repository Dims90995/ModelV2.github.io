const num1 = document.getElementById("num1") as HTMLInputElement;
const num2 = document.getElementById("num2") as HTMLInputElement;

const addbtn = document.getElementById("add") as HTMLButtonElement;
const subbtn = document.getElementById("sub") as HTMLButtonElement;
const multbtn = document.getElementById("mult") as HTMLButtonElement;
const divbtn = document.getElementById("divide") as HTMLButtonElement;

const printresult = document.getElementById("result") as HTMLSpanElement;

function getNumbers(): [number, number] {
    const a = parseFloat(num1.value);
    const b = parseFloat(num2.value);
    if (isNaN(a) || isNaN(b)) {
        printresult.textContent = "נא להזין מספרים תקינים";
        return [NaN, NaN];
    }
    return [a, b];
}

function addNumbers() {
    const [a, b] = getNumbers();
    if (!isNaN(a) && !isNaN(b)) {
        printresult.textContent = (a + b).toString();
    }
}
addbtn.addEventListener("click", addNumbers);

function subtractNumbers() {
    const [a, b] = getNumbers();
    if (!isNaN(a) && !isNaN(b)) {
        printresult.textContent = (a - b).toString();
    }
}
subbtn.addEventListener("click", subtractNumbers);

function multiplyNumbers() {
    const [a, b] = getNumbers();
    if (!isNaN(a) && !isNaN(b)) {
        printresult.textContent = (a * b).toString();
    }
}
multbtn.addEventListener("click", multiplyNumbers);

function divideNumbers() {
    const [a, b] = getNumbers();
    if (!isNaN(a) && !isNaN(b)) {
        if (b === 0) {
            printresult.textContent = "אי אפשר לחלק באפס";
            return;
        }
        printresult.textContent = (a / b).toString();
    }
}
divbtn.addEventListener("click", divideNumbers);
