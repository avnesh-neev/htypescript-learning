/* =================================================== */
/**
 * Class: declare a new class Greeter.
 * This class has three members: a property called greeting, a constructor, and a method greet.
 */
/*================================================== */
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
console.log("check value: ", greeter.greeting);
console.log("check value: ", greeter.greet());
