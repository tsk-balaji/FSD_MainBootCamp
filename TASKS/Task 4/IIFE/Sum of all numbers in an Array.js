
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

let arr = userInput[0].split(" ").map(Number);
sum = 0;

(function(arr1){
    for (let i=0; i<arr1.length; i++){
        sum += arr1[i];
        }
        console.log(sum);
    }
)(arr)
  //end-here
});