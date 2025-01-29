var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var addbtn = document.getElementById("add");
var subbtn = document.getElementById("sub");
var multbtn = document.getElementById("mult");
var divbtn = document.getElementById("divide");
var printresult = document.getElementById("result");
function getNumbers() {
    var a = parseFloat(num1.value);
    var b = parseFloat(num2.value);
    if (isNaN(a) || isNaN(b)) {
        printresult.textContent = "נא להזין מספרים תקינים";
        return [NaN, NaN];
    }
    return [a, b];
}
function addNumbers() {
    var _a = getNumbers(), a = _a[0], b = _a[1];
    if (!isNaN(a) && !isNaN(b)) {
        printresult.textContent = (a + b).toString();
    }
}
addbtn.addEventListener("click", addNumbers);
function subtractNumbers() {
    var _a = getNumbers(), a = _a[0], b = _a[1];
    if (!isNaN(a) && !isNaN(b)) {
        printresult.textContent = (a - b).toString();
    }
}
subbtn.addEventListener("click", subtractNumbers);
function multiplyNumbers() {
    var _a = getNumbers(), a = _a[0], b = _a[1];
    if (!isNaN(a) && !isNaN(b)) {
        printresult.textContent = (a * b).toString();
    }
}
multbtn.addEventListener("click", multiplyNumbers);
function divideNumbers() {
    var _a = getNumbers(), a = _a[0], b = _a[1];
    if (!isNaN(a) && !isNaN(b)) {
        if (b === 0) {
            printresult.textContent = "אי אפשר לחלק באפס";
            return;
        }
        printresult.textContent = (a / b).toString();
    }
}
divbtn.addEventListener("click", divideNumbers);
