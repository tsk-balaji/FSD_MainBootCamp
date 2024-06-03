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
  let arrWithoutDuplicates = [];
  
  let removeDuplicate = function(){
        for (i=0; i < arr.length ; i++){
            if ( arrWithoutDuplicates.includes(arr[i])){
                
            }
            else{
                arrWithoutDuplicates.push(arr[i]);
            }
        }
        console.log(arrWithoutDuplicates);
        
  };
  
removeDuplicate();
  
  //end-here
});