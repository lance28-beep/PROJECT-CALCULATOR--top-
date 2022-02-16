// calculator - display
const lastOperationScreen = document.querySelector('#lastOperationScreen')
const currentOperationScreen = document.querySelector('#currentOperationScreen')

// calculator - keypad
const Button = document.querySelectorAll('.calculator-key')

let currentOperation = ''
let lastOperation = ''
let currentNumber = ''
let lastNumber = ''
let lastOperationResult = ''

//Loop every button.add click event listener on each//identify what button was pressed.
Button.forEach((button) => {
  button.addEventListener('click', () => {
    let value = button.getAttribute('data-value')
    switch (value) {
    }
  })
})
//If numbers cliked.Update first screen.

//if operator clicked.update second screen with operator.

//if operator and was clicked but both fist and second screen are not empty.
//`solve` the operation.

//once solve.update the first screen with the result.empty the second screen.

///solver function
// case 'divide':
const divide = (a, b) => a / b
// case 'multiply':
const multiply = (a, b) => a * b
// case 'subtract':
const subtract = (a, b) => a - b
// case 'add':
const add = (a, b) => a + b
