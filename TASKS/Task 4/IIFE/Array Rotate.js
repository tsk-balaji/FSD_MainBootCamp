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
  let k = +userInput[1];
  let sizeOfArr = arr.length;
  
  (function(arr1,k1,sizeOfArr1) {
      if (k1 === sizeOfArr1){
          return arr1;
      }else if(k1 > sizeOfArr1){
          k1 = k1 % sizeOfArr1;
      }
      
      for (let i =0 ; i < k1 ; i++){
          arr1.unshift(arr1.pop());
      }
      console.log(arr1);
  })(arr,k,sizeOfArr);

  //end-here
});