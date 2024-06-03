// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic

  let arr = userInput[0].split(" ").map(Number);
  let oddNumbersArray = [];

  let oddNumbers = function () {
    for (i in arr) {
      if (arr[i] % 2 != 0) {
        oddNumbersArray.push(arr[i]);
      }
    }
    console.log(oddNumbersArray.join(" "));
  };

  oddNumbers();

  //end-here
});
