function operate(num1, num2, op) {
    switch (op) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case 'x': return num1 * num2;
        case '/': return num2 !== 0 ? num1 / num2 : "Error";
        default: return "Invalid Operation";
    }
}

const nums = document.getElementsByClassName("num");
const operators = document.getElementsByClassName("operator");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals")
const dec = document.getElementById("decimal");
let display = document.getElementById("display");
let sub =0; 
let op;
let num1;
let num2;
let result;

//operator logic
for (let i=0; i<operators.length; i++){
    operators[i].addEventListener('click', function() {
        if (display.innerText!=''){
            op = this.innerText;
            num1 = display.innerText;
            num1 = +num1;
            sub = 1;
        }
    })
}

//numbers append display
for (let i=0; i<nums.length; i++){
    nums[i].addEventListener('click', function() {
        if (sub!=0) {
            display.innerText='';
            sub = 0;
        }
        let text = this.innerText;
        display.innerText += text;
    })
}


//clear button works
clear.addEventListener('click', function() {
    display.innerText = '';
})

//result appends screen
equals.addEventListener('click', function() {
    if (num1!=null && op !=null){
        num2 = display.innerText;
        num2 = +num2;
        console.log(typeof num1);
        console.log(typeof op);
        console.log(typeof num2);

        result = operate(num1, num2, op)
        display.innerText='';
        display.innerText += result
        num1 = result;
        op = null;
    }
})

//create dec button and cant b used multiple times
dec.addEventListener('click', function() {
    let input = display.innerText;

    // Only add a decimal if there's no existing decimal point
    if (!input.includes('.')) {
        display.innerText += '.';
    }
});
