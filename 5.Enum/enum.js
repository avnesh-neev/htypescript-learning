/*
@Topic: Array
@Description: A helpful addition to the standard set of datatypes from JavaScript is the 'enum'.
        Like languages like C#, an enum is a way of giving more friendly names to sets of numeric values.
*/
var Employee;
(function (Employee) {
    Employee[Employee["Avnesh"] = 0] = "Avnesh";
    Employee[Employee["Nimmy"] = 1] = "Nimmy";
    Employee[Employee["Piyush"] = 2] = "Piyush";
})(Employee || (Employee = {}));
;
var emp = Employee.Avnesh;
/*
    *By default, enums begin numbering their members starting at 0.
    *You can change this by manually setting the value of one its members. For example,
    *we can start the previous example at 1 instead of 0:

*/
var Employee;
(function (Employee) {
    Employee[Employee["Shakya"] = 1] = "Shakya";
    Employee[Employee["Babu"] = 2] = "Babu";
    Employee[Employee["Patel"] = 3] = "Patel";
})(Employee || (Employee = {}));
;
var emp1 = Employee.Shakya;
/*
    *Or, even manually set all the values in the enum:
 */
var Employee;
(function (Employee) {
    Employee[Employee["Divy"] = 1] = "Divy";
    Employee[Employee["Devashish"] = 2] = "Devashish";
    Employee[Employee["Kaushik"] = 3] = "Kaushik";
})(Employee || (Employee = {}));
;
var emp2 = Employee.Divy;
/*
    ** NOTE: A handy feature of enums is that you can also go from a numeric value to the name of that value in the enum.
        For example,
            if we had the value 2 but weren't sure which that mapped to in the Color enum above,
            we could look up the corresponding name:
 */
var Employee;
(function (Employee) {
    Employee[Employee["Archana"] = 1] = "Archana";
    Employee[Employee["Nikhil"] = 2] = "Nikhil";
    Employee[Employee["Shricharan"] = 3] = "Shricharan";
})(Employee || (Employee = {}));
;
var emp3 = Employee[2];
