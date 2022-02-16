// calculator - display
const lastOperationScreen = document.querySelector('#lastOperationScreen')
const currentOperationScreen = document.querySelector('#currentOperationScreen')
//log
const log = document.querySelector('.log')
// calculator - keypad
const Button = document.querySelectorAll('.calculator-key')

let currentOperation = ''
let lastOperation = ''
let currentNumber = ''
let lastNumber = ''
let lastOperationResult = ''

//Loop every button.add click event listener on each//identify what button was pressed.
Button.forEach((button) => {
  console.log(typeof button.getAttribute('data-value'))
  button.addEventListener('click', () => {
    let value = button.getAttribute('data-value')
    switch (value) {
      case 'C':
        clear()
        break
      case 'leftArrow':
        backSpace()
        break
      case '+/-':
        convertPositiveNegative()
        break
      case '%':
        getPercentage()
        break
      case '=':
        equals()
        break
      case '/':
        updateLastOperationScreen(value)
        break
      case 'x':
        updateLastOperationScreen(value)
        break
      case '-':
        updateLastOperationScreen(value)
        break
      case '+':
        updateLastOperationScreen(value)
        break
      default:
        updateCurrentOperationScreen(value)
        break
    }
  })
})
//if operator was pressed.push to lastNumber and lastOperation then empty currentNumber.
const updateLastOperationScreen = (operator) => {
  if (currentNumber === '') return
  // console.log(!!currentNumber && !!lastNumber)
  // console.log(!!currentOperation)
  if (currentOperation) {
    lastOperation = currentOperation
    if (!!currentNumber && !!lastNumber) {
      currentNumber = operate(
        lastOperation,
        currentNumber,
        lastNumber
      ).toString()
      currentOperation = operator
      lastNumber = currentNumber
      currentNumber = ''
      lastOperationScreen.innerHTML = `${lastNumber} ${currentOperation}`
    }
  }
  if (currentOperation) {
    lastOperation = currentOperation
  } else {
    lastNumber = currentNumber
    currentOperation = operator
    currentNumber = ''
    currentOperationScreen.innerHTML = ''
    lastOperationScreen.innerHTML = `${lastNumber} ${currentOperation}`
  }

  //if this is the first time the user is pressing an operator.
  if (!currentNumber) return
}
//create a function that will update the user screen base from input
const updateCurrentOperationScreen = (value) => {
  if (value === '.') {
    if (currentNumber === '') {
      currentNumber = '0'
    } else if (currentNumber.includes('.')) {
      return
    }
  }
  currentNumber += value
  currentOperationScreen.innerHTML = currentNumber
}
//2. Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
//If numbers cliked.Update first screen.
const operate = (operator, firtNum, secondNum) => {
  let num1 = Number(firtNum)
  let num2 = Number(secondNum)
  switch (operator) {
    case '+':
      return add(num1, num2)
    case '-':
      return subtract(num1, num2)
    case 'x':
      return multiply(num1, num2)
    case '/':
      return divide(num1, num2)
    default:
      return 'No Information Found'
  }
}
// backspace or delete currentNumber
const backSpace = () => {
  currentNumber = currentNumber.toString().slice(0, -1)
  currentOperationScreen.innerHTML = currentNumber
}

const clear = () => {
  currentOperation = ''
  lastOperation = ''
  currentNumber = ''
  lastNumber = ''
  lastOperationResult = ''
  lastOperationScreen.innerHTML = ''
  currentOperationScreen.innerHTML = ''
}

const convertPositiveNegative = () => {
  currentNumber = (Number(currentNumber) * -1).toString()
  currentOperationScreen.innerHTML = currentNumber
}

const equals = () => {
  console.log(lastNumber)
  if (lastNumber === '' || currentNumber === '') return
  const p = document.createElement('p')
  p.innerHTML = `${lastNumber} ${currentOperation} ${currentNumber} = ${operate(
    currentOperation,
    currentNumber,
    lastNumber
  )}`
  log.appendChild(p)
  currentNumber = operate(currentOperation, currentNumber, lastNumber)
  currentOperationScreen.innerHTML = currentNumber
  lastOperation = ''
  lastNumber = ''
  currentOperation = ''
  lastOperationScreen.innerHTML = ''
}

const getPercentage = () => {
  let percentage = (currentNumber / 100).toString()
  currentOperationScreen.innerHTML = percentage
}
//if operator clicked.update second screen with operator.

//if operator and was clicked but both fist and second screen are not empty.
//`solve` the operation.
// 4.Create the functions that populate the display when you click the number buttons… you should be storing the ‘display value’ in a variable somewhere for use in the next step.
//once solve.update the first screen with the result.empty the second screen.

///solver function
// Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators, so start by creating functions for the following items and testing them in your browser’s console.
// add
// subtract
// multiply
// divide
// case 'divide':
const divide = (a, b) => (b / a).toFixed(2)
// case 'multiply':
const multiply = (a, b) => a * b
// case 'subtract':
const subtract = (a, b) => b - a
// case 'add':
const add = (a, b) => a + b
