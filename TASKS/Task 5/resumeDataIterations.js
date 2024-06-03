const resumeData = new XMLHttpRequest;
resumeData.open("GET", "./resumeData.json");
resumeData.send();
resumeData.onload = () => {
    const resume = JSON.parse(resumeData.response);
    console.log(resume);
    let resumeDataKeys = Object.keys(resume);



// for loop
for (let i = 0 ; i < resumeDataKeys.length ; i++){
 console.log(resume[resumeDataKeys[i]])
}

// For In Loop
for (const key in resume){
    console.log(`${key} : ${resume[key]}`);
}

//For of Loop
for (const key of resumeDataKeys){
    console.log(key);
}

//For Each Loop

resumeDataKeys.forEach((e,index)=> {
    console.log(e, "-" , index)
})

}

