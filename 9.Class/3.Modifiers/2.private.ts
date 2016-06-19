/**
 *When a member is marked private, it cannot be accessed from outside of its containing class. 
 *For example:
 */


/**
 * The Animal class is base class which showing animal Name using private property
 *
 * @class Animal
 * @constructor
**/

class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }

		/**
	   *  The showName will display name
		 *
	   * @method showName
	   * @override
	   * @public
	  */
    public showName() {
			console.log(this.name);
    }
}

let cat = new Animal("Cat");

cat.name; // Error: 'Property 'name' is private and only accessible within class 'Animal'.
cat.showName();  // will show name 