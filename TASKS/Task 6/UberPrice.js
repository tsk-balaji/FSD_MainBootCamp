class uberPrice
    {
    constructor (distance,busy){
        this.distance = distance;
        this.busy = busy;
    }   
    price(){
        if(this.busy == true){
            if(this.distance < 5){
                let price = 1.5 * 60;
                return price;
            }else if(this.distance > 5){
                let price = 1.5 * (60 + ((this.distance - 5)*12 ));
                return price;
            }
            return price;
        }else if(this.busy == false){
            if(this.distance < 5){
               let price = 60;
                return price;
            }else if(this.distance > 5){
                let price = 60 + ((this.distance - 5)*12 );
                return price;
            }
        }
    }        
}


const ride1 = new uberPrice(10,true);
const ride2 = new uberPrice(10, false);

console.log(ride1.price());
console.log(ride2.price()); 
