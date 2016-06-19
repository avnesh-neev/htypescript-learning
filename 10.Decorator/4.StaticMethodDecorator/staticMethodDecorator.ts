/**
 *Static Method Decorator
*/

/**
 * [StaticMethodDecorator description]
 * @param {Function}                     target     [description]
 * @param {string                    |          symbol}      propertyKey [description]
 * @param {TypedPropertyDescriptor<any>} descriptor [description]
 */
function StaticMethodDecorator(
  target: Function, // the function itself and not the prototype
  propertyKey: string | symbol, // The name of the static method
  descriptor: TypedPropertyDescriptor<any>
  ) {
  console.log("StaticMethodDecorator called on: ", target, propertyKey, descriptor);
}

class StaticMethodDecoratorExample {
  @StaticMethodDecorator
  static staticMethod() {
  }
}