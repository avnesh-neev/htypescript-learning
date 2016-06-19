/* =================================================== */
/**
 * Class: declare a new class Greeter. 
 * This class has three members: a property called greeting, a constructor, and a method greet.
 */
/*================================================== */



/**
 * The Greeter class is base class which showing animal properties and behavior
	* @class Greeter
	* @constructor
**/
class Greeter {
	greeting: string;
	constructor(message: string) {
		this.greeting = message;
  }

  greet() {
  	return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");

console.log("check value: ", greeter.greeting);
console.log("check method: ", greeter.greet());


 //Point to remember
 //=================
 
 //You’ll notice that in the class when we refer to one of the members of the class we prepend this.. This denotes that it’s a member access.