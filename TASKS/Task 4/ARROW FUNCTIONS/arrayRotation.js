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
  let k = +userInput[1];
  let sizeOfArr = arr.length;

  let rotateArray = () => {
    if (k === sizeOfArr) {
      return arr;
    } else if (k > sizeOfArr) {
      k = k % sizeOfArr;
    }

    for (let i = 0; i < k; i++) {
      arr.unshift(arr.pop());
    }

    console.log(arr);
  };

  rotateArray();
  //end-here
});
