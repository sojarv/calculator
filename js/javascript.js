const numbers = document.getElementsByClassName('number');
const operands = document.getElementsByClassName('operand');
const evalue = document.getElementById('evaluate')

const allOperands = ['+', '-', '*', '/'];



evalue.addEventListener('click', evaluate);
document.getElementById('clear').addEventListener('click', clear);


function clear(e) {
    document.getElementById('display').innerHTML = ''
}


for (let i = 0; i < operands.length; i++) {
    operands[i].addEventListener('click', displayValue)

};

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', displayValue)

};

function displayValue(e) {

    const value = e.srcElement.innerHTML
    let display = document.getElementById('display').innerHTML;

    if (Number.isInteger(parseInt(e.srcElement.innerHTML))) {
        document.getElementById('display').innerHTML += value

    } else {
        if (!/\s/.test(display)) {
            document.getElementById('display').innerHTML += ' ' + value + ' '

        }
    }
    console.log(document.getElementById('display').innerHTML)
}

function evaluate(e) {
    const value = e.srcElement.innerHTML
    let display = document.getElementById('display').innerHTML;
    let splitano = display.split(' ');
    let op = allOperands.indexOf(splitano[1])
    let getIndex = allFunctions[allOperands.indexOf(splitano[1])](splitano[0], splitano[2])

    console.log(allFunctions[allOperands.indexOf(splitano[1])](splitano[0], splitano[2]))
    clear()

    if (Number.isFinite(getIndex)) {
        document.getElementById('display').innerHTML = getIndex;
    } else {
        document.getElementById('display').innerHTML = 'Error';
    }

}

function add(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

var allFunctions = [
    add,
    minus,
    multiply,
    divide
]