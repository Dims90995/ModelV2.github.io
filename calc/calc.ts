const num1 = document.getElementById("num1") as HTMLInputElement;
const num2 = document.getElementById("num2") as HTMLInputElement;

const addbtn = document.getElementById("Add") as HTMLButtonElement;
const subbtn = document.getElementById("sub") as HTMLButtonElement;
const multbtn = document.getElementById("mult") as HTMLButtonElement;
const divbtn = document.getElementById("divide") as HTMLButtonElement;

const printresult = document.getElementById("result") as HTMLOutputElement;

function addnumber() {
  const a = parseFloat(num1.value); 
  const b = parseFloat(num1.value); 
  const result = a + b; 
  printresult.textContent = result.toString(); 
}

addbtn.addEventListener("click", addnumber); 

function subtractNumbers() {
    const a = parseFloat(num1.value)
    const b = parseFloat(num1.value)
    let result = a-b;
    printresult.textContent = result.toString()
}
subbtn.addEventListener("click", subtractNumbers)

function MultiplyNumbers() {
    const a = parseFloat(num1.value)
    const b = parseFloat(num1.value)
    let result = a*b;
    printresult.textContent = result.toString()
}
multbtn.addEventListener("click", MultiplyNumbers)

function DivideNumbers() {
    const a = parseFloat(num1.value)
    const b = parseFloat(num1.value)
    let result = a/b;
    printresult.textContent = result.toString()
}
divbtn.addEventListener("click", DivideNumbers)

