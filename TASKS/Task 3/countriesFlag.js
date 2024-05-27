  
  const req = new XMLHttpRequest();
  req.open("GET","https://restcountries.com/v3.1/all");
  req.send();
  req.onload = function () {
    const obj = JSON.parse(this.response);
    for (let i = 0; i < obj.length; i++) {
      //flags of the countries
      // console.log(obj[i].name.official)
      // console.log(obj[i].capital);
      console.log(obj[i].flags.svg);
      console.log(obj[i].region);      //region
      console.log(obj[i].subregion);   //subregion
      console.log(obj[i].population);  //population
      console.log(obj[i].name.common); //countryNames
    }
  }