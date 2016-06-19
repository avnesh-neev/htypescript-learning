/**
 * we can use common object-oriented patterns. 
 * Of course, one of the most fundamental patterns in class-based programming --
 *   is being able to extend existing classes to create new ones using inheritance.
*/


/**
 * The Animal class is base class which showing animal properties and behavior
 * @class Animal
 * @constructor
 **/
class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

/**
 * The Snake class is type of animal which is drived from Animal, and will extend its properties
 * @class Animal
 * @extends Animal
 * @constructor
**/
class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

/**
 * The Horse class is type of animal which is drived from Animal, and will extend its properties
 * @class Animal
 * @extends Animal
 * @constructor
**/
class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);






//Here we see the extends keywords used to create a subclass. 
//You can see this where Horse and Snake subclass the base class Animal and gain access to its features.

/**
 * NOTE:
 * ====
 *Derived classes that contain constructor functions must call super() which will execute the constructor function on the base class.
*/