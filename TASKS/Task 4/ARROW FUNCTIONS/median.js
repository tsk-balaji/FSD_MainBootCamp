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

  let arr1 = userInput[0].split(" ").map(Number);
  let arr2 = userInput[1].split(" ").map(Number);
  sizeOfArrItem1 = arr1.length;
  sizeOfArrItem2 = sizeOfArrItem1 - 1;

  outputArr = arr1.concat(arr2).sort((a, b) => a - b);
  outputArr = outputArr.slice(1, outputArr.length);
  medianAns1 = outputArr[sizeOfArrItem1];
  medianAns2 = outputArr[sizeOfArrItem2];

  let median = (outputArr) => {
    finalAns = medianAns1 + medianAns2;
    console.log(finalAns / 2);
  };

  median();

  //end-here
});
