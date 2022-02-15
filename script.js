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

//loop to each button
Button.forEach(button => {
  button.addEventListener('click', () => {
    
  })
})




///solver function
// case 'divide':
const divide = (a, b) => a / b
// case 'multiply':
const multiply = (a, b) => a * b
// case 'subtract':
const subtract = (a, b) => a - b
// case 'add':
const add = (a, b) => a + b
