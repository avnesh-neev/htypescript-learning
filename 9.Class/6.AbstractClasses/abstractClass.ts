/**
 *Abstract classes are base classes from which other classes may be derived. 
 *They may not be instantiated directly. 
 *Unlike an interface, an abstract class may contain implementation details for its members. 
 *The abstract keyword is used to define abstract classes as well as abstract methods within an abstract class.
*/


/**
 * The Animal class is Abstract class which showing animal behaviour
 *@class Animal:Abstract
 *@constructor
**/
abstract class Animal {
  abstract makeSound(): void;
  move(): void {
  	console.log("roaming the Bangalore...");
  }
}

/**
 * NOTE:  
 * =====
 *Methods within an abstract class that are marked as abstract do not contain an implementation 
 *	and must be implemented in derived classes. 
 *Abstract methods share a similar syntax to interface methods. 
 *Both define the signature of a method without including a method body. 
 *However, abstract methods must include the abstract keyword and may optionally include access modifiers.
 */