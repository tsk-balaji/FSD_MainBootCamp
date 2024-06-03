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

//   console.log(userInput);
let arr1 = userInput[0].split(" ").map(Number);
let arr2 = userInput[1].split(" ").map(Number);



(function (arr3,arr4){
    sizeOfArrItem1 = arr3.length;
    sizeOfArrItem2 = (sizeOfArrItem1 - 1);
    outputArr = arr3.concat(arr4).sort((a,b)=> a-b);
    // outputArr = outputArr.slice(outputArr.length);
    // console.log(outputArr);
    
    medianAns1 = outputArr[sizeOfArrItem1];
    // console.log(medianAns1);
    medianAns2 = outputArr[sizeOfArrItem2];
    // console.log(medianAns2);
    
    finalAns = medianAns1 + medianAns2;
    
    console.log(finalAns/2);
})(arr1,arr2);

});