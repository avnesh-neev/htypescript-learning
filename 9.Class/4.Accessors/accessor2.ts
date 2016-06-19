let passcode = "secret passcode";


/**
 * The Employee class, having fullName property
 * @class Employee
 * @constructor
**/
class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
employee.fullName = "AVNESH SHAKYA";
if (employee.fullName) {
    console.log(employee.fullName);
}


/**
 * NOTE:    Accessors require you to set the compiler to output ECMAScript 5 or higher.
 */