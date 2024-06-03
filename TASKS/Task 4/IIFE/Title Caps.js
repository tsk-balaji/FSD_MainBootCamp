
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

let arr = userInput[0].split(" ");


(function(arr1){
    for (let i=0; i<arr1.length; i++){
        arr1[i] = arr1[i].charAt(0).toUpperCase() + arr1[i].slice(1);
    }
    console.log(arr1.join(" "));
})(arr);


//end-here
});


