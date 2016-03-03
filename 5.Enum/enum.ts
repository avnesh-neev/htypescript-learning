/*
@Topic: Array
@Description: A helpful addition to the standard set of datatypes from JavaScript is the 'enum'. 
		Like languages like C#, an enum is a way of giving more friendly names to sets of numeric values.
*/

enum Employee {Avnesh, Nimmy, Piyush};
var emp: Employee = Employee.Avnesh;

/*
	*By default, enums begin numbering their members starting at 0. 
	*You can change this by manually setting the value of one its members. For example, 
	*we can start the previous example at 1 instead of 0:

*/

enum Employee {Shakya=1, Babu, Patel};
var emp1: Employee = Employee.Shakya;

/*
	*Or, even manually set all the values in the enum:
 */

enum Employee {Divy=1, Devashish, Kaushik};
var emp2: Employee = Employee.Divy;

/*
	** NOTE: A handy feature of enums is that you can also go from a numeric value to the name of that value in the enum. 
		For example, 
			if we had the value 2 but weren't sure which that mapped to in the Color enum above, 
			we could look up the corresponding name:
 */

enum Employee {Archana=1, Nikhil, Shricharan};
var emp3: string = Employee[2];
