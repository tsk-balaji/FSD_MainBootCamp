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

  var arr = userInput[0].split(" ").map(Number);
  var sum = 0;

  var sumOfAllNumbers = function () {
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    console.log(sum);
  };

  sumOfAllNumbers();

  //end-here
});
