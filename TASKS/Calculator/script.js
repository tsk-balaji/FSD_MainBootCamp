const currDisplay = document.querySelector(".curr-display");
const prevDisplay = document.querySelector(".prev-display");
const numbers = document.querySelectorAll(".number");
const operands = document.querySelectorAll(".operation");
const clearBtn = document.querySelector(".clear");
const backspaceBtn = document.querySelector(".backspace");
const equalBtn = document.querySelector(".equal");
let operation;

function appendNumber(number) {
  if (number === "." && currDisplay.value.includes(".")) return;
  currDisplay.value += number;
}

function chooseOperation(operand) {
  if (currDisplay.value === "") return;
  if (prevDisplay.innerText === "") {
    prevDisplay.innerText = currDisplay.value + operand;
  } else {
    compute();
    prevDisplay.innerText = currDisplay.value + operand;
  }
  operation = operand;
  currDisplay.value = "";
}

function clearDisplay() {
  currDisplay.value = "";
  prevDisplay.innerText = "";
}

function compute(operand) {
  let result;
  const previousValue = parseFloat(prevDisplay.innerText);
  const currentValue = parseFloat(currDisplay.value);

  if (isNaN(previousValue) || isNaN(currentValue)) return;

  switch (operation) {
    case "+":
      result = previousValue + currentValue;
      break;
    case "-":
      result = previousValue - currentValue;
      break;
    case "*":
      result = previousValue * currentValue;
      break;
    case "/":
      result = previousValue / currentValue;
      break;
    default:
      return;
  }
  currDisplay.value = result;
}

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    appendNumber(number.innerText);
  });
});

operands.forEach((operand) => {
  operand.addEventListener("click", () => {
    chooseOperation(operand.innerText);
  });
});

clearBtn.addEventListener("click", () => {
  clearDisplay();
});

equalBtn.addEventListener("click", () => {
  compute();
  prevDisplay.innerText = "";
});

backspaceBtn.addEventListener("click", () => {
  currDisplay.value = currDisplay.value.slice(0, -1);
});

document.addEventListener("keydown", (event) => {
  const key = event.key;
  if ((key >= 0 && key <= 9) || key === ".") {
    appendNumber(key);
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    chooseOperation(key);
  } else if (key === "Enter") {
    compute();
    prevDisplay.innerText = "";
  } else if (key === "Backspace") {
    currDisplay.value = currDisplay.value.slice(0, -1);
  } else {
    alert("Only numbers and operations are allowed");
  }
});
