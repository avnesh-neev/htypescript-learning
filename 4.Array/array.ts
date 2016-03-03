/*
@Topic: Array
@Description: TypeScript, like JavaScript, allows you to work with arrays of values. 
		Array types can be written in one of two ways. 
		In the first, you use the type of the elements followed by '[]' to 
		denote an array of that element type:
*/

var employeeList: number[] = [707, 708, 709];


/*
	** The second way uses a generic array type, Array<elemType>:
*/

var employeeList: Array<number> = [707, 708, 709];

