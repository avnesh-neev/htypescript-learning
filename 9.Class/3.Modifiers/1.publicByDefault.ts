/**
 * we can use common object-oriented patterns. 
 * Of course, one of the most fundamental patterns in class-based programming --
	*   is being able to extend existing classes to create new ones using inheritance.
*/

/**
 * NOTE:
 * 			In TypeScript, each member is public by default.
 *   	You may still mark a member public explicitly. We could have written the Animal class from the previous section in the following way:
 */


/**
 * The Animal class is base class which showing animal properties and behavior
 * 
 * @class Animal
 * @constructor
**/

class Animal {
	public name: string;

	public constructor(theName: string) { 
		this.name = theName; 
	}

	/**
   *  The move will display distance walked by Animal with Animal name
   *
   * @method createChildren
   * @override
   * @public
  */
	public move(distanceInMeters: number) {
		console.log(`${this.name} moved ${distanceInMeters}m.`);
	}
}