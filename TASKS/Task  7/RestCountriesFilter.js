  
  const req = new XMLHttpRequest();
  req.open("GET","https://restcountries.com/v3.1/all");
  req.send();
  req.onload = function () {
    const obj = JSON.parse(this.response);
    console.log(obj);

    //Asian countries
    asianCountries = obj.filter((element) => element.region == "Asia")
    console.log(asianCountries);
    
    //Countries with population less than 2L.
    countriesWithPopLessThan2L = obj.filter((element) => element.population < 200000)
    console.log(countriesWithPopLessThan2L);

    //For Each - Name, Capital, Flag,

    obj.forEach(element => {
      console.log(element.name.common);
      console.log(element.capital);
      console.log(element.flags.png);
      
    });

    //Total population.
    totalPopulation = obj.reduce((acc, country) => acc + country.population , 0)
    console.log(totalPopulation);

    //Countries using USD currency.
    countiresUsingUSD = obj.filter((country) => country.currencies && country.currencies.USD)
    console.log(countiresUsingUSD);
  }