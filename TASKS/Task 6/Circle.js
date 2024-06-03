class circle {
    constructor(radius,color){
        this.radius = radius; 
        this.color = color;
   }
   get getRadius() {
    return this.radius;
}

set setRadius(radius) {    
    this.radius = radius;
}

get getColor() {
    return this.color;
}

set setColor (color) {
    this.color = color;
}

get getArea () {
    return Math.PI * this.radius ** 2;
}

get getCircumference () {
    return 2 * Math.PI * this.radius;
}
}

let circle1 = new circle(5, "red");
let circle2 = new circle(10, "blue");

console.log(circle1);
console.log(circle2);
console.log(circle1.getArea);
console.log(circle2.getCircumference);
