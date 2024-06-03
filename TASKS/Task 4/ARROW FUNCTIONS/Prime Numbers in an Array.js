
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
noOfDiv = 0;
primeNumbersArray = [];


let primeNumber = () => {
    for (i in arr){
        for (let j=1 ; j <= arr[i] ; j++){
            if (arr[i]%j == 0){
                noOfDiv ++;
            }
        }
        if(noOfDiv ==2 || arr[i]==1){
            primeNumbersArray.push(arr[i]);
        }
        noOfDiv = 0;
    }
    console.log(primeNumbersArray.join(" "));
};


primeNumber();
  //end-here
});