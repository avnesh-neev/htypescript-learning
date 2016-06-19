/**
 *when comparing types that have private and protected members, 
 *we treat these types differently. For two types to be considered compatible, 
 *if one of them has a private member, then the other must have a private member that originated in the same declaration.
 *For example:
*/

/**
 * The Animal class is base class which showing animal Name using private property
 *
 *@class Animal
 *@constructor
**/

class Animal {
	private name: string;
	constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal {
    constructor() { super("Rhino"); }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
animal = employee; // Error: Type 'Employee' is not assignable to type 'Animal'.
  													//Types have separate declarations of a private property 'name'.