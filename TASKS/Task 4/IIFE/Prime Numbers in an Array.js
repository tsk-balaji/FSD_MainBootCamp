
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


(function(arr1){
    for (i in arr1){
        for (let j=1 ; j <= arr1[i] ; j++){
            if (arr1[i]%j == 0){
                noOfDiv ++;
            }
        }
        if(noOfDiv ==2 || arr1[i]==1){
            primeNumbersArray.push(arr[i]);
        }
        noOfDiv = 0;
    }
    console.log(primeNumbersArray.join(" "));
})(arr);


primeNumber();
  //end-here
});