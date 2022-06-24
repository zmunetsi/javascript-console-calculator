// calcultor

function calculate (operator, num1, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return 'Invalid operator';
  }
}

// test cases
console.log(calculate('+', 1, 2)); // 3
console.log(calculate('-', 1, 2)); // -1
console.log(calculate('*', 1, 2)); // 3
console.log(calculate('/', 1, 2)); // should return 0.5
console.log(calculate('%', 1, 2)); // invalid operator
console.log(calculate('+', 100, 2)); // 102
console.log(calculate('-', 100, 2)); // 98