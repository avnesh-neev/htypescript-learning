/**
 *The protected modifier acts much like the private modifier with the exception that --
 *    members declared protected can also be accessed by instances of deriving classes.
 *For example:
 */


/**
 * The Person class is base class which showing Person Name using private property
 *
 * @class Person
 * @constructor
**/
class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}


/**
 * The Employee class is drived from Person class which showing Employee Name and Department name
 *
 * @class Employee
 * @constructor
**/
class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    /**
     *  The getElevatorPitch will display name and department
     *
     * @method getElevatorPitch
     * @override
     * @public
    */
    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // error