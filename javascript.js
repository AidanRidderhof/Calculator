function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

function operate(a, b, operator) {
    if  (operator == '+') {
        add(a,b)
    }
    if  (operator == '-') {
        subtract(a,b)
    }
    if  (operator == '*') {
        multiply(a,b)
    }
    if  (operator == '/') {
        divide(a,b)
    }
}

const nums = document.getElementsByClassName("num");
const operators = document.getElementsByClassName("operator");
let display = document.getElementById("display");
//numbers append display
for (let i=0; i<nums.length; i++){
    nums[i].addEventListener('click', function() {
        let text = this.innerText;
        display.innerText += text;
    })
}

//operators append display
for (let i=0; i<operators.length; i++){
    operators[i].addEventListener('click', function() {
        let text = this.innerText;
        display.innerText += " "+text+" ";
    })
}