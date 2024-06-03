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
  var noOfDiv = 0;
  var primeNumberArray = [];

  //prime Numbers in the list

  var primeNumbers = function () {
    for (i in arr) {
      for (j = 1; j <= arr[i]; j++) {
        if (arr[i] % j == 0) {
          noOfDiv++;
        }
      }
      if (noOfDiv == 2 || arr[i] == 1) {
        primeNumberArray.push(arr[i]);
      }
      noOfDiv = 0;
    }
    console.log(primeNumberArray.join(" "));
  };

  primeNumbers();
  //end-here
});
