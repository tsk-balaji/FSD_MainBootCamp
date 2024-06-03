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

let arr = userInput[0];

let palindrome = () =>  {
    if (arr.toLowerCase() === arr.split("").reverse().join("").toLowerCase()){
        console.log("Yes");
    } else {
        console.log("No");
    }
};

 
palindrome();

  //end-here
});