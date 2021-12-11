class Car {
    
    constructor(make,model,year,color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    honkHorn() {
    console.log("beep, beep")
    }
}
class Nissan extends Car {

    constructor(make,model,year,color,engineType) {
        super(make,model,year,color);
        this.engineType = engineType;
    }
    honkHorn() {
        console.log("honk,honk");
    }
}

var myCar = new Car( "Nissan", "Altima", 2006, "red");

var nissanCar = new Nissan("Nissan", "Altima", 2006, "blue","V8");

myCar.make;
myCar.year;

nissanCar.honkHorn()

myCar.honkHorn()

