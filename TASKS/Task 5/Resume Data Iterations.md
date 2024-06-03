# Resume Data Iterations

[Resume Data in JSON format](https://github.com/tsk-balaji/MainBootCamp/blob/main/Tasks/Tasks/Task%205/Resume%20JSON.md)

**Object:**
```JS
let resumeData = {
    name: "Balaji T",
    dob : "05/07/2001",
    experience : "2 Years and 8 Months",
    currentJob : "Senior System Associate",
    qualifications : "MCA",
    skills : "MERN Stack , Python , Mainframe",
    currentEmployer : "Infosys Ltd",
    locationPrefences : "Chennai, Bangalore",
    hobby : "Bike ride , Movies"   
};
```

> **For Loop**
This For Loop is to iterate over resumeData returning the Values of the object resumeData.
- Can be used in all objects

==Code:==

```js
let resumeDataKeys = Object.keys(resumeData);

for (let i = 0 ; i < resumeDataKeys.length ; i++){
    console.log(resumeData[resumeDataKeys[i]])
}
```

==Output:==

```
Balaji T
05/07/2001
2 Years and 8 Months
Senior System Associate
MCA
MERN Stack , Python , Mainframe
Infosys Ltd
Chennai, Bangalore
Bike ride , Movies
```



> **For In loop :**

This For in Loop is to iterate over the values of Object in Resume JSON data:
- Skips empty elements





==Code:==

```js
for (const key in resumeData){
    console.log(`${key} : ${resumeData[key]}`);
}

```

==Output:==
```
name : Balaji T
dob : 05/07/2001
experience : 2 Years and 8 Months
currentJob : Senior System Associate
qualifications : MCA
skills : MERN Stack , Python , Mainframe
currentEmployer : Infosys Ltd
locationPrefences : Chennai, Bangalore
hobby : Bike ride , Movies
```
-------

> **For of loop :** 

This For of Loop is to iterate over the values of Object in Resume JSON data:

- Objects can't be iterated with For of


==Code:==

**Array Extraction:**

```js
let resumeDataKeys = Object.keys(resumeData);
```

**For Of Iteration**

```js
for (const key of resumeDataKeys){
    console.log(key);
}
```
==Output:==

```
name
dob
experience
currentJob
qualifications
skills
currentEmployer
locationPrefences
hobby
```

---

> **forEach loop :**


This forEach is to iterate over the array of values from Object resumeData.
- for each is available only in collection objects.
- Used to Iterate over the all the items of collections
  


==Code:==

**Array Extraction:**

```js
let resumeDataKeys = Object.keys(resumeData);
```

**For Each Iteration**

```js
resumeDataKeys.forEach((e,index)=> {
    console.log(e, "-" , index)
})
```


==Output:==
```
name - 0
dob - 1
experience - 2
currentJob - 3
qualifications - 4
skills - 5
currentEmployer - 6
locationPrefences - 7
hobby - 8
```

