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
const clear = document.getElementById("clear");
let display = document.getElementById("display");

//operators append display
for (let i=0; i<operators.length; i++){
    operators[i].addEventListener('click', function() {
        let op = this.innerText;
        let num1 = display.innerText;
        num1 = +num1;
        
    })
}

//numbers append display
for (let i=0; i<nums.length; i++){
    nums[i].addEventListener('click', function() {
        if (op!=null) {
            display.innerText='';
        }
        let text = this.innerText;
        display.innerText += text;
    })
}


//clear button works
clear.addEventListener('click', function() {
    display.innerText = '';
})