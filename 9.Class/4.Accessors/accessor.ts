/**
 *TypeScript supports getters/setters as a way of intercepting accesses to a member of an object. 
 *This gives you a way of having finer-grained control over how a member is accessed on each object.
*/

//Let’s convert a simple class to use get and set. 
//First, let’s start with an example without getters and setters.


/**
 * The Employee class, having fullName property
	* @class Employee
 * @constructor
**/
class Employee {
    fullName: string;
}

let employee = new Employee();
employee.fullName = "AVNESH SHAKYA";
if (employee.fullName) {
    console.log(employee.fullName);
}

/* ==================================================================== */


// NOTE: Check Next file to more understanding
