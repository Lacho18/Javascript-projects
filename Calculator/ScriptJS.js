let numbersDiv = document.getElementById('numbers');
const inputText = document.getElementById("inputText");
let number1 = "";
let number2 = "";
let asNumber1 = 0;
let asNumber2 = 0;
let currentOperation = '';

for(let i = 0; i < 10; i++) {
    let button = document.createElement("button");
    button.id = i;
    button.innerHTML = i;
    numbersDiv.appendChild(button);
}

let numberButtons = document.querySelectorAll("#numbers button");
let operandsButtons = document.querySelectorAll("#operations button");

numberButtons.forEach(element => {
    element.addEventListener('click', () => {onNumberClick(element.id);});
});

operandsButtons.forEach(element => {
    element.addEventListener('click', () => {onOperandClick(element.textContent);});
}); 

function onNumberClick(buttonId) {
        if(number1 == "" || currentOperation === "") {
            asNumber1 = buttonId;
            number1 += buttonId;
            inputText.value = ""+number1;
        }
        else {
            asNumber2 = buttonId;
            if(number2 == "") {
                number2 += buttonId;
                inputText.value += ""+number2;
            }
            else {
                number2 += buttonId;
                inputText.value += ""+asNumber2;
            }
        }
}

function onOperandClick(operandId) {
    if(number1 !== "" && currentOperation === "") {
        inputText.value += " "+operandId+" ";
        currentOperation = operandId;
    }
}

function onEqual(operation) {
    let result = 0;
    switch(operation) {
        case '+':   result = parseInt(number1) + parseInt(number2);
            break;
        case '-':   result = parseInt(number1) - parseInt(number2);
            break;
        case '*':   result = parseInt(number1) * parseInt(number2);
            break;
        case '/':   result = parseInt(number1) / parseInt(number2);
            break;
        default: result = 0;
        break;
    }

    inputText.value = result;
    number1 = result;
    number2 = 0;
    currentOperation = "";
}

function clearText() {
    number1 = "";
    asNumber1 = 0;
    number2 = "";
    asNumber2 = 0;
    inputText.value = "";
}

function onDelete() {
    if(number1 !== "" || number2 !== "") {
        if(number2 === "") {
            number1 = number1.slice(0, -1);
            currentOperation = "";
            inputText.value = number1;
        }
        else {
            number2 = number2.slice(0, -1);
            inputText.value = number1 + " " + currentOperation + " "+number2;
        }
    }
}               

let equal = document.getElementById('=');
equal.addEventListener("click", () => {onEqual(currentOperation);});

let CE = document.getElementById('CE');
CE.addEventListener("click", clearText);

let C = document.getElementById('C');
C.addEventListener("click", clearText);

let Delete = document.getElementById('X');
Delete.addEventListener("click", onDelete);

