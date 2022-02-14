// calculator - display
const lastOperationScreen = document.querySelector('#lastOperationScreen')
const currentOperationScreen = document.querySelector('#currentOperationScreen')

// calculator - keypad
const clear = document.querySelector('#clear')
const changeSign = document.querySelector('#changeSign')
const percent = document.querySelector('#percent')
const divide = document.querySelector('#divide')

const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')
const multiply = document.querySelector('#multiply')

const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const subtract = document.querySelector('#subtract')

const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const add = document.querySelector('#add')

const zero = document.querySelector('#zero')
const decimal = document.querySelector('#decimal')
const equals = document.querySelector('#equals')
const backspace = document.querySelector('#backspace')

let currentOperation = ''
let lastOperation = ''
let currentNumber = ''
let lastNumber = ''
let lastOperationResult = ''
let lastOperationResultIsNumber = false
let lastOperationResultIsOperator = false
let lastOperationResultIsDecimal = false
let lastOperationResultIsPercent = false
let lastOperationResultIsBackspace = false
let lastOperationResultIsClear = false
let lastOperationResultIsChangeSign = false
let lastOperationResultIsPercentOf = false
let lastOperationResultIsDivide = false
let lastOperationResultIsMultiply = false
let lastOperationResultIsSubtract = false
let lastOperationResultIsAdd = false

// // calculator - keypad
// clear.addEventListener('click', () => {
//   clearScreen()
// })

// clearScreen = () => {
//   currentOperation = ''
//   lastOperation = ''
//   currentNumber = ''
//   lastNumber = ''
//   lastOperationResult = ''
//   lastOperationResultIsNumber = false
//   lastOperationResultIsOperator = false
//   lastOperationResultIsDecimal = false
//   lastOperationResultIsPercent = false
//   lastOperationResultIsBackspace = false
//   lastOperationResultIsClear = false
//   lastOperationResultIsChangeSign = false
//   lastOperationResultIsPercentOf = false
//   lastOperationResultIsDivide = false
//   lastOperationResultIsMultiply = false
//   lastOperationResultIsSubtract = false
//   lastOperationResultIsAdd = false
//   lastOperationScreen.innerHTML = ''
//   currentOperationScreen.innerHTML = ''
// }

// calculator - keypad

// update the current screen
updateCurrentScreen = (number) => {
  currentOperationScreen.innerHTML = number
}


