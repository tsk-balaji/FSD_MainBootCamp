class Car {
    #makeYear;
    #chasisNumber;

    constructor(
        color="Black",
        engine="6.2L",
        fuelType="Diesel",
        carType="SUV",
        seatCount="7",
        transimission="Manual",
        isOn,
        speed){
        this.color = color;
        this.engine = engine;
        this.fuelType = fuelType;
        this.carType = carType; 
        this.seatCount = seatCount;
        this.transimission = transimission;
        this.isOn = false;
        this.speed = 0;
        this.fuelLevel = 100;
        this.#makeYear = new Date().getFullYear();
        this.#chasisNumber = Math.floor(Math.random() * 1000000000);

    }

    get makeYear(){
        return this.#makeYear;  
    }

    get chasisNumber(){
        return this.#chasisNumber;
    }

    engineStart(){
        if(this.isOn){
            console.log("Engine is already On!!!")
    }else{
        console.log("Starting the engine !")
        this.isOn = true;
    }
    }
    engineOff(){
        if(this.isOn){
            console.log("Engine is turned down")
            this.isOn = false;
    }else{
        console.log("Car is already Off !! ")
     }
    }

    get fuel() {
        return this.fuelLevel;
    }

    
    set fuel(level) {
        if (level < 0) {
            this.fuelLevel = 0;
            console.log("Fuel level  can't be negative");
        }
        else if(level > 100) {
            this.fuelLevel = 100;
            console.log("Fuel level is full");
        }
        else{
            this.fuelLevel = level;
        }
    }

    get age(){
        return new Date().getFullYear() - this.#makeYear;     
    }
}

const car2 = new Car("Black","6.2L","Diesel","SUV","7","Manual");

console.log(car2)
console.log(car2.fuel);
console.log(car2.makeYear);
car2.fuel =  -50;
console.log(car2.fuel); 
console.log(car2.age);


